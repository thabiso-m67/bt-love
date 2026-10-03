const TEST_MODE = "one-year";

console.log("B & T Love System Loaded");

window.addEventListener("load", function () {
    setTimeout(function () {
        const envelope = document.querySelector(".envelope-container");
        if (envelope) {
            envelope.classList.remove("hidden");
        }
    }, 4000);

    displayMessages();
    updateDaysCounter();
    checkAnniversary();
});

function openPrompt() {
    const password = prompt("Enter the date that changed everything ❤️");

    if (password === "17-10-2025") {
        window.location.href = "love.html";
    } else if (password !== null) {
        alert("That's not it, my Princess ❤️");
    }
}

function displayMessages() {
    const messageContainer = document.getElementById("messageContainer");

    if (!messageContainer) {
        return;
    }

    const messages = JSON.parse(localStorage.getItem("loveMessages")) || [];

    messageContainer.innerHTML = "";

    messages.forEach(function (message) {
        const div = document.createElement("div");
        div.className = "love-message";
        div.textContent = message;
        messageContainer.appendChild(div);
    });
}

function saveMessage() {
    const input = document.getElementById("messageInput");

    if (!input) {
        return;
    }

    const message = input.value.trim();

    if (!message) {
        return;
    }

    const messages = JSON.parse(localStorage.getItem("loveMessages")) || [];

    messages.push(message);

    localStorage.setItem("loveMessages", JSON.stringify(messages));

    input.value = "";

    displayMessages();
}

function updateDaysCounter() {
    const counter = document.getElementById("daysTogether");

    if (!counter) {
        return;
    }

    const startDate = new Date("2025-10-17T00:00:00");
    const today = new Date();

    const difference = today - startDate;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    counter.textContent = Math.max(days, 0);
}

function checkAnniversary() {
    if (TEST_MODE === "one-year") {
        setTimeout(runOneYearAnniversary, 1500);
        return;
    }

    if (TEST_MODE === "six-month") {
        setTimeout(runSixMonthAnniversary, 1500);
        return;
    }

    if (TEST_MODE === "birthday") {
        setTimeout(runBirthdayStory, 1500);
        return;
    }

    const now = new Date();

    const month = now.getMonth() + 1;
    const day = now.getDate();

    if (month === 10 && day === 17 && now.getFullYear() === 2026) {
        setTimeout(runOneYearAnniversary, 1500);
        return;
    }

    if (month === 4 && day === 17) {
        setTimeout(runSixMonthAnniversary, 1500);
        return;
    }

    if (month === 5 && day === 16) {
        setTimeout(runBirthdayStory, 1500);
        return;
    }

    if (day === 17) {
        setTimeout(runMonthlyAnniversary, 1500);
        return;
    }
}

function getCelebrationContainer() {
    const celebrationScreen = document.getElementById("celebrationScreen");

    if (!celebrationScreen) {
        return null;
    }

    celebrationScreen.classList.remove("hidden");

    let container = document.getElementById("anniversaryStoryContainer");

    if (!container) {
        container = document.createElement("div");
        container.id = "anniversaryStoryContainer";
        celebrationScreen.appendChild(container);
    }

    return container;
}

function hideNormalCelebrationContent() {
    const title = document.getElementById("celebrationTitle");
    const message = document.getElementById("celebrationMessage");
    const memoryContainer = document.getElementById("memoryContainer");

    if (title) {
        title.style.display = "none";
    }

    if (message) {
        message.style.display = "none";
    }

    if (memoryContainer) {
        memoryContainer.style.display = "none";
    }
}

function playAnniversaryMusic() {
    const music = document.getElementById("bgMusic");

    if (!music) {
        return;
    }

    music.loop = true;
    music.volume = 0.6;

    const playPromise = music.play();

    if (playPromise !== undefined) {
        playPromise.catch(function () {
            document.addEventListener(
                "click",
                function startMusicOnce() {
                    music.play().catch(function () {});
                    document.removeEventListener("click", startMusicOnce);
                },
                { once: true }
            );
        });
    }
}

function runOneYearAnniversary() {
    const container = getCelebrationContainer();

    if (!container) {
        return;
    }

    hideNormalCelebrationContent();
    playAnniversaryMusic();

    document.body.classList.add("one-year-active");

    const scenes = [
        {
            duration: 5500,
            html: `
                <div class="anniversary-scene opening-scene">
                    <div class="opening-date">17 • 10 • 2025</div>
                    <div class="opening-line">The day our story began.</div>
                    <div class="opening-heart">❤️</div>
                </div>
            `
        },

        {
            duration: 7500,
            html: `
                <div class="anniversary-scene memory-scene">
                    <div class="memory-photo-wrap">
                        <img
                            src="media/image4.jpg.jpeg"
                            class="anniversary-photo"
                            alt="Our first date"
                        >
                    </div>

                    <div class="memory-content">
                        <div class="memory-number">01</div>
                        <h2>Our First Date</h2>
                        <p>
                            The first date.<br>
                            The first picture.<br>
                            The beginning of us.
                        </p>
                    </div>
                </div>
            `
        },

        {
            duration: 6500,
            html: `
                <div class="anniversary-scene memory-scene">
                    <div class="memory-photo-wrap">
                        <img
                            src="media/image34.jpg.jpeg"
                            class="anniversary-photo"
                            alt="Funny memory"
                        >
                    </div>

                    <div class="memory-content">
                        <div class="memory-number">02</div>
                        <h2>Then Came The Madness 😂</h2>
                        <p>
                            Somewhere between the serious moments
                            and the random ones...
                            we became us.
                        </p>
                    </div>
                </div>
            `
        },

        {
            duration: 7000,
            html: `
                <div class="anniversary-scene memory-scene">
                    <div class="memory-photo-wrap">
                        <img
                            src="media/image33.jpg.jpeg"
                            class="anniversary-photo"
                            alt="Favourite picture"
                        >
                    </div>

                    <div class="memory-content">
                        <div class="memory-number">03</div>
                        <h2>One Of My Favourites</h2>
                        <p>
                            Out of all the pictures we've taken,
                            this is one I'll always come back to.
                        </p>
                    </div>
                </div>
            `
        },

        {
            duration: 7500,
            html: `
                <div class="anniversary-scene memory-scene">
                    <div class="memory-photo-wrap">
                        <img
                            src="media/image10.jpg.jpeg"
                            class="anniversary-photo"
                            alt="Our first Valentine's Day"
                        >
                    </div>

                    <div class="memory-content">
                        <div class="memory-number">04</div>
                        <h2>Our First Valentine's Day ❤️</h2>
                        <p>
                            Our first Valentine's Day together.
                            Another memory that became part of our story.
                        </p>
                    </div>
                </div>
            `
        },

        {
            duration: 6500,
            html: `
                <div class="anniversary-scene portrait-scene">
                    <div class="portrait-photo-wrap">
                        <img
                            src="media/image30.jpg.jpeg"
                            class="portrait-photo"
                            alt="My Princess"
                        >
                    </div>

                    <div class="portrait-content">
                        <span>And then there's you...</span>
                        <h2>My Beautiful Girl.</h2>
                        <p>
                            One of the many pictures of you
                            that I absolutely love.
                        </p>
                    </div>
                </div>
            `
        },

        {
            duration: 6500,
            html: `
                <div class="anniversary-scene portrait-scene">
                    <div class="portrait-photo-wrap">
                        <img
                            src="media/image29.jpg.jpeg"
                            class="portrait-photo"
                            alt="My favourite girl"
                        >
                    </div>

                    <div class="portrait-content">
                        <span>Another one...</span>
                        <h2>Because You Are Beautiful.</h2>
                        <p>
                            And somehow I still get to call you mine.
                        </p>
                    </div>
                </div>
            `
        },

        {
            duration: 6500,
            html: `
                <div class="anniversary-scene little-things-scene">
                    <div class="little-things-photo-wrap">
                        <img
                            src="media/image26.jpg.jpeg"
                            class="anniversary-photo"
                            alt="A special memory"
                        >
                    </div>

                    <div class="little-things-content">
                        <div class="little-title">It's the little things.</div>

                        <p>
                            The laughs.<br>
                            The conversations.<br>
                            The random moments.<br>
                            The memories we didn't plan.
                        </p>

                        <span>
                            Somehow, they became everything.
                        </span>
                    </div>
                </div>
            `
        },

        {
            duration: 7500,
            html: `
                <div class="anniversary-scene us-scene">
                    <div class="us-photo-wrap">
                        <img
                            src="media/image35.jpg.jpeg"
                            class="anniversary-photo"
                            alt="Us"
                        >
                    </div>

                    <div class="us-content">
                        <div class="us-small">One of my favourite pictures of us.</div>

                        <h2>Us.</h2>

                        <p>
                            Not perfect.<br>
                            Not always easy.<br>
                            But ours.
                        </p>
                    </div>
                </div>
            `
        },

        {
            duration: 7000,
            html: `
                <div class="anniversary-scene emotional-scene">
                    <div class="emotional-text">
                        <p>
                            You weren't just someone I started dating...
                        </p>

                        <p>
                            Somewhere along the way,
                            you became someone I couldn't imagine
                            my life without.
                        </p>
                    </div>
                </div>
            `
        },

        {
            duration: 6500,
            html: `
                <div class="anniversary-scene emotional-scene second-emotional">
                    <div class="emotional-text">
                        <p>You became my favourite person.</p>
                        <p>My safe place.</p>
                        <p>My happiness.</p>
                        <p>My Princess. ❤️</p>
                    </div>
                </div>
            `
        },

        {
            duration: 8000,
            html: `
                <div class="anniversary-scene final-photo-scene">
                    <div class="final-photo-wrap">
                        <img
                            src="media/image33.jpg.jpeg"
                            class="final-anniversary-photo"
                            alt="Our favourite memory"
                        >
                    </div>

                    <div class="final-photo-message">
                        <p>And after everything...</p>
                        <h2>I'd still choose you.</h2>
                        <span>Every single time. ❤️</span>
                    </div>
                </div>
            `
        },

        {
            duration: 9000,
            html: `
                <div class="anniversary-scene ending-scene">
                    <div class="ending-content">

                        <div class="ending-number">365</div>
                        <div class="ending-label">Beautiful Days</div>

                        <div class="ending-stats">
                            <span>8,760 Hours</span>
                            <span>525,600 Minutes</span>
                        </div>

                        <div class="ending-one-year">
                            ONE YEAR
                        </div>

                        <div class="ending-heart">❤️</div>

                        <h1>Happy 1 Year, My Princess.</h1>

                        <p>
                            Thank you for every laugh,
                            every memory,
                            every moment,
                            and every piece of love you've given me.
                        </p>

                        <div class="ending-signature">
                            B & T ❤️
                        </div>

                    </div>
                </div>
            `
        }
    ];

    playAnniversaryScenes(container, scenes, 0);
}

function playAnniversaryScenes(container, scenes, index) {
    if (!container) {
        return;
    }

    if (index >= scenes.length) {
        setTimeout(function () {
            showFinalAnniversaryMessage(container);
        }, 1000);

        return;
    }

    container.innerHTML = scenes[index].html;

    const scene = container.firstElementChild;

    if (scene) {
        requestAnimationFrame(function () {
            scene.classList.add("scene-visible");
        });
    }

    setTimeout(function () {
        if (!scene) {
            playAnniversaryScenes(container, scenes, index + 1);
            return;
        }

        scene.classList.remove("scene-visible");
        scene.classList.add("scene-fade-out");

        setTimeout(function () {
            container.innerHTML = "";

            playAnniversaryScenes(
                container,
                scenes,
                index + 1
            );
        }, 1200);
    }, scenes[index].duration);
}

function showFinalAnniversaryMessage(container) {
    container.innerHTML = `
        <div class="anniversary-scene ending-scene final-ending">
            <div class="ending-content">

                <div class="ending-one-year">
                    ONE YEAR
                </div>

                <div class="ending-heart">❤️</div>

                <h1>Happy 1 Year, My Princess.</h1>

                <p>
                    Here's to everything we've been,
                    everything we are,
                    and everything still waiting for us.
                </p>

                <div class="ending-signature">
                    B & T ❤️
                </div>

            </div>
        </div>
    `;

    const scene = container.firstElementChild;

    if (scene) {
        requestAnimationFrame(function () {
            scene.classList.add("scene-visible");
        });
    }

    launchConfetti();
}

function runSixMonthAnniversary() {
    const container = getCelebrationContainer();

    if (!container) {
        return;
    }

    hideNormalCelebrationContent();
    playAnniversaryMusic();

    container.innerHTML = `
        <div class="anniversary-scene ending-scene">
            <div class="ending-content">

                <div class="ending-number">6</div>

                <div class="ending-label">
                    MONTHS
                </div>

                <div class="ending-heart">
                    ❤️
                </div>

                <h1>
                    Happy 6 Months,
                    My Princess.
                </h1>

                <p>
                    Six months of memories,
                    laughter, love and us.
                </p>

                <div class="ending-signature">
                    B & T ❤️
                </div>

            </div>
        </div>
    `;

    const scene = container.firstElementChild;

    if (scene) {
        requestAnimationFrame(function () {
            scene.classList.add("scene-visible");
        });
    }

    launchConfetti();
}

function runBirthdayStory() {
    const container = getCelebrationContainer();

    if (!container) {
        return;
    }

    hideNormalCelebrationContent();
    playAnniversaryMusic();

    container.innerHTML = `
        <div class="anniversary-scene birthday-scene">
            <div class="birthday-content">

                <div class="birthday-small">
                    TODAY IS ALL ABOUT YOU
                </div>

                <div class="birthday-heart">
                    ❤️
                </div>

                <h1>
                    Happy Birthday,
                    My Princess.
                </h1>

                <p>
                    Today we celebrate the beautiful person
                    who makes my world brighter.
                </p>

                <div class="ending-signature">
                    B & T ❤️
                </div>

            </div>
        </div>
    `;

    const scene = container.firstElementChild;

    if (scene) {
        requestAnimationFrame(function () {
            scene.classList.add("scene-visible");
        });
    }

    launchConfetti();
}

function runMonthlyAnniversary() {
    const container = getCelebrationContainer();

    if (!container) {
        return;
    }

    hideNormalCelebrationContent();

    const startDate = new Date("2025-10-17T00:00:00");
    const today = new Date();

    let months =
        (today.getFullYear() - startDate.getFullYear()) * 12 +
        (today.getMonth() - startDate.getMonth());

    if (today.getDate() < startDate.getDate()) {
        months--;
    }

    months = Math.max(months, 1);

    container.innerHTML = `
        <div class="anniversary-scene ending-scene">
            <div class="ending-content">

                <div class="ending-number">
                    ${months}
                </div>

                <div class="ending-label">
                    MONTHS
                </div>

                <div class="ending-heart">
                    ❤️
                </div>

                <h1>
                    Happy ${months} Months,
                    My Princess.
                </h1>

                <p>
                    Another month of loving you.
                </p>

                <div class="ending-signature">
                    B & T ❤️
                </div>

            </div>
        </div>
    `;

    const scene = container.firstElementChild;

    if (scene) {
        requestAnimationFrame(function () {
            scene.classList.add("scene-visible");
        });
    }
}

function launchConfetti() {
    const container = document.createElement("div");

    container.className = "confetti-container";

    document.body.appendChild(container);

    for (let i = 0; i < 80; i++) {
        const piece = document.createElement("div");

        piece.className = "confetti-piece";

        piece.style.left = Math.random() * 100 + "%";
        piece.style.animationDelay =
            Math.random() * 3 + "s";
        piece.style.animationDuration =
            3 + Math.random() * 4 + "s";

        container.appendChild(piece);
    }

    setTimeout(function () {
        container.remove();
    }, 8000);
}

function playVoiceNote() {
    const voice = document.getElementById("voiceNote");

    if (!voice) {
        return;
    }

    voice.play().catch(function () {});
}

function showSecretMessage() {
    const secret = document.getElementById("secretMessage");

    if (!secret) {
        return;
    }

    secret.classList.remove("hidden");
}

function closeSecretMessage() {
    const secret = document.getElementById("secretMessage");

    if (!secret) {
        return;
    }

    secret.classList.add("hidden");
}

function changeMusic() {
    const music = document.getElementById("bgMusic");

    if (!music) {
        return;
    }

    const source = music.querySelector("source");

    if (!source) {
        return;
    }

    const playlist = [
        "media/music.mp3",
        "media/music2.mp3",
        "media/music3.mp3"
    ];

    let current =
        playlist.indexOf(source.getAttribute("src"));

    current++;

    if (current >= playlist.length) {
        current = 0;
    }

    source.src = playlist[current];

    music.load();

    music.play().catch(function () {});
}

document.addEventListener("click", function () {
    const music = document.getElementById("bgMusic");

    if (
        music &&
        music.paused &&
        document.body.classList.contains("one-year-active")
    ) {
        music.play().catch(function () {});
    }
});
