const music = document.getElementById("music");

/* LOGIN */
function login() {
  const pass = document.getElementById("password").value;

  if (pass === "sayang") {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("main").classList.remove("hidden");

    music.play();
    startLove();
    typeMessage();
  } else {
    alert("salahh ihh😝");
  }
}

/* LOVE */
function startLove() {
  setInterval(() => {
    const love = document.createElement("div");
    love.className = "love";
    love.innerHTML = "💖";
    love.style.left = Math.random() * window.innerWidth + "px";
    love.style.fontSize = Math.random() * 30 + 15 + "px";
    document.body.appendChild(love);
    setTimeout(() => love.remove(), 5000);
  }, 300);
}

/* PESAN UTAMA */
const messages = [
  "Hai sayangkuu🤍",
  "Terima kasih sudah hadir di hidup aku",
  "Aku bangga sama Ajengg",
  "Sayangkuu jangan sedih-sedih yaaaa",
  "kalo sayangg sedih bisa liat ini lagii💕"
];

let msgIndex = 0;
let charIndex = 0;
const messageBox = document.getElementById("message-box");

function typeMessage() {
  if (charIndex < messages[msgIndex].length) {
    messageBox.innerHTML += messages[msgIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeMessage, 80);
  } else {
    setTimeout(nextMessage, 2000);
  }
}

function nextMessage() {
  charIndex = 0;
  msgIndex = (msgIndex + 1) % messages.length;
  messageBox.innerHTML = "";
  typeMessage();
}

/* POPUP BONEKA */
const popupMessages = [
  "Aku selalu di sini buat sayanggku🤍",
  "Hug jauh🫂",
  "Harus kuat ya sayanggkuu💪",
  "Kamu itu cintakuu💖"
];

function showPopup() {
  const text = popupMessages[Math.floor(Math.random() * popupMessages.length)];
  document.getElementById("popup-text").innerText = text;
  document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}
