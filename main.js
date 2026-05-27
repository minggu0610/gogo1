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

// Initialize Firebase (Compatibility mode)
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// --- Kakao SDK Init ---
if (window.Kakao && !Kakao.isInitialized()) {
  Kakao.init('YOUR_KAKAO_JS_KEY'); // 카카오 개발자 센터에서 발급받은 JS 키
}

// --- Game Data ---
const gameData = {
  "general": [
    { id: "gen-1", title: "백수 vs 임원", q: "매달 500만 원 받는 백수<br><span class='vs'>VS</span><br>매달 1500만 원 대기업 임원", a: "500만 원 백수", b: "1500만 원 임원", vA: 0, vB: 0 },
    { id: "gen-2", title: "라면 vs 치킨", q: "평생 라면만 먹기<br><span class='vs'>VS</span><br>평생 치킨만 먹기", a: "라면", b: "치킨", vA: 0, vB: 0 },
    { id: "gen-3", title: "과거 vs 미래", q: "10년 전 과거로 가기 (기억 유지)<br><span class='vs'>VS</span><br>10년 후 미래로 가기", a: "과거로 가기", b: "미래로 가기", vA: 0, vB: 0 },
    { id: "gen-4", title: "추위 vs 더위", q: "평생 에어컨 없는 여름 살기<br><span class='vs'>VS</span><br>평생 히터 없는 겨울 살기", a: "여름 선택", b: "겨울 선택", vA: 0, vB: 0 },
    { id: "gen-5", title: "잠 vs 음식", q: "평생 잠 안 자도 안 피곤함 (대신 맛 못 느낌)<br><span class='vs'>VS</span><br>평생 맛있는 거 무제한 (대신 하루 12시간 잠)", a: "잠 안 자기", b: "먹기 선택", vA: 0, vB: 0 },
    { id: "gen-6", title: "환승 vs 잠수", q: "바람 피우고 바로 환승한 애인<br><span class='vs'>VS</span><br>말도 없이 잠수 이별한 애인", a: "환승 애인", b: "잠수 애인", vA: 0, vB: 0 },
    { id: "gen-7", title: "대머리 vs 털보", q: "머리카락 아예 없는 대머리<br><span class='vs'>VS</span><br>온몸이 털로 덮인 털보", a: "대머리", b: "털보", vA: 0, vB: 0 }
  ],
  "adult": [
    { id: "adult-1", title: "불 꺼진 방 vs 불 켜진 방", q: "사랑을 나눌 때<br>불 꺼진 방<br><span class='vs'>VS</span><br>불 켜진 방", a: "불 꺼진 방", b: "불 켜진 방", vA: 0, vB: 0 },
    { id: "adult-2", title: "낮져밤이 vs 낮이밤져", q: "낮에는 지고 밤에는 이기는 타입<br><span class='vs'>VS</span><br>낮에는 이기고 밤에는 지는 타입", a: "낮져밤이", b: "낮이밤져", vA: 0, vB: 0 },
    { id: "adult-3", title: "속궁합 vs 성격", q: "속궁합 100점, 성격 0점<br><span class='vs'>VS</span><br>성격 100점, 속궁합 0점", a: "속궁합", b: "성격", vA: 0, vB: 0 }
  ],
  "couples": [
    { id: "coup-1", title: "애인 폰 비번 vs 내 폰 비번", q: "애인이 내 폰 비번 알기<br><span class='vs'>VS</span><br>내가 애인 폰 비번 알기", a: "애인이 알기", b: "내가 알기", vA: 0, vB: 0 },
    { id: "coup-2", title: "깻잎 논쟁", q: "내 절친 깻잎 떼주는 애인<br><span class='vs'>VS</span><br>애인 깻잎 떼주는 내 절친", a: "애인이 떼줌", b: "친구가 떼줌", vA: 0, vB: 0 },
    { id: "coup-3", title: "남사친/여사친", q: "단둘이 술 마시는 남사친/여사친<br><span class='vs'>VS</span><br>단둘이 1박 2일 여행 가는 남사친/여사친 (방 2개)", a: "술 마시기", b: "여행 가기", vA: 0, vB: 0 }
  ],
  "truth": [
    { id: "truth-1", title: "전 애인 연락", q: "전 애인에게 연락 온 적 있다<br><span class='vs'>VS</span><br>없다", a: "있다", b: "없다", vA: 0, vB: 0 },
    { id: "truth-2", title: "비상금", q: "가족 몰래 숨겨둔 비상금이 있다<br><span class='vs'>VS</span><br>없다", a: "있다", b: "없다", vA: 0, vB: 0 }
  ],
  "muncheol": [
    { id: "mun-1", title: "롤 문철빵 사연 #1", q: "탑이 라인전 밀렸는데 정글 탓 함<br><span class='vs'>VS</span><br>정글이 갱 안 가서 라인전 망함", a: "탑 잘못", b: "정글 잘못", vA: 0, vB: 0 }
  ]
};

// --- View Management ---
const views = {
  home: document.getElementById('view-home'),
  category: document.getElementById('view-category'),
  game: document.getElementById('view-game')
};

let currentCategory = null;
let currentGame = null;

function showView(viewName) {
  Object.values(views).forEach(v => v.classList.add('hidden'));
  views[viewName].classList.remove('hidden');
  window.scrollTo(0, 0);
}

// --- Navigation ---
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const cat = btn.getAttribute('data-cat');
    renderCategoryBoard(cat);
  });
});

document.getElementById('back-to-home').addEventListener('click', () => showView('home'));
document.getElementById('back-to-category').addEventListener('click', () => showView('category'));
document.getElementById('header-logo').addEventListener('click', () => showView('home'));

function renderCategoryBoard(catId) {
  currentCategory = catId;
  const categoryNames = {
    "general": "일반 밸런스",
    "adult": "19금 밸런스",
    "couples": "연인 밸런스",
    "truth": "진실게임",
    "muncheol": "문철빵"
  };
  document.getElementById('category-title').textContent = categoryNames[catId];
  const list = document.getElementById('game-list');
  list.innerHTML = '';

  const games = gameData[catId] || [];
  games.forEach(game => {
    const item = document.createElement('div');
    item.className = 'game-item';
    item.textContent = game.title;
    item.onclick = () => loadGame(game);
    list.appendChild(item);
  });

  showView('category');
}

function loadGame(game) {
  currentGame = game;
  document.getElementById('question-text').innerHTML = game.q;
  document.getElementById('vote-a').querySelector('.option-text').textContent = game.a;
  document.getElementById('vote-b').querySelector('.option-text').textContent = game.b;
  
  // Reset UI
  document.getElementById('stats-view').classList.add('hidden');
  document.querySelector('.vote-buttons').classList.remove('hidden');
  document.getElementById('bar-a').style.width = '0%';
  document.getElementById('bar-b').style.width = '0%';

  // 실시간 데이터 동기화 시도 (Firebase 연결된 경우)
  if (db) {
    db.ref('votes/' + game.id).on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        game.vA = data.vA || 0;
        game.vB = data.vB || 0;
        if (hasVoted(game.id)) {
          updateStatsUI(game);
        }
      }
    });
  }

  if (hasVoted(game.id)) {
    showStats(game);
  }

  showView('game');
  loadDisqus(game.id);
}

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

  // Firebase 업데이트 (연결된 경우)
  if (db) {
    db.ref('votes/' + game.id).set({
      vA: game.vA,
      vB: game.vB
    });
  }

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

document.getElementById('share-kakao').onclick = () => {
  if (!window.Kakao || !Kakao.isInitialized()) {
    alert('카카오톡 공유를 사용하려면 설정이 필요합니다.');
    return;
  }
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '방구석 솔로몬 - 과몰입 밸런스 게임',
      description: currentGame ? currentGame.title : '당신의 선택은 무엇인가요?',
      imageUrl: 'https://gogo1-9z8.pages.dev/og-image.png', // 실제 이미지 URL로 교체 필요
      link: {
        mobileWebUrl: window.location.href,
        webUrl: window.location.href,
      },
    },
    buttons: [{
      title: '투표하러 가기',
      link: {
        mobileWebUrl: window.location.href,
        webUrl: window.location.href,
      },
    }],
  });
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

// --- Init ---
showView('home');
