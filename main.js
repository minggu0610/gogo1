// Mock Data
const games = [
  {
    question: "매달 500만 원 받는 백수<br><span class='vs'>VS</span><br>매달 1500만 원 대기업 임원(워라밸 없음)",
    optionA: "500만 원 백수",
    optionB: "1500만 원 임원",
    votesA: 620,
    votesB: 380,
    comments: [
      { user: "익명1", text: "당연히 백수지... 1500 벌어서 언제 써?" },
      { user: "익명2", text: "임원 찍어보고 은퇴하면 되지 않나?" },
      { user: "익명3", text: "500이면 충분히 풍족하게 노는데 당연히 A" }
    ]
  },
  {
    question: "평생 라면만 먹기<br><span class='vs'>VS</span><br>평생 치킨만 먹기",
    optionA: "라면",
    optionB: "치킨",
    votesA: 450,
    votesB: 550,
    comments: [
      { user: "익명4", text: "라면은 종류라도 많지" },
      { user: "익명5", text: "치킨은 단백질임 ㅡㅡ" }
    ]
  }
];

let currentGameIndex = 0;

// Elements
const voteA = document.getElementById('vote-a');
const voteB = document.getElementById('vote-b');
const statsView = document.getElementById('stats-view');
const voteButtons = document.querySelector('.vote-buttons');
const percentA = document.getElementById('percent-a');
const percentB = document.getElementById('percent-b');
const barA = document.getElementById('bar-a');
const barB = document.getElementById('bar-b');
const resultText = document.getElementById('result-text');
const nextGameBtn = document.getElementById('next-game');
const questionText = document.getElementById('question-text');
const commentList = document.getElementById('comment-list');
const commentInput = document.getElementById('comment-input');
const postCommentBtn = document.getElementById('post-comment');

// Modal Elements
const modal = document.getElementById('form-modal');
const openPartnership = document.getElementById('open-partnership');
const openSubmit = document.getElementById('open-submit');
const closeModal = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modal-title');

// Functions
function loadGame(index) {
  const game = games[index];
  questionText.innerHTML = game.question;
  voteA.querySelector('.option-text').textContent = game.optionA;
  voteB.querySelector('.option-text').textContent = game.optionB;
  
  // Reset UI
  statsView.classList.add('hidden');
  voteButtons.classList.remove('hidden');
  barA.style.width = '0%';
  barB.style.width = '0%';
  
  renderComments(game.comments);
}

function renderComments(comments) {
  commentList.innerHTML = '';
  comments.forEach(comment => {
    const div = document.createElement('div');
    div.className = 'comment';
    div.innerHTML = `
      <div class="comment-user">${comment.user}</div>
      <div class="comment-text">${comment.text}</div>
    `;
    commentList.appendChild(div);
  });
  commentList.scrollTop = commentList.scrollHeight;
}

function handleVote(selection) {
  const game = games[currentGameIndex];
  if (selection === 'A') game.votesA++;
  else game.votesB++;

  const total = game.votesA + game.votesB;
  const pA = Math.round((game.votesA / total) * 100);
  const pB = 100 - pA;

  // Show stats
  voteButtons.classList.add('hidden');
  statsView.classList.remove('hidden');
  
  setTimeout(() => {
    percentA.textContent = `${pA}%`;
    percentB.textContent = `${pB}%`;
    barA.style.width = `${pA}%`;
    barB.style.width = `${pB}%`;
    
    const userPercent = selection === 'A' ? pA : pB;
    resultText.textContent = userPercent > 50 
      ? `당신은 ${userPercent}%의 대중적인 선택을 했습니다! 😎`
      : `당신은 ${userPercent}%의 힙한 소수파군요! 🤡`;
  }, 100);
}

// Event Listeners
voteA.addEventListener('click', () => handleVote('A'));
voteB.addEventListener('click', () => handleVote('B'));

nextGameBtn.addEventListener('click', () => {
  currentGameIndex = (currentGameIndex + 1) % games.length;
  loadGame(currentGameIndex);
});

postCommentBtn.addEventListener('click', () => {
  const text = commentInput.value.trim();
  if (text) {
    const newComment = { user: "나 (익명)", text: text };
    games[currentGameIndex].comments.push(newComment);
    renderComments(games[currentGameIndex].comments);
    commentInput.value = '';
  }
});

// Modal Logic
openPartnership.addEventListener('click', () => {
  modalTitle.textContent = "제휴 및 광고 문의";
  modal.classList.remove('hidden');
});

openSubmit.addEventListener('click', () => {
  modalTitle.textContent = "사연 제보 및 질문 만들기";
  modal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => modal.classList.add('hidden'));
window.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.add('hidden');
});

// Init
loadGame(0);
