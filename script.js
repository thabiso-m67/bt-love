console.log("🔥 NEW SCRIPT LOADED");

window.addEventListener("load", () => {

    // 🔥 Force envelope show
    setTimeout(() => {
        const envelope = document.querySelector(".envelope-container");
        if (envelope) envelope.classList.remove("hidden");
    }, 4000);

    // 🔊 Music starts on first click
    document.addEventListener("click", function () {
        const music = document.getElementById("bgMusic");
        if (music && music.paused) {
            music.volume = 0;
            music.play();

            let fade = setInterval(() => {
                if (music.volume < 1) {
                    music.volume += 0.05;
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
// ENVELOPE PASSWORD
// =====================
function openPrompt() {
    let pass = prompt("Enter the password:");
    if (pass === "17-10-2025") {
        window.location.href = "love.html?v=2";
    } else {
        alert("Wrong password.");
    }
}


// =====================
// MESSAGES SYSTEM
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
// SECRET
// =====================
function secretMessage() {
    alert("No matter what happens in this world, I choose you. Every time.");
}


// =====================
// ANNIVERSARY LOGIC (FIXED)
// =====================
function checkAnniversary() {

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;

    const screen = document.getElementById("celebrationScreen");
    const title = document.getElementById("celebrationTitle");
    const message = document.getElementById("celebrationMessage");

    if (!screen || !title || !message) return;

    console.log("Checking anniversary:", day, month);

    const start = new Date("2025-10-17");
    const monthsPassed =
        (today.getFullYear() - start.getFullYear()) * 12 +
        (today.getMonth() - start.getMonth());


    // =====================
    // ❤️ 6 MONTH SPECIAL
    // =====================
    if (day === 17 && monthsPassed === 6) {

        screen.classList.remove("hidden");

        title.innerText = "❤️ 6 Months With You ❤️";

        typeWriterEffect(
            "6 months of loving you, laughing with you, growing with you… and somehow it still feels like I’m just getting started. And 6 months later, I still look at you like I got lucky.",
            "celebrationMessage"
        );

        launchMegaConfetti();
        showMegaMemories();

        setTimeout(() => {
            screen.classList.add("hidden");
        }, 20000);

        return;
    }


    // =====================
    // 🎉 YEARLY ANNIVERSARY
    // =====================
    if (day === 17 && month === 10) {

        screen.classList.remove("hidden");

        title.innerText = "❤️🎉 Our Anniversary ❤️🎉";
        message.innerText = "Another year of loving you. And somehow, I love you even more.";

        launchConfetti();
    }


    // =====================
    // 💕 MONTHLY ANNIVERSARY
    // =====================
    if (day === 17) {

        screen.classList.remove("hidden");

        title.innerText = "❤️ Monthly Anniversary ❤️";
        message.innerText = "Another month of us. Loving and experiencing you has been the best thing, and I’d still choose you every time.";

        launchConfetti();
        showMemories();
    }

    setTimeout(() => {
        if (screen) screen.classList.add("hidden");
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
// MEGA CONFETTI
// =====================
function launchMegaConfetti() {
    for (let i = 0; i < 120; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = (2 + Math.random() * 4) + "s";
        confetti.style.transform = `scale(${Math.random() * 1.5})`;

        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 7000);
    }
}


// =====================
// MEMORIES
// =====================
function showMemories() {
    createMemoryBurst(800);
}

function showMegaMemories() {
    createMemoryBurst(500);
}

function createMemoryBurst(speed) {

    const container = document.getElementById("memoryContainer");
    if (!container) return;

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
        img.classList.add("memory-img");

        img.style.left = Math.random() * 80 + "%";
        img.style.top = Math.random() * 80 + "%";

        container.appendChild(img);

        setTimeout(() => img.remove(), 8000);

        index++;

    }, speed);
}


// =====================
// TYPEWRITER
// =====================
function typeWriterEffect(text, elementId) {

    let i = 0;
    const speed = 40;
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
