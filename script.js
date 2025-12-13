
function postMessage() {
  const text = document.getElementById("message").value;
  const sender = document.getElementById("sender").value;
  if (!text) return;

  const msgDiv = document.createElement("div");
  msgDiv.className = "message";
  msgDiv.innerHTML = `<div class="sender">${sender}:</div>${text}`;

  document.getElementById("messages").prepend(msgDiv);
  document.getElementById("message").value = "";
}

// Falling daisies
const container = document.querySelector(".daisy-container");

function createDaisy() {
  const daisy = document.createElement("div");
  daisy.className = "daisy";
  daisy.innerText = "🌼";
  daisy.style.left = Math.random() * 100 + "vw";
  daisy.style.animationDuration = 6 + Math.random() * 5 + "s";
  container.appendChild(daisy);

  setTimeout(() => daisy.remove(), 12000);
}

setInterval(createDaisy, 600);
