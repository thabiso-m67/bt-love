console.log("🔥 Cinematic Script Loaded");

window.addEventListener("load", () => {

    setTimeout(() => {
        const envelope = document.querySelector(".envelope-container");
        if (envelope) envelope.classList.remove("hidden");
    }, 4000);

    document.addEventListener("click", function () {
        const music = document.getElementById("bgMusic");
        if (music && music.paused) {
            music.volume = 0;
            music.play();

            let fade = setInterval(() => {
                if (music.volume < 0.7) {
                    music.volume += 0.02;
                } else {
                    clearInterval(fade);
                }
            }, 200);
        }
    }, { once: true });

    displayMessages();
    updateDaysCounter();
    checkAnniversary();
});


// =====================
// PASSWORD GATE
// =====================
function openPrompt() {
    let pass = prompt("Enter the password:");
    if (pass === "17-10-2025") {
        window.location.href = "love.html?v=cinematic";
    } else {
        alert("Wrong password.");
    }
}


// =====================
// MESSAGES
// =====================
function addMessage() {
    let text = document.getElementById("newMessage").value;
    if (text.trim() === "") return;

    let messages = JSON.parse(localStorage.getItem("loveMessages")) || [];
    messages.push(text);

    localStorage.setItem("loveMessages", JSON.stringify(messages));

    displayMessages();
    document.getElementById("newMessage").value = "";
}

function displayMessages() {
    let list = document.getElementById("messageList");
    if (!list) return;

    list.innerHTML = "";
    let messages = JSON.parse(localStorage.getItem("loveMessages")) || [];

    messages.forEach(msg => {
        let p = document.createElement("p");
        p.textContent = msg;
        list.appendChild(p);
    });
}


// =====================
// DAYS COUNTER
// =====================
function updateDaysCounter() {
    const startDate = new Date("2025-10-17");
    const today = new Date();

    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    const counter = document.getElementById("daysTogether");
    if (counter) counter.textContent = diffDays;
}


// =====================
// ANNIVERSARY LOGIC
// =====================
function checkAnniversary() {

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;

    const screen = document.getElementById("celebrationScreen");
    const title = document.getElementById("celebrationTitle");
    const message = document.getElementById("celebrationMessage");

    if (!screen || !title || !message) return;

    const start = new Date("2025-10-17");

    const monthsPassed =
        (today.getFullYear() - start.getFullYear()) * 12 +
        (today.getMonth() - start.getMonth());


    // =========================
    // ❤️ 6 MONTH CINEMATIC MODE
    // =========================
   if (day === 17 && monthsPassed === 6) {

    screen.classList.remove("hidden");
    screen.classList.add("cinematic-overlay");

    title.innerText = "Six Months With You";
    title.classList.add("cinematic-title");

    const msgEl = document.getElementById("celebrationMessage");
    msgEl.classList.add("cinematic-message");

    typeWriterEffect(
        "Six months ago, life became quieter in the best way. You didn’t just come into my world… you softened it. And somehow, every day since then has felt more like home.",
        "celebrationMessage"
    );

    launchCinematicMusic();
    showCinematicMemories();

    // ✅ CLEAN EXIT FIX
    setTimeout(() => {

        // hide screen
        screen.classList.add("hidden");

        // reset cinematic styles (IMPORTANT)
        screen.classList.remove("cinematic-overlay");
        title.classList.remove("cinematic-title");
        msgEl.classList.remove("cinematic-message");

        // clear memory container so it doesn't stay stuck
        const container = document.getElementById("memoryContainer");
        if (container) container.innerHTML = "";

    }, 30000);

    return;
}


    // =====================
    // YEARLY
    // =====================
    if (day === 17 && month === 10) {
        screen.classList.remove("hidden");

        title.innerText = "❤️🎉 Our Anniversary ❤️🎉";
        message.innerText = "Another year of loving you. And somehow, I love you even more.";

        launchConfetti();
    }


    // =====================
    // MONTHLY
    // =====================
    if (day === 17) {
        screen.classList.remove("hidden");

        title.innerText = "❤️ Monthly Anniversary ❤️";
        message.innerText = "Another month of us. I’d still choose you every time.";

        launchConfetti();
        showMemories();
    }

    setTimeout(() => {
        screen.classList.add("hidden");
    }, 15000);
}


// =====================
// CONFETTI
// =====================
function launchConfetti() {
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = (2 + Math.random() * 3) + "s";

        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
    }
}


// =====================
// CINEMATIC MUSIC
// =====================
function launchCinematicMusic() {
    const music = document.getElementById("bgMusic");
    if (!music) return;

    music.volume = 0;

    const playPromise = music.play();

    if (playPromise !== undefined) {
        playPromise.catch(() => {});
    }

    let fade = setInterval(() => {
        if (music.volume < 0.6) {
            music.volume += 0.02;
        } else {
            clearInterval(fade);
        }
    }, 200);
}


// =====================
// CINEMATIC MEMORIES
// =====================
function showCinematicMemories() {

    const container = document.getElementById("memoryContainer");

    const images = [
        "media/image1.jpg.jpeg",
        "media/image2.jpg.jpeg",
        "media/image3.jpg.jpeg",
        "media/image4.jpg.jpeg",
        "media/image5.jpg.jpeg",
        "media/image6.jpg.jpeg",
        "media/image7.jpg.jpeg",
        "media/image8.jpg.jpeg",
        "media/image9.jpg.jpeg",
        "media/image10.jpg.jpeg",
        "media/image11.jpg.jpeg",
        "media/image12.jpg.jpeg"
    ];

    let index = 0;

    const interval = setInterval(() => {

        if (index >= images.length) {
            clearInterval(interval);
            return;
        }

        const img = document.createElement("img");
        img.src = images[index];
        img.classList.add("cinematic-img");

        img.style.left = Math.random() * 70 + "%";
        img.style.top = Math.random() * 70 + "%";

        container.appendChild(img);

        setTimeout(() => img.remove(), 9000);

        index++;

    }, 900);
}


// =====================
// TYPEWRITER
// =====================
function typeWriterEffect(text, elementId) {

    let i = 0;
    const speed = 70;
    const element = document.getElementById(elementId);

    if (!element) return;

    element.innerHTML = "";

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}
