// --- Firebase Configuration ---
const firebaseConfig = {
  apiKey: "AIzaSyARt28EI9InQNsF9SomXkobb8cjK8h2reM",
  authDomain: "gogo-ec3d3.firebaseapp.com",
  databaseURL: "https://gogo-ec3d3-default-rtdb.firebaseio.com",
  projectId: "gogo-ec3d3",
  storageBucket: "gogo-ec3d3.firebasestorage.app",
  messagingSenderId: "576809686159",
  appId: "1:576809686159:web:ce6c9f773fa877ce2c8cfa",
  measurementId: "G-L3NYBWP4Z9"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// --- Game Data ---
const gameData = {
  "general": [
    // Theme 1: 연애/썸
    { id: "gen-1", tag: "#연애/썸", title: "양치 vs 안 씻기", q: "평생 양치 안 하는 애인<br><span class='vs'>VS</span><br>평생 안 씻는 애인", a: "양치 안 함", b: "안 씻음", vA: 0, vB: 0, likes: 0 },
    { id: "gen-2", tag: "#연애/썸", title: "전애인 절친 vs 현애인 절친", q: "전애인과 절친인 현애인<br><span class='vs'>VS</span><br>현애인과 절친인 전애인", a: "현애인이 절친", b: "전애인이 절친", vA: 0, vB: 0, likes: 0 },
    { id: "gen-3", tag: "#연애/썸", title: "내 이름 vs 알바생", q: "애인 폰에 내 이름 'ㅇㅇㅇ'(이름만)<br><span class='vs'>VS</span><br>'알바생'(다른 호칭)", a: "이름만", b: "다른 호칭", vA: 0, vB: 0, likes: 0 },
    { id: "gen-4", tag: "#연애/썸", title: "한 달 한 번 vs 매일 10시간", q: "한 달에 한 번 만나는 애인<br><span class='vs'>VS</span><br>매일 10시간씩 만나야 하는 애인", a: "한 달 한 번", b: "매일 10시간", vA: 0, vB: 0, likes: 0 },
    { id: "gen-5", tag: "#연애/썸", title: "빚 10억 이상형 vs 100억 자산가", q: "빚 10억 있는 완벽한 이상형<br><span class='vs'>VS</span><br>자산 100억 있는 최악의 외모", a: "이상형", b: "100억 자산가", vA: 0, vB: 0, likes: 0 },
    { id: "gen-6", tag: "#연애/썸", title: "남여사친 여행 vs 갠톡 100명", q: "애인의 남/여사친 1명 (단둘이 1박 2일 여행)<br><span class='vs'>VS</span><br>100명 (매일 갠톡하고 밥 먹음)", a: "여행 1명", b: "갠톡 100명", vA: 0, vB: 0, likes: 0 },
    { id: "gen-7", tag: "#연애/썸", title: "플라토닉 vs 스킨십", q: "스킨십 없는 플라토닉 사랑 100%<br><span class='vs'>VS</span><br>대화 안 통하는 스킨십 100%", a: "플라토닉", b: "스킨십만", vA: 0, vB: 0, likes: 0 },
    { id: "gen-8", tag: "#연애/썸", title: "내가 더 vs 나를 더", q: "내가 더 좋아하는 사람<br><span class='vs'>VS</span><br>나를 더 좋아하는 사람", a: "내가 더 좋아함", b: "나를 더 좋아함", vA: 0, vB: 0, likes: 0 },
    { id: "gen-9", tag: "#연애/썸", title: "환승 vs 잠수", q: "환승이별 당하기<br><span class='vs'>VS</span><br>잠수이별 당하기", a: "환승이별", b: "잠수이별", vA: 0, vB: 0, likes: 0 },
    { id: "gen-10", tag: "#연애/썸", title: "속옷 발견", q: "애인 집에 내 절친 속옷 발견<br><span class='vs'>VS</span><br>절친 집에 내 애인 속옷 발견", a: "애인 집", b: "절친 집", vA: 0, vB: 0, likes: 0 },
    { id: "gen-11", tag: "#연애/썸", title: "술 vs 커피", q: "10년지기 이성친구와 단둘이 술 마시는 애인<br><span class='vs'>VS</span><br>처음 만난 이성과 단둘이 커피 마시는 애인", a: "술", b: "커피", vA: 0, vB: 0, likes: 0 },
    { id: "gen-12", tag: "#연애/썸", title: "트레이닝 vs 풀정장", q: "365일 트레이닝복만 입는 애인<br><span class='vs'>VS</span><br>365일 풀정장/드레스만 입는 애인", a: "트레이닝", b: "풀정장", vA: 0, vB: 0, likes: 0 },
    { id: "gen-13", tag: "#연애/썸", title: "기념일 실종 vs 이벤트 강요", q: "기념일 다 까먹는 애인<br><span class='vs'>VS</span><br>매달 14일마다 엄청난 이벤트 강요하는 애인", a: "기념일 실종", b: "이벤트 강요", vA: 0, vB: 0, likes: 0 },
    { id: "gen-14", tag: "#연애/썸", title: "요리 테러 vs 요리 거부", q: "요리 엄청 못하는데 매일 해주는 애인<br><span class='vs'>VS</span><br>요리 엄청 잘하는데 절대 안 해주는 애인", a: "요리 테러", b: "요리 거부", vA: 0, vB: 0, likes: 0 },
    { id: "gen-15", tag: "#연애/썸", title: "쩝쩝 vs 침 튀김", q: "밥 먹을 때마다 심하게 쩝쩝대는 애인<br><span class='vs'>VS</span><br>말할 때마다 침 튀기는 애인", a: "쩝쩝대기", b: "침 튀기기", vA: 0, vB: 0, likes: 0 },
    { id: "gen-16", tag: "#연애/썸", title: "전애인 마주침 vs 목격", q: "애인과 데이트 중 전애인 마주치기<br><span class='vs'>VS</span><br>절친과 노는데 애인이 다른 이성과 있는 거 목격하기", a: "전애인 마주침", b: "목격", vA: 0, vB: 0, likes: 0 },
    { id: "gen-17", tag: "#연애/썸", title: "12시간 텀 vs 10분 보고", q: "연락 텀 기본 12시간인 애인<br><span class='vs'>VS</span><br>10분마다 뭐 하냐고 캐묻는 애인", a: "12시간 텀", b: "10분 보고", vA: 0, vB: 0, likes: 0 },
    { id: "gen-18", tag: "#연애/썸", title: "입냄새 vs 발냄새", q: "입 냄새 심한 애인<br><span class='vs'>VS</span><br>발 냄새 심한 애인", a: "입냄새", b: "발냄새", vA: 0, vB: 0, likes: 0 },
    { id: "gen-19", tag: "#연애/썸", title: "1주일 공개 vs 10년 비밀", q: "공개 연애했는데 1주일 만에 차이기<br><span class='vs'>VS</span><br>10년 사귀었는데 주변 아무도 모르기", a: "1주일 공개", b: "10년 비밀", vA: 0, vB: 0, likes: 0 },
    { id: "gen-20", tag: "#연애/썸", title: "조각 미남녀 vs 뼈그맨", q: "얼굴은 차은우/카리나인데 노잼인 애인<br><span class='vs'>VS</span><br>얼굴은 평범한데 뼈그맨인 애인", a: "조각 미남녀", b: "뼈그맨", vA: 0, vB: 0, likes: 0 },
    
    // Theme 2: 학교/직장
    { id: "gen-21", tag: "#학교/직장", title: "매일 야근 1000 vs 주4일 200", q: "매일 야근하고 월 1,000만 원<br><span class='vs'>VS</span><br>주 4일 칼퇴하고 월 200만 원", a: "야근 1000", b: "주4일 200", vA: 0, vB: 0, likes: 0 },
    { id: "gen-22", tag: "#학교/직장", title: "왕복 4시간 vs 왕복 10분", q: "왕복 4시간 편한 직장/학교<br><span class='vs'>VS</span><br>왕복 10분 지옥의 직장/학교", a: "왕복 4시간", b: "왕복 10분", vA: 0, vB: 0, likes: 0 },
    { id: "gen-23", tag: "#학교/직장", title: "꼰대 상사 vs 핑프 5명", q: "꼰대 상사/선배 1명과 일하기<br><span class='vs'>VS</span><br>핑거프린세스 신입/후배 5명과 일하기", a: "꼰대 1명", b: "핑프 5명", vA: 0, vB: 0, likes: 0 },
    { id: "gen-24", tag: "#학교/직장", title: "일요병 극복 vs 금요일 조퇴", q: "월요병 없는 일요일 밤<br><span class='vs'>VS</span><br>금요일 조기 퇴근/하교", a: "일요병 극복", b: "금요일 조퇴", vA: 0, vB: 0, likes: 0 },
    { id: "gen-25", tag: "#학교/직장", title: "평생 재택 vs 평생 출근", q: "평생 재택근무 (외출 절대 불가)<br><span class='vs'>VS</span><br>평생 사무실 출근 (재택 불가)", a: "평생 재택", b: "평생 출근", vA: 0, vB: 0, likes: 0 },
    { id: "gen-26", tag: "#학교/직장", title: "착한 무능 vs 못된 유능", q: "일 못하는데 착한 동료<br><span class='vs'>VS</span><br>일 엄청 잘하는데 싸가지 없는 동료", a: "착한 무능", b: "못된 유능", vA: 0, vB: 0, likes: 0 },
    { id: "gen-27", tag: "#학교/직장", title: "동결 임금 vs 연봉 삭감", q: "연봉협상 없이 평생 동일 임금<br><span class='vs'>VS</span><br>매년 연봉 삭감되지만 휴가 무제한", a: "동결 임금", b: "휴가 무제한", vA: 0, vB: 0, likes: 0 },
    { id: "gen-28", tag: "#학교/직장", title: "독대 여행 vs 장기자랑", q: "상사/교수님과 2박 3일 독대 여행<br><span class='vs'>VS</span><br>전 직원/전교생 앞에서 단독 장기자랑", a: "독대 여행", b: "장기자랑", vA: 0, vB: 0, likes: 0 },
    { id: "gen-29", tag: "#학교/직장", title: "소고기 회식 vs 삼각김밥", q: "회식 무조건 필참인데 늘 소고기 사줌<br><span class='vs'>VS</span><br>회식 절대 없는데 맨날 삼각김밥", a: "소고기 회식", b: "삼각김밥", vA: 0, vB: 0, likes: 0 },
    { id: "gen-30", tag: "#학교/직장", title: "출근 배탈 vs 퇴근 상사", q: "출근길 지옥철에서 심한 배탈 나기<br><span class='vs'>VS</span><br>퇴근길 지옥철에서 상사 마주쳐서 내내 서서 가기", a: "출근 배탈", b: "퇴근 상사", vA: 0, vB: 0, likes: 0 },
    { id: "gen-31", tag: "#학교/직장", title: "발표 독박 vs 자료조사 독박", q: "PPT 발표 혼자 다 하기 (자료조사 남이 완벽하게 줌)<br><span class='vs'>VS</span><br>자료조사 혼자 다 하기 (발표 남이 완벽하게 함)", a: "발표 독박", b: "자료조사 독박", vA: 0, vB: 0, likes: 0 },
    { id: "gen-32", tag: "#학교/직장", title: "프리라이더 vs 하드캐리", q: "팀플에서 아무것도 안 하는 프리라이더 되기<br><span class='vs'>VS</span><br>프리라이더 3명 멱살 잡고 하드캐리 하기", a: "프리라이더", b: "하드캐리", vA: 0, vB: 0, likes: 0 },
    { id: "gen-33", tag: "#학교/직장", title: "2.0 연봉 1억 vs 4.5 연봉 3천", q: "평생 학점 2.0 & 연봉 1억<br><span class='vs'>VS</span><br>평생 학점 4.5 & 연봉 3천", a: "2.0 1억", b: "4.5 3천", vA: 0, vB: 0, likes: 0 },
    { id: "gen-34", tag: "#학교/직장", title: "투명인간 vs 가십 중심", q: "직장/학교에서 투명인간 취급받기<br><span class='vs'>VS</span><br>매일 모든 이슈와 가십의 중심 되기", a: "투명인간", b: "가십 중심", vA: 0, vB: 0, likes: 0 },
    { id: "gen-35", tag: "#학교/직장", title: "야! vs 자기야", q: "상사에게 실수로 '야' 라고 카톡 보내기<br><span class='vs'>VS</span><br>상사에게 실수로 '자기야 사랑해' 이모티콘 보내기", a: "야!", b: "자기야", vA: 0, vB: 0, likes: 0 },
    { id: "gen-36", tag: "#학교/직장", title: "휴지 없음 vs 변기 막힘", q: "화장실에서 큰일 보는데 휴지 없음<br><span class='vs'>VS</span><br>큰일 보는데 변기 막혀서 물 넘침", a: "휴지 없음", b: "변기 막힘", vA: 0, vB: 0, likes: 0 },
    { id: "gen-37", tag: "#학교/직장", title: "무임금 칭찬 vs 쌍욕 보너스", q: "매일 칭찬받지만 월급 밀리는 회사<br><span class='vs'>VS</span><br>매일 쌍욕 먹지만 보너스 빵빵한 회사", a: "무임금 칭찬", b: "쌍욕 보너스", vA: 0, vB: 0, likes: 0 },
    { id: "gen-38", tag: "#학교/직장", title: "9시 수업 vs 야간 수업", q: "매일 1교시(오전 9시) 수업 듣기<br><span class='vs'>VS</span><br>매일 야간 수업 듣기", a: "9시 수업", b: "야간 수업", vA: 0, vB: 0, likes: 0 },
    { id: "gen-39", tag: "#학교/직장", title: "전공 최악 vs 비전공 성공", q: "전공 살려서 취업했지만 적성 최악<br><span class='vs'>VS</span><br>전공 아예 버리고 취업했는데 대성공", a: "전공 최악", b: "비전공 성공", vA: 0, vB: 0, likes: 0 },
    { id: "gen-40", tag: "#학교/직장", title: "따돌림 루팡 vs 인정 일개미", q: "월급 루팡으로 찍혀서 은근히 따돌림당하기<br><span class='vs'>VS</span><br>일개미로 인정받아서 남의 일까지 다 떠안기", a: "따돌림 루팡", b: "인정 일개미", vA: 0, vB: 0, likes: 0 },
    
    // Theme 3: 돈/초능력
    { id: "gen-41", tag: "#돈/초능력", title: "10억 확정 vs 50% 100억", q: "100% 확률로 10억 받기<br><span class='vs'>VS</span><br>50% 확률로 100억 받기", a: "10억 확정", b: "50% 100억", vA: 0, vB: 0, likes: 0 },
    { id: "gen-42", tag: "#돈/초능력", title: "10세 체력 vs 70세 재력", q: "평생 10살의 체력과 외모로 살기<br><span class='vs'>VS</span><br>평생 70살의 지혜와 재력으로 살기", a: "10세 체력", b: "70세 재력", vA: 0, vB: 0, likes: 0 },
    { id: "gen-43", tag: "#돈/초능력", title: "과거 회귀 vs 미래 예지", q: "과거로 돌아가는 능력<br><span class='vs'>VS</span><br>미래를 보는 능력", a: "과거 회귀", b: "미래 예지", vA: 0, vB: 0, likes: 0 },
    { id: "gen-44", tag: "#돈/초능력", title: "투명인간 vs 순간이동", q: "투명인간 되기<br><span class='vs'>VS</span><br>순간이동 하기", a: "투명인간", b: "순간이동", vA: 0, vB: 0, likes: 0 },
    { id: "gen-45", tag: "#돈/초능력", title: "독심술 vs 조종술", q: "다른 사람 마음 읽기<br><span class='vs'>VS</span><br>내 마음대로 남 조종하기", a: "독심술", b: "조종술", vA: 0, vB: 0, likes: 0 },
    { id: "gen-46", tag: "#돈/초능력", title: "눈물 만원 vs 땀 만원", q: "눈물 흘릴 때마다 1만 원 나오기<br><span class='vs'>VS</span><br>땀 흘릴 때마다 1만 원 나오기", a: "눈물 만원", b: "땀 만원", vA: 0, vB: 0, likes: 0 },
    { id: "gen-47", tag: "#돈/초능력", title: "로또 비밀 vs 전 국민 공개", q: "로또 1등 당첨 사실을 평생 아무에게도 말 못 함<br><span class='vs'>VS</span><br>당첨 사실을 전 국민이 알게 됨", a: "비밀 유지", b: "전국 공개", vA: 0, vB: 0, likes: 0 },
    { id: "gen-48", tag: "#돈/초능력", title: "폰 없이 10억 vs 그냥 살기", q: "1년 동안 스마트폰 없이 살고 10억 받기<br><span class='vs'>VS</span><br>그냥 살기", a: "폰 없이 10억", b: "그냥 살기", vA: 0, vB: 0, likes: 0 },
    { id: "gen-49", tag: "#돈/초능력", title: "+10cm 빚10억 vs -10cm 10억", q: "키 10cm 크고 10억 빚지기<br><span class='vs'>VS</span><br>키 10cm 작아지고 10억 받기", a: "+10cm 빚10억", b: "-10cm 10억", vA: 0, vB: 0, likes: 0 },
    { id: "gen-50", tag: "#돈/초능력", title: "탄산 공짜 vs 치킨 공짜", q: "평생 탄산음료 공짜<br><span class='vs'>VS</span><br>평생 치킨 공짜", a: "탄산 공짜", b: "치킨 공짜", vA: 0, vB: 0, likes: 0 },
    { id: "gen-51", tag: "#돈/초능력", title: "코인 100억 감옥 vs 평범 인생", q: "코인으로 100억 벌었는데 감옥 3년 가기<br><span class='vs'>VS</span><br>빚 없이 평범하게 평생 일하며 살기", a: "코인 100억", b: "평범 인생", vA: 0, vB: 0, likes: 0 },
    { id: "gen-52", tag: "#돈/초능력", title: "외국어 마스터 vs 악기 마스터", q: "세상의 모든 외국어 마스터<br><span class='vs'>VS</span><br>세상의 모든 악기 마스터", a: "외국어 마스터", b: "악기 마스터", vA: 0, vB: 0, likes: 0 },
    { id: "gen-53", tag: "#돈/초능력", title: "무한 체력 vs 1시간 재력", q: "평생 잠 안 자도 피곤하지 않은 체력<br><span class='vs'>VS</span><br>하루 1시간만 일해도 되는 재력", a: "무한 체력", b: "1시간 재력", vA: 0, vB: 0, likes: 0 },
    { id: "gen-54", tag: "#돈/초능력", title: "부자 무명 vs 빈털 유명", q: "전 세계 1등 부자인데 아무도 나를 모름<br><span class='vs'>VS</span><br>전 세계 1등 유명인인데 빈털터리", a: "부자 무명", b: "빈털 유명", vA: 0, vB: 0, likes: 0 },
    { id: "gen-55", tag: "#돈/초능력", title: "부자 백수 vs 존경 CEO", q: "숨만 쉬어도 돈이 들어오는 백수<br><span class='vs'>VS</span><br>내가 이룬 성과로 전 세계의 존경을 받는 CEO", a: "부자 백수", b: "존경 CEO", vA: 0, vB: 0, likes: 0 },
    { id: "gen-56", tag: "#돈/초능력", title: "똥맛 카레 vs 카레맛 똥", q: "똥맛 카레 먹기 (100만 원 줌)<br><span class='vs'>VS</span><br>카레맛 똥 먹기 (100만 원 줌)", a: "똥맛 카레", b: "카레맛 똥", vA: 0, vB: 0, likes: 0 },
    { id: "gen-57", tag: "#돈/초능력", title: "연예인 데이트 vs 면접 프리패스", q: "원하는 사람(연예인 포함)과 하루 맘대로 데이트권<br><span class='vs'>VS</span><br>원하는 직장에 면접 프리패스 합격권", a: "연예인 데이트", b: "면접 프리패스", vA: 0, vB: 0, likes: 0 },
    { id: "gen-58", tag: "#돈/초능력", title: "모든 병 완치 vs 죽은 자 소생", q: "모든 병을 고치는 능력<br><span class='vs'>VS</span><br>죽은 사람을 딱 한 번 살리는 능력", a: "모든 병 완치", b: "죽은 자 소생", vA: 0, vB: 0, likes: 0 },
    { id: "gen-59", tag: "#돈/초능력", title: "라면 인생 vs 치킨 인생", q: "한 가지 음식만 먹고살아야 한다면: 평생 라면<br><span class='vs'>VS</span><br>평생 치킨", a: "평생 라면", b: "평생 치킨", vA: 0, vB: 0, likes: 0 },
    { id: "gen-60", tag: "#돈/초능력", title: "기억 천재 vs 망각 천재", q: "기억력 천재 (모든 걸 잊지 못함)<br><span class='vs'>VS</span><br>망각 천재 (원하는 건 다 잊을 수 있음)", a: "기억 천재", b: "망각 천재", vA: 0, vB: 0, likes: 0 },
    
    // Theme 4: 일상/음식
    { id: "gen-61", tag: "#일상/음식", title: "여름만 vs 겨울만", q: "평생 여름만 있기<br><span class='vs'>VS</span><br>평생 겨울만 있기", a: "평생 여름", b: "평생 겨울", vA: 0, vB: 0, likes: 0 },
    { id: "gen-62", tag: "#일상/음식", title: "노 고기 vs 노 밀가루", q: "평생 고기 못 먹기<br><span class='vs'>VS</span><br>평생 밀가루 못 먹기", a: "노 고기", b: "노 밀가루", vA: 0, vB: 0, likes: 0 },
    { id: "gen-63", tag: "#일상/음식", title: "민초 피자 vs 파인 소주", q: "민트초코 피자 먹기<br><span class='vs'>VS</span><br>파인애플 소주 마시기", a: "민초 피자", b: "파인 소주", vA: 0, vB: 0, likes: 0 },
    { id: "gen-64", tag: "#일상/음식", title: "평생 짬뽕 vs 평생 짜장", q: "짜장면 없이 평생 짬뽕<br><span class='vs'>VS</span><br>짬뽕 없이 평생 짜장면", a: "평생 짬뽕", b: "평생 짜장", vA: 0, vB: 0, likes: 0 },
    { id: "gen-65", tag: "#일상/음식", title: "평생 물냉 vs 평생 비냉", q: "평생 물냉면만 먹기<br><span class='vs'>VS</span><br>평생 비빔냉면만 먹기", a: "평생 물냉", b: "평생 비냉", vA: 0, vB: 0, likes: 0 },
    { id: "gen-66", tag: "#일상/음식", title: "눅눅 부먹 vs 딱딱 찍먹", q: "탕수육 부먹 (단, 눅눅함 극상)<br><span class='vs'>VS</span><br>탕수육 찍먹 (단, 튀김옷 너무 딱딱해서 입천장 까짐)", a: "눅눅 부먹", b: "딱딱 찍먹", vA: 0, vB: 0, likes: 0 },
    { id: "gen-67", tag: "#일상/음식", title: "노 콜라 햄버거 vs 노 단무지 짜장", q: "콜라 없이 햄버거 세트 먹기<br><span class='vs'>VS</span><br>단무지 없이 짜장면 먹기", a: "노 콜라", b: "노 단무지", vA: 0, vB: 0, likes: 0 },
    { id: "gen-68", tag: "#일상/음식", title: "노 노래 vs 노 영상", q: "24시간 동안 노래 못 듣기<br><span class='vs'>VS</span><br>24시간 동안 영상(유튜브 등) 못 보기", a: "노 노래", b: "노 영상", vA: 0, vB: 0, likes: 0 },
    { id: "gen-69", tag: "#일상/음식", title: "노 샴푸 vs 노 양치", q: "평생 머리 안 감기<br><span class='vs'>VS</span><br>평생 양치 안 하기", a: "노 샴푸", b: "노 양치", vA: 0, vB: 0, likes: 0 },
    { id: "gen-70", tag: "#일상/음식", title: "모기 10 vs 파리 100", q: "모기 10마리랑 한 방에서 자기<br><span class='vs'>VS</span><br>파리 100마리랑 한 방에서 자기", a: "모기 10", b: "파리 100", vA: 0, vB: 0, likes: 0 },
    { id: "gen-71", tag: "#일상/음식", title: "웅덩이 슬리퍼 vs 흰바지 국물", q: "비 오는 날 슬리퍼 신고 물웅덩이 밟기<br><span class='vs'>VS</span><br>흰 바지 입었는데 짬뽕 국물 튀기기", a: "웅덩이 슬리퍼", b: "흰바지 국물", vA: 0, vB: 0, likes: 0 },
    { id: "gen-72", tag: "#일상/음식", title: "광고 스킵 불가 vs 오프닝 스킵 불가", q: "유튜브 광고 건너뛰기 불가<br><span class='vs'>VS</span><br>넷플릭스 오프닝 건너뛰기 불가", a: "유튜브 광고", b: "넷플 오프닝", vA: 0, vB: 0, likes: 0 },
    { id: "gen-73", tag: "#일상/음식", title: "1% 충전기 없음 vs 노 와이파이 데이터 소진", q: "배터리 1%인데 충전기 없음<br><span class='vs'>VS</span><br>와이파이 안 터지는데 데이터 다 씀", a: "1% 배터리", b: "노 데이터", vA: 0, vB: 0, likes: 0 },
    { id: "gen-74", tag: "#일상/음식", title: "노 카톡 vs 노 인스타", q: "카카오톡 없이 살기<br><span class='vs'>VS</span><br>인스타그램 없이 살기", a: "노 카톡", b: "노 인스타", vA: 0, vB: 0, likes: 0 },
    { id: "gen-75", tag: "#일상/음식", title: "평생 소주 vs 평생 맥주", q: "평생 소주만 마시기<br><span class='vs'>VS</span><br>평생 맥주만 마시기", a: "평생 소주", b: "평생 맥주", vA: 0, vB: 0, likes: 0 },
    { id: "gen-76", tag: "#일상/음식", title: "내릴 때 가방 끼임 vs 탈 때 옷 끼임", q: "지하철에서 내릴 때 문에 백팩 끼이기<br><span class='vs'>VS</span><br>탈 때 문에 겉옷 끼이기", a: "내릴 때", b: "탈 때", vA: 0, vB: 0, likes: 0 },
    { id: "gen-77", tag: "#일상/음식", title: "이어폰 한쪽 vs 액정 박살", q: "이어폰 한쪽만 들리기<br><span class='vs'>VS</span><br>액정 절반 이상 깨진 폰 쓰기", a: "이어폰 한쪽", b: "액정 박살", vA: 0, vB: 0, likes: 0 },
    { id: "gen-78", tag: "#일상/음식", title: "사계절 전기장판 vs 사계절 에어컨", q: "사계절 내내 전기장판 최고 온도 틀기<br><span class='vs'>VS</span><br>사계절 내내 에어컨 최저 온도 틀기", a: "전기장판", b: "에어컨", vA: 0, vB: 0, likes: 0 },
    { id: "gen-79", tag: "#일상/음식", title: "화장실 바퀴벌레 vs 수면 중 모기", q: "씻기 전에 화장실에서 주먹만 한 바퀴벌레 마주치기<br><span class='vs'>VS</span><br>자려고 누웠는데 귀 옆에 모기 왱 소리 나기", a: "바퀴벌레", b: "모기 소리", vA: 0, vB: 0, likes: 0 },
    { id: "gen-80", tag: "#일상/음식", title: "면 먼저 vs 스프 먼저", q: "라면 끓일 때 면 먼저 넣기<br><span class='vs'>VS</span><br>스프 먼저 넣기", a: "면 먼저", b: "스프 먼저", vA: 0, vB: 0, likes: 0 },
    
    // Theme 5: 극단적/마라맛
    { id: "gen-81", tag: "#극단적/마라맛", title: "10년 일기 공개 vs 10년 검색 기록", q: "내 과거가 모두 담긴 10년 치 일기장 강제 공개<br><span class='vs'>VS</span><br>내 10년 치 인터넷 검색 기록 공개", a: "일기장 공개", b: "검색 기록", vA: 0, vB: 0, likes: 0 },
    { id: "gen-82", tag: "#극단적/마라맛", title: "절친 전애인 vs 전애인 절친", q: "절친의 전애인과 사귀기<br><span class='vs'>VS</span><br>전애인의 절친과 사귀기", a: "절친 전애인", b: "전애인 절친", vA: 0, vB: 0, likes: 0 },
    { id: "gen-83", tag: "#극단적/마라맛", title: "인터넷 스마트폰 vs 서바이벌 나이프", q: "무인도에 떨어졌는데 생존 도구로: 무제한 스마트폰<br><span class='vs'>VS</span><br>최고급 서바이벌 나이프", a: "스마트폰", b: "나이프", vA: 0, vB: 0, likes: 0 },
    { id: "gen-84", tag: "#극단적/마라맛", title: "모르는 사람 뺨 vs 아는 사람 뒤통수", q: "길 가다가 모르는 사람한테 풀스윙으로 뺨 맞기<br><span class='vs'>VS</span><br>아는 사람한테 뒤통수 세게 맞기", a: "뺨", b: "뒤통수", vA: 0, vB: 0, likes: 0 },
    { id: "gen-85", tag: "#극단적/마라맛", title: "상사욕 상사에게 vs 상사욕 부모님께", q: "친구들 단톡방에 쓸 상사 욕을 상사에게 보내기<br><span class='vs'>VS</span><br>상사 욕을 부모님께 보내기", a: "상사에게", b: "부모님께", vA: 0, vB: 0, likes: 0 },
    { id: "gen-86", tag: "#극단적/마라맛", title: "바지 응가 vs 지하철 방귀", q: "바지에 똥 싸고 아무도 모르게 10시간 버티기<br><span class='vs'>VS</span><br>만원 지하철에서 시원하게 방귀 뀌기", a: "바지 응가", b: "지하철 방귀", vA: 0, vB: 0, likes: 0 },
    { id: "gen-87", tag: "#극단적/마라맛", title: "10년 후 보기 vs 10년 전 회귀", q: "10년 뒤의 내 모습 미리 보기<br><span class='vs'>VS</span><br>10년 전으로 돌아가기 (기억 유지)", a: "미래 보기", b: "과거 회귀", vA: 0, vB: 0, likes: 0 },
    { id: "gen-88", tag: "#극단적/마라맛", title: "3일 밤샘 vs 3일 굶기", q: "3일 밤새기<br><span class='vs'>VS</span><br>3일 굶기", a: "3일 밤샘", b: "3일 굶기", vA: 0, vB: 0, likes: 0 },
    { id: "gen-89", tag: "#극단적/마라맛", title: "찐친 1명 vs 인맥 100명", q: "평생 진정한 절친 딱 1명만 있기<br><span class='vs'>VS</span><br>평생 친구 100명이지만 얕은 관계만 유지", a: "찐친 1명", b: "인맥 100명", vA: 0, vB: 0, likes: 0 },
    { id: "gen-90", tag: "#극단적/마라맛", title: "막춤 10만 vs 오열 10만", q: "길거리 한복판에서 막춤 추고 10만 원 받기<br><span class='vs'>VS</span><br>길거리에서 오열하고 10만 원 받기", a: "막춤", b: "오열", vA: 0, vB: 0, likes: 0 },
    { id: "gen-91", tag: "#극단적/마라맛", title: "자기애 vs 자기혐오", q: "모두가 날 싫어하는데 내가 나를 끔찍이 사랑함<br><span class='vs'>VS</span><br>모두가 날 사랑하는데 내가 나를 심하게 혐오함", a: "자기애", b: "자기혐오", vA: 0, vB: 0, likes: 0 },
    { id: "gen-92", tag: "#극단적/마라맛", title: "혼자 놀이공원 vs 혼자 최고급 식사", q: "혼자 놀이공원 가서 놀이기구 타기<br><span class='vs'>VS</span><br>혼자 최고급 레스토랑 가서 칼질하기", a: "놀이공원", b: "최고급 식사", vA: 0, vB: 0, likes: 0 },
    { id: "gen-93", tag: "#극단적/마라맛", title: "대머리 차은우 vs 풍성한 나", q: "완벽한 대머리인데 이목구비는 차은우/카리나<br><span class='vs'>VS</span><br>머리숱 엄청 풍성한데 이목구비는 내 얼굴", a: "대머리 차은우", b: "풍성한 나", vA: 0, vB: 0, likes: 0 },
    { id: "gen-94", tag: "#극단적/마라맛", title: "안 씻은 최애 vs 향수 원수", q: "한 달 동안 안 씻은 최애 연예인과 포옹<br><span class='vs'>VS</span><br>방금 씻고 향수 뿌린 원수와 포옹", a: "안 씻은 최애", b: "향수 원수", vA: 0, vB: 0, likes: 0 },
    { id: "gen-95", tag: "#극단적/마라맛", title: "조회수 1000만 흑역사 vs 조회수 0회 레전드", q: "내 흑역사 영상이 유튜브 알고리즘 타서 조회수 1000만 찍기<br><span class='vs'>VS</span><br>내 인생 레전드 영상이 조회수 0회", a: "1000만 흑역사", b: "0회 레전드", vA: 0, vB: 0, likes: 0 },
    { id: "gen-96", tag: "#극단적/마라맛", title: "벙어리 1년 vs 귀머거리 1년", q: "1년 동안 말 한마디도 못 하기<br><span class='vs'>VS</span><br>1년 동안 아무 소리도 안 들리기", a: "벙어리 1년", b: "귀머거리 1년", vA: 0, vB: 0, likes: 0 },
    { id: "gen-97", tag: "#극단적/마라맛", title: "지시받기 vs 지시하기", q: "평생 누군가에게 지시받으며 살기<br><span class='vs'>VS</span><br>평생 누군가를 책임지고 지시하며 살기", a: "지시받기", b: "지시하기", vA: 0, vB: 0, likes: 0 },
    { id: "gen-98", tag: "#극단적/마라맛", title: "거짓말 불가 vs 진실 불가", q: "평생 단 하나의 거짓말도 못 하기<br><span class='vs'>VS</span><br>평생 거짓말만 하기 (진실 말하기 불가)", a: "거짓말 불가", b: "진실 불가", vA: 0, vB: 0, likes: 0 },
    { id: "gen-99", tag: "#극단적/마라맛", title: "나 혼자 vs 나 빼고 좀비", q: "세상에 나 혼자 살아남기<br><span class='vs'>VS</span><br>나 빼고 다 좀비 되기 (생존 싸움 해야 함)", a: "나 혼자", b: "좀비 세상", vA: 0, vB: 0, likes: 0 },
    { id: "gen-100", tag: "#극단적/마라맛", title: "질문 100개 제작 vs 질문 100개 답변", q: "밸런스 게임 질문 100개 만들기<br><span class='vs'>VS</span><br>밸런스 게임 100개 연속으로 대답하기", a: "100개 제작", b: "100개 답변", vA: 0, vB: 0, likes: 0 }
  ],
  "adult": [
    { id: "adult-m-1", tag: "#남자/성인", title: "불 꺼진 방 vs 불 켜진 방", q: "사랑을 나눌 때<br>불 꺼진 방<br><span class='vs'>VS</span><br>불 켜진 방", a: "불 꺼진 방", b: "불 켜진 방", vA: 0, vB: 0, likes: 0 },
    { id: "adult-f-1", tag: "#여자/성인", title: "밤져낮이 vs 밤이낮져", q: "본인의 취향은?<br>밤져낮이<br><span class='vs'>VS</span><br>밤이낮져", a: "밤져낮이", b: "밤이낮져", vA: 0, vB: 0, likes: 0 }
  ],
  "couples": [
    { id: "coup-1", tag: "#연인", title: "애인 폰 비번 vs 내 폰 비번", q: "애인이 내 폰 비번 알기<br><span class='vs'>VS</span><br>내가 애인 폰 비번 알기", a: "애인이 알기", b: "내가 알기", vA: 0, vB: 0, likes: 0 },
    { id: "coup-2", tag: "#연인", title: "깻잎 논쟁", q: "내 절친 깻잎 떼주는 애인<br><span class='vs'>VS</span><br>애인 깻잎 떼주는 내 절친", a: "애인이 떼줌", b: "친구가 떼줌", vA: 0, vB: 0, likes: 0 }
  ],
  "truth": [
    { id: "truth-1", tag: "#진실", title: "전 애인 연락", q: "전 애인에게 연락 온 적 있다<br><span class='vs'>VS</span><br>없다", a: "있다", b: "없다", vA: 0, vB: 0, likes: 0 }
  ],
  "muncheol": []
};

// --- View Management ---
const views = {
  home: document.getElementById('view-home'),
  category: document.getElementById('view-category'),
  game: document.getElementById('view-game')
};

let currentCategory = null;
let currentGame = null;
let currentTag = "전체";

function showView(viewName) {
  Object.values(views).forEach(v => v.classList.add('hidden'));
  views[viewName].classList.remove('hidden');
  window.scrollTo(0, 0);
}

// --- Navigation ---
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const cat = btn.getAttribute('data-cat');
    if (cat === "muncheol") {
      alert("시시비비 코너는 아직 준비 중입니다! 👨‍⚖️");
      return;
    }
    currentTag = "전체";
    renderCategoryBoard(cat);
  });
});

document.getElementById('back-to-home').addEventListener('click', () => showView('home'));
document.getElementById('back-to-category').addEventListener('click', () => renderCategoryBoard(currentCategory));
document.getElementById('header-logo').addEventListener('click', () => showView('home'));

function renderCategoryBoard(catId) {
  currentCategory = catId;
  const categoryNames = {
    "general": "일반 밸런스",
    "adult": "19금 밸런스",
    "couples": "연인 밸런스",
    "truth": "진실게임",
    "muncheol": "시시비비"
  };
  document.getElementById('category-title').textContent = categoryNames[catId];
  const list = document.getElementById('game-list');
  const tagContainer = document.getElementById('tag-container');
  list.innerHTML = '로딩 중...';
  tagContainer.innerHTML = '';

  const games = [...(gameData[catId] || [])];
  
  // 태그 목록 추출
  const tags = ["전체", ...new Set(games.map(g => g.tag).filter(t => t))];
  tags.forEach(tag => {
    const pill = document.createElement('div');
    pill.className = `tag-pill ${currentTag === tag ? 'active' : ''}`;
    pill.textContent = tag;
    pill.onclick = () => {
      currentTag = tag;
      renderCategoryBoard(catId);
    };
    tagContainer.appendChild(pill);
  });

  db.ref('votes').once('value', (snapshot) => {
    const allVotes = snapshot.val() || {};
    
    // 태그 필터링
    let filteredGames = games;
    if (currentTag !== "전체") {
      filteredGames = games.filter(g => g.tag === currentTag);
    }

    // 인기순 정렬
    filteredGames.sort((a, b) => {
      const statsA = allVotes[a.id] || { vA: 0, vB: 0, likes: 0 };
      const statsB = allVotes[b.id] || { vA: 0, vB: 0, likes: 0 };
      const popA = (statsA.vA + statsA.vB) + (statsA.likes || 0);
      const popB = (statsB.vA + statsB.vB) + (statsB.likes || 0);
      return popB - popA;
    });

    list.innerHTML = '';
    filteredGames.forEach(game => {
      const stats = allVotes[game.id] || { vA: 0, vB: 0, likes: 0 };
      const total = stats.vA + stats.vB;
      const item = document.createElement('div');
      item.className = 'game-item';
      item.innerHTML = `
        <div class="item-info">
          <span class="item-title">${game.title}</span>
        </div>
        <span class="item-popularity">🔥 ${total + (stats.likes || 0)}</span>
      `;
      item.onclick = () => loadGame(game);
      list.appendChild(item);
    });
  });

  showView('category');
}

function loadGame(game) {
  currentGame = game;
  document.getElementById('question-text').innerHTML = game.q;
  document.getElementById('vote-a').querySelector('.option-text').textContent = game.a;
  document.getElementById('vote-b').querySelector('.option-text').textContent = game.b;
  document.getElementById('game-tag').textContent = game.tag || '';
  
  document.getElementById('stats-view').classList.add('hidden');
  document.querySelector('.vote-buttons').classList.remove('hidden');
  document.getElementById('bar-a').style.width = '0%';
  document.getElementById('bar-b').style.width = '0%';
  
  const likeBtn = document.getElementById('like-btn');
  likeBtn.classList.remove('liked');
  if (hasLiked(game.id)) likeBtn.classList.add('liked');

  db.ref('votes/' + game.id).on('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
      game.vA = data.vA || 0;
      game.vB = data.vB || 0;
      game.likes = data.likes || 0;
      if (hasVoted(game.id)) {
        updateStatsUI(game);
      }
    }
  });

  if (hasVoted(game.id)) {
    showStats(game);
  }

  showView('game');
  loadDisqus(game.id);
}

// --- Like Logic ---
function hasLiked(gameId) {
  const likedGames = JSON.parse(localStorage.getItem('likedGames') || '{}');
  return likedGames[gameId];
}

function markAsLiked(gameId) {
  const likedGames = JSON.parse(localStorage.getItem('likedGames') || '{}');
  likedGames[gameId] = true;
  localStorage.setItem('likedGames', JSON.stringify(likedGames));
}

document.getElementById('like-btn').addEventListener('click', () => {
  if (!currentGame) return;
  if (hasLiked(currentGame.id)) {
    alert('이미 추천하셨습니다!');
    return;
  }

  currentGame.likes = (currentGame.likes || 0) + 1;
  markAsLiked(currentGame.id);
  document.getElementById('like-btn').classList.add('liked');
  
  db.ref('votes/' + currentGame.id + '/likes').set(currentGame.likes);
  updateStatsUI(currentGame);
});

// --- Voting Logic ---
function hasVoted(gameId) {
  const votedGames = JSON.parse(localStorage.getItem('votedGames') || '{}');
  return votedGames[gameId];
}

function markAsVoted(gameId, selection) {
  const votedGames = JSON.parse(localStorage.getItem('votedGames') || '{}');
  votedGames[gameId] = selection;
  localStorage.setItem('votedGames', JSON.stringify(votedGames));
}

function handleVote(selection) {
  if (hasVoted(currentGame.id)) {
    alert('이미 투표하셨습니다!');
    return;
  }

  const game = currentGame;
  if (selection === 'A') game.vA++;
  else game.vB++;

  db.ref('votes/' + game.id).update({
    vA: game.vA,
    vB: game.vB
  });

  markAsVoted(game.id, selection);
  showStats(game, selection);
}

function showStats(game, userSelection = null) {
  document.querySelector('.vote-buttons').classList.add('hidden');
  document.getElementById('stats-view').classList.remove('hidden');
  updateStatsUI(game, userSelection);
}

function updateStatsUI(game, userSelection = null) {
  const total = game.vA + game.vB;
  let pA = 0;
  let pB = 0;

  if (total > 0) {
    pA = Math.round((game.vA / total) * 100);
    pB = 100 - pA;
  }

  document.getElementById('total-voters').textContent = `참여: ${total}명`;
  document.getElementById('like-count').textContent = game.likes || 0;

  setTimeout(() => {
    document.getElementById('percent-a').textContent = `${pA}%`;
    document.getElementById('percent-b').textContent = `${pB}%`;
    document.getElementById('bar-a').style.width = `${pA}%`;
    document.getElementById('bar-b').style.width = `${pB}%`;
    document.getElementById('label-a').textContent = game.a;
    document.getElementById('label-b').textContent = game.b;
    
    if (userSelection) {
      if (total === 1) {
        document.getElementById('result-text').textContent = `당신이 이 질문의 첫 번째 투표자입니다! 🥇`;
      } else {
        const userPercent = userSelection === 'A' ? pA : pB;
        document.getElementById('result-text').textContent = userPercent > 50 
          ? `당신은 ${userPercent}%의 대중적인 선택을 했습니다! 😎`
          : `당신은 ${userPercent}%의 힙한 소수파군요! 🤡`;
      }
    } else {
      const savedSelection = hasVoted(game.id);
      document.getElementById('result-text').textContent = `이미 투표 완료! (나의 선택: ${savedSelection === 'A' ? game.a : game.b})`;
    }
  }, 100);
}

document.getElementById('vote-a').addEventListener('click', () => handleVote('A'));
document.getElementById('vote-b').addEventListener('click', () => handleVote('B'));

// --- Theme Toggle ---
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  themeToggle.textContent = currentTheme === 'light' ? '🌙' : '🌓';
}
themeToggle.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-theme');
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    themeToggle.textContent = '🌓';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    themeToggle.textContent = '🌙';
  }
});

// --- Modal Logic ---
const modal = document.getElementById('form-modal');
const privacyModal = document.getElementById('privacy-modal');
const closeModalBtn = document.querySelector('.close-modal');
const closePrivacyBtn = document.querySelector('.close-privacy');
if (modal) modal.classList.add('hidden');
if (privacyModal) privacyModal.classList.add('hidden');
document.getElementById('open-partnership').addEventListener('click', () => {
  document.getElementById('modal-title').textContent = "제휴 및 광고 문의";
  modal.classList.remove('hidden');
});
document.getElementById('open-submit').addEventListener('click', () => {
  document.getElementById('modal-title').textContent = "사연 제보 및 질문 만들기";
  modal.classList.remove('hidden');
});
document.getElementById('open-privacy').addEventListener('click', () => privacyModal.classList.remove('hidden'));
closeModalBtn.onclick = () => modal.classList.add('hidden');
closePrivacyBtn.onclick = () => privacyModal.classList.add('hidden');
window.onclick = (e) => {
  if (e.target === modal) modal.classList.add('hidden');
  if (e.target === privacyModal) privacyModal.classList.add('hidden');
};

// --- Share Functions ---
document.getElementById('share-link').onclick = () => {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => alert('링크가 복사되었습니다!'));
};

// --- Disqus ---
function loadDisqus(gameId) {
  const PAGE_URL = 'https://gogo1-9z8.pages.dev/#!game=' + gameId;
  const PAGE_IDENTIFIER = gameId;
  if (window.DISQUS) {
    DISQUS.reset({
      reload: true,
      config: function () { this.page.url = PAGE_URL; this.page.identifier = PAGE_IDENTIFIER; }
    });
  } else {
    window.disqus_config = function () { this.page.url = PAGE_URL; this.page.identifier = PAGE_IDENTIFIER; };
    (function() {
      var d = document, s = d.createElement('script');
      s.src = 'https://gogo-16.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();
  }
}

showView('home');
