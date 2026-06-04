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
        const UPP_AIS_TP_CD = url.searchParams.get('UPP_AIS_TP_CD') || '06';
        const PAGE = url.searchParams.get('PAGE') || '1';
        const PG_SZ = url.searchParams.get('PG_SZ') || '10';
        const LH_API_KEY = env.LH_API_KEY;

        const lhUrl = `http://apis.data.go.kr/B552555/lhLeaseNoticeInfo1/lhLeaseNoticeInfo1?serviceKey=${LH_API_KEY}&UPP_AIS_TP_CD=${UPP_AIS_TP_CD}&PAGE=${PAGE}&PG_SZ=${PG_SZ}&_type=json`;
        
        const response = await fetch(lhUrl);
        const data = await response.json();

        return new Response(JSON.stringify({
          success: true,
          data: data
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

    return new Response('Not Found', { status: 404 });
  }
};
