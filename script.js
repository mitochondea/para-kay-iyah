// ------------------------
// 1️⃣ Firebase Initialization (Compat Version)
// ------------------------
const firebaseConfig = {
  apiKey: "AIzaSyD7qg7d4o6JRR5JYPtaVEampNJnEWzuNt4",
  authDomain: "iyah-78fdb.firebaseapp.com",
  databaseURL: "https://iyah-78fdb-default-rtdb.firebaseio.com",
  projectId: "iyah-78fdb",
  storageBucket: "iyah-78fdb.firebasestorage.app",
  messagingSenderId: "571576703138",
  appId: "1:571576703138:web:5795831374578d7b165ffb",
  measurementId: "G-JS1J6GSCGM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// ------------------------
// 2️⃣ Sending Messages
// ------------------------
function postMessage() {
  const text = document.getElementById("message").value;
  const sender = document.getElementById("sender").value;
  if (!text) return;

  // Push message to Firebase
  database.ref("messages").push({
    sender: sender,
    message: text,
    timestamp: Date.now()
  });

  document.getElementById("message").value = "";
}

// ------------------------
// 3️⃣ Listening for Messages in Real Time
// ------------------------
const messagesDiv = document.getElementById("messages");

database.ref("messages").on("child_added", (snapshot) => {
  const data = snapshot.val();

  const msgDiv = document.createElement("div");
  msgDiv.className = "message";
  msgDiv.innerHTML = `<div class="sender">${data.sender}:</div>${data.message}`;

  // Show newest messages on top
  messagesDiv.prepend(msgDiv);

  // Auto-scroll to newest message
  messagesDiv.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ------------------------
// 4️⃣ Falling Daisies Animation
// ------------------------
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
