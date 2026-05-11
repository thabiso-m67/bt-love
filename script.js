console.log("🔥 Cinematic Love System Loaded");

window.addEventListener("load", () => {

    setTimeout(() => {
        const envelope = document.querySelector(".envelope-container");
        if (envelope) envelope.classList.remove("hidden");
    }, 4000);

    document.addEventListener("click", function () {
        const music = document.getElementById("bgMusic");
        if (music && music.paused) {
            music.volume = 0;
            music.play().catch(() => {});

            let v = 0;
            let fade = setInterval(() => {
                if (v < 0.6) {
                    v += 0.02;
                    music.volume = v;
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


// =========================
// PASSWORD
// =========================
function openPrompt() {
    let pass = prompt("Enter the password:");
    if (pass === "17-10-2025") {
        window.location.href = "love.html?v=cinematic";
    } else {
        alert("Wrong password.");
    }
}


// =========================
// MESSAGES
// =========================
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


// =========================
// DAYS COUNTER
// =========================
function updateDaysCounter() {
    const startDate = new Date("2025-10-17");
    const today = new Date();

    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    const counter = document.getElementById("daysTogether");
    if (counter) counter.textContent = diffDays;
}


// =========================
// ANNIVERSARY
// =========================
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

        runCinematicSequence(screen, title, message);
        return;
    }


    // yearly
    if (day === 17 && month === 10) {
        screen.classList.remove("hidden");
        title.innerText = "❤️🎉 Our Anniversary ❤️🎉";
        message.innerText = "Another year of loving you. And somehow, I love you even more.";
        launchConfetti();
    }

    // monthly
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


// =========================
// CINEMATIC SYSTEM
// =========================
function runCinematicSequence(screen, title, messageEl) {

    const music = document.getElementById("bgMusic");
    const container = document.getElementById("memoryContainer");

    container.innerHTML = "";

    screen.classList.remove("hidden");
    screen.classList.add("cinematic-overlay");

    title.innerText = "Six Months With You";
    title.classList.add("cinematic-title");

    messageEl.innerHTML = "";
    messageEl.classList.add("cinematic-message");

    // Phase 1: silence (pause)
    setTimeout(() => {

        // music fade in
        if (music) {
            music.volume = 0;
            music.play().catch(() => {});

            let v = 0;
            let fade = setInterval(() => {
                if (v < 0.6) {
                    v += 0.02;
                    music.volume = v;
                } else {
                    clearInterval(fade);
                }
            }, 200);
        }

        // text begins
        typeWriterEffect(
            "Six months ago, I didn’t know life could feel any better, but each day it gets better with you. You didn’t just become part of my days… you became my joy everyday.",
            "celebrationMessage"
        );

    }, 3000);

    // photos appear later
    setTimeout(() => {
        showCinematicPhotos(container);
    }, 12000);

    // final message
    setTimeout(() => {
        messageEl.innerHTML = "And I still choose you. Every single time.";
    }, 28000);

    // =========================
    // FADE TO BLACK + HIDDEN MESSAGE
    // =========================
    setTimeout(() => {

        screen.style.transition = "opacity 3s ease";
        screen.style.opacity = "0";

    }, 32000);

    // hidden reveal AFTER fade
    setTimeout(() => {

        screen.classList.remove("cinematic-overlay");
        screen.classList.add("hidden");

        container.innerHTML = "";
        screen.style.opacity = "1";

        showHiddenMessage();

    }, 36000);
}


// =========================
// CINEMATIC PHOTOS
// =========================
function showCinematicPhotos(container) {

    const images = [
        "media/image1.jpg.jpeg",
        "media/image2.jpg.jpeg",
        "media/image3.jpg.jpeg",
        "media/image4.jpg.jpeg",
        "media/image5.jpg.jpeg"
    ];

    let i = 0;

    const interval = setInterval(() => {

        if (i >= images.length) {
            clearInterval(interval);
            return;
        }

        const img = document.createElement("img");
        img.src = images[i];
        img.classList.add("cinematic-img");

        img.style.left = (20 + Math.random() * 60) + "%";
        img.style.top = (20 + Math.random() * 50) + "%";

        container.appendChild(img);

        setTimeout(() => img.remove(), 9000);

        i++;

    }, 3000);
}


// =========================
// HIDDEN FINAL MESSAGE
// =========================
function showHiddenMessage() {

    const screen = document.getElementById("celebrationScreen");

    screen.classList.remove("hidden");
    screen.classList.add("cinematic-overlay");

    screen.innerHTML = `
        <div style="text-align:center; color:#f5e6d3;">
            <h1 style="font-size:40px; letter-spacing:2px;">
                I didn’t say everything…
            </h1>

            <p style="margin-top:20px; font-size:20px; max-width:600px;">
                But I saved this part for the end.<br><br>
                You have been a shinning light in my life and you make my days calmer and my life happier. Doing life with you is amazing and I wouldn't want it any other way.<br><br>
                Oh and WAZZZZZZZUUUPPP my love:)
            </p>
        </div>
    `;

    setTimeout(() => {
        screen.classList.add("hidden");
    }, 12000);
}


// =========================
// TYPEWRITER
// =========================
function typeWriterEffect(text, elementId) {

    let i = 0;
    const speed = 65;
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


// =========================
// CONFETTI
// =========================
function launchConfetti() {
    for (let i = 0; i < 50; i++) {
        let c = document.createElement("div");
        c.classList.add("confetti");
        c.style.left = Math.random() * 100 + "vw";
        c.style.animationDuration = (2 + Math.random() * 3) + "s";
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 5000);
    }
}


// =========================
// MEMORIES (normal)
/// ========================
function showMemories() {
    const container = document.getElementById("memoryContainer");
    container.innerHTML = "";
}

// =========================
// BIRTHDAY STORY
// =========================

function startBirthdayStory(){

    const story = document.getElementById("birthdayStory");
    const sections = document.querySelectorAll(".story-section");

    const player = document.getElementById("bgMusic");

    story.classList.remove("hidden");

    // birthday music
    if(player){
        player.src = "media/birthday.mp3";
        player.play().catch(()=>{});
    }

    let current = 0;

    function nextSection(){

        if(current < sections.length - 1){

            sections[current].classList.remove("active");

            current++;

            sections[current].classList.add("active");

            setTimeout(nextSection, 8000);
        }

        else{

            setTimeout(() => {

                story.classList.add("hidden");

                // normal celebration after story
                const screen = document.getElementById("celebrationScreen");

                const title = document.getElementById("celebrationTitle");

                const message = document.getElementById("celebrationMessage");

                screen.classList.remove("hidden");

                title.innerText = "🎂 Happy Birthday My Love 🎂";

                message.innerText =
                "Thank you for existing. Thank you for being you.";

                launchConfetti();
                showCinematicPhotos(
                    document.getElementById("memoryContainer")
                );

                setTimeout(() => {
                    screen.classList.add("hidden");
                }, 15000);

            }, 8000);
        }
    }

    setTimeout(nextSection, 8000);
}

function playVoiceNote(){

    const voice = new Audio("media/voice.mp3");

    voice.play();
}
