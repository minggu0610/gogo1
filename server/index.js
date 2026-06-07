import { POLICIES } from './policiesMock.js';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle OPTIONS request
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Router
    if (url.pathname === '/api/policies') {
      return new Response(JSON.stringify({
        success: true,
        count: POLICIES.length,
        data: POLICIES
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/lh-notices') {
      try {
        const UPP_AIS_TP_CD_PARAM = url.searchParams.get('UPP_AIS_TP_CD') || '06';
        const codes = UPP_AIS_TP_CD_PARAM.split(',');
        const PAGE = url.searchParams.get('PAGE') || '1';
        const PG_SZ = url.searchParams.get('PG_SZ') || '10';
        const LH_API_KEY = env.LH_API_KEY;

        const fetchNotice = async (code) => {
          const lhUrl = `http://apis.data.go.kr/B552555/lhLeaseNoticeInfo1/lhLeaseNoticeInfo1?serviceKey=${LH_API_KEY}&UPP_AIS_TP_CD=${code}&PAGE=${PAGE}&PG_SZ=${PG_SZ}&_type=json`;
          const response = await fetch(lhUrl);
          return await response.json();
        };

        const results = await Promise.all(codes.map(code => fetchNotice(code)));
        
        // Combine results
        const combinedData = results.map((data, index) => ({
          code: codes[index],
          data: data
        }));

        return new Response(JSON.stringify({
          success: true,
          data: combinedData
        }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      } catch (error) {
        return new Response(JSON.stringify({
          success: false,
          message: 'Failed to fetch LH notices',
          error: error.message
        }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
    }

    if (url.pathname === '/api/chat' && request.method === 'POST') {
      try {
        const { message, history, userData } = await request.json();
        const GEMINI_API_KEY = env.GEMINI_API_KEY;

        if (!GEMINI_API_KEY) {
          return new Response(JSON.stringify({
            success: false,
            message: 'Gemini API Key is not configured'
          }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          });
        }

        const systemPrompt = `당신은 대한민국 청년들을 위한 주거 정책 전문가 '둥지탈출 AI 멘토'입니다.
유저의 정보와 질문을 바탕으로 가장 적합한 주거 정책(임대주택, 전세자금 대출, 월세 지원 등)을 추천하고 상담해 주세요.

유저 정보:
${JSON.stringify(userData, null, 2)}

상담 가이드라인:
1. 친절하고 전문적인 톤을 유지하세요.
2. 유저의 소득, 자산, 거주지 조건을 고려하여 실질적인 도움이 되는 조언을 하세요.
3. 정확하지 않은 정보일 경우 LH 청약플러스나 마이홈 포털을 확인하도록 안내하세요.
4. 답변은 한국어로 하세요.`;

        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
        
        const contents = [
          { role: 'user', parts: [{ text: systemPrompt }] },
          { role: 'model', parts: [{ text: "알겠습니다. 둥지탈출 AI 멘토로서 청년들의 주거 안정을 위해 최선을 다해 상담해 드리겠습니다. 무엇이 궁금하신가요?" }] },
          ...history.map(h => ({
            role: h.type === 'user' ? 'user' : 'model',
            parts: [{ text: h.text }]
          })),
          { role: 'user', parts: [{ text: message }] }
        ];

        const response = await fetch(geminiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents })
        });

        const data = await response.json();
        const aiResponse = data.candidates[0].content.parts[0].text;

        return new Response(JSON.stringify({
          success: true,
          reply: aiResponse
        }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      } catch (error) {
        return new Response(JSON.stringify({
          success: false,
          message: 'Chat error',
          error: error.message
        }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
    }

    return new Response('Not Found', { status: 404 });
  }
};
