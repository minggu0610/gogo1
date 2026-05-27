// Game Data
const gameData = {
  "general": [
    { id: "gen-1", title: "백수 vs 임원", q: "매달 500만 원 받는 백수<br><span class='vs'>VS</span><br>매달 1500만 원 대기업 임원", a: "500만 원 백수", b: "1500만 원 임원", vA: 620, vB: 380 },
    { id: "gen-2", title: "라면 vs 치킨", q: "평생 라면만 먹기<br><span class='vs'>VS</span><br>평생 치킨만 먹기", a: "라면", b: "치킨", vA: 450, vB: 550 }
  ],
  "adult": [
    { id: "adult-1", title: "불 꺼진 방 vs 불 켜진 방", q: "사랑을 나눌 때<br>불 꺼진 방<br><span class='vs'>VS</span><br>불 켜진 방", a: "불 꺼진 방", b: "불 켜진 방", vA: 50, vB: 50 }
  ],
  "couples": [
    { id: "coup-1", title: "애인 폰 비번 vs 내 폰 비번", q: "애인이 내 폰 비번 알기<br><span class='vs'>VS</span><br>내가 애인 폰 비번 알기", a: "애인이 알기", b: "내가 알기", vA: 30, vB: 70 }
  ],
  "truth": [
    { id: "truth-1", title: "전 애인 연락", q: "전 애인에게 연락 온 적 있다<br><span class='vs'>VS</span><br>없다", a: "있다", b: "없다", vA: 80, vB: 20 }
  ],
  "muncheol": [
    { id: "mun-1", title: "롤 문철빵 사연 #1", q: "탑이 라인전 밀렸는데 정글 탓 함<br><span class='vs'>VS</span><br>정글이 갱 안 가서 라인전 망함", a: "탑 잘못", b: "정글 잘못", vA: 40, vB: 60 }
  ]
};

const categoryNames = {
  "general": "일반 밸런스",
  "adult": "19금 밸런스",
  "couples": "연인 밸런스",
  "truth": "진실게임",
  "muncheol": "문철빵"
};

// View Management
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

// Navigation
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

  showView('game');
  loadDisqus(game.id);
}

// Voting
function handleVote(selection) {
  const game = currentGame;
  if (selection === 'A') game.vA++;
  else game.vB++;

  const total = game.vA + game.vB;
  const pA = Math.round((game.vA / total) * 100);
  const pB = 100 - pA;

  document.querySelector('.vote-buttons').classList.add('hidden');
  document.getElementById('stats-view').classList.remove('hidden');
  
  setTimeout(() => {
    document.getElementById('percent-a').textContent = `${pA}%`;
    document.getElementById('percent-b').textContent = `${pB}%`;
    document.getElementById('bar-a').style.width = `${pA}%`;
    document.getElementById('bar-b').style.width = `${pB}%`;
    document.getElementById('label-a').textContent = game.a;
    document.getElementById('label-b').textContent = game.b;
    
    const userPercent = selection === 'A' ? pA : pB;
    document.getElementById('result-text').textContent = userPercent > 50 
      ? `당신은 ${userPercent}%의 대중적인 선택을 했습니다! 😎`
      : `당신은 ${userPercent}%의 힙한 소수파군요! 🤡`;
  }, 100);
}

document.getElementById('vote-a').addEventListener('click', () => handleVote('A'));
document.getElementById('vote-b').addEventListener('click', () => handleVote('B'));

// Disqus Integration
function loadDisqus(gameId) {
  const PAGE_URL = window.location.href.split('#')[0] + '#!game=' + gameId;
  const PAGE_IDENTIFIER = gameId;

  if (window.DISQUS) {
    DISQUS.reset({
      reload: true,
      config: function () {
        this.page.url = PAGE_URL;
        this.page.identifier = PAGE_IDENTIFIER;
      }
    });
  } else {
    window.disqus_config = function () {
      this.page.url = PAGE_URL;
      this.page.identifier = PAGE_IDENTIFIER;
    };
    (function() {
      var d = document, s = d.createElement('script');
      s.src = 'https://gogo-16.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();
  }
}

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'light') {
    themeToggle.textContent = '🌙';
  }
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

// Modal Logic
const modal = document.getElementById('form-modal');
const closeModalBtn = document.querySelector('.close-modal');

if (modal && closeModalBtn) {
  document.getElementById('open-partnership').addEventListener('click', () => {
    document.getElementById('modal-title').textContent = "제휴 및 광고 문의";
    modal.classList.remove('hidden');
  });

  document.getElementById('open-submit').addEventListener('click', () => {
    document.getElementById('modal-title').textContent = "사연 제보 및 질문 만들기";
    modal.classList.remove('hidden');
  });

  closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
}
