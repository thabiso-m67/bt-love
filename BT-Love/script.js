console.log("🔥 Cinematic Love System Loaded");

window.addEventListener("load", () => {

    setTimeout(() => {
        const envelope = document.querySelector(".envelope-container");

        if (envelope) {
            envelope.classList.remove("hidden");
        }
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


function openPrompt() {

    let pass = prompt("Enter the password:");

    if (pass === "17-10-2025") {

        window.location.href = "love.html?v=cinematic";

    } else {

        alert("Wrong password.");

    }
}


function addMessage() {

    let text = document.getElementById("newMessage").value;

    if (text.trim() === "") return;

    let messages =
        JSON.parse(localStorage.getItem("loveMessages")) || [];

    messages.push(text);

    localStorage.setItem(
        "loveMessages",
        JSON.stringify(messages)
    );

    displayMessages();

    document.getElementById("newMessage").value = "";
}


function displayMessages() {

    let list = document.getElementById("messageList");

    if (!list) return;

    list.innerHTML = "";

    let messages =
        JSON.parse(localStorage.getItem("loveMessages")) || [];

    messages.forEach(msg => {

        let p = document.createElement("p");

        p.textContent = msg;

        list.appendChild(p);

    });
}


function updateDaysCounter() {

    const startDate = new Date("2025-10-17");

    const today = new Date();

    const diffTime = today - startDate;

    const diffDays =
        Math.floor(
            diffTime / (1000 * 60 * 60 * 24)
        );

    const counter =
        document.getElementById("daysTogether");

    if (counter) {

        counter.textContent = diffDays;

    }
}


function checkAnniversary() {

    const today = new Date();

    const day = today.getDate();

    const month = today.getMonth() + 1;

    const year = today.getFullYear();

    if (day === 16 && month === 5) {

        startBirthdayStory();

        return;

    }

    const screen =
        document.getElementById("celebrationScreen");

    const title =
        document.getElementById("celebrationTitle");

    const message =
        document.getElementById("celebrationMessage");

    if (!screen || !title || !message) return;

    const start =
        new Date("2025-10-17");

    const monthsPassed =
        (today.getFullYear() - start.getFullYear()) * 12 +
        (today.getMonth() - start.getMonth());


    if (
        day === 17 &&
        month === 10 &&
        year === 2026
    ) {

        runOneYearAnniversary(screen);

        return;

    }


    if (
        day === 17 &&
        monthsPassed === 6
    ) {

        runCinematicSequence(
            screen,
            title,
            message
        );

        return;

    }


    if (day === 17) {

        screen.classList.remove("hidden");

        title.innerText =
            "❤️ Monthly Anniversary ❤️";

        message.innerText =
            "Another month of us. I’d still choose you every time.";

        launchConfetti();

        showMemories();

        setTimeout(() => {

            screen.classList.add("hidden");

        }, 15000);

    }

}


function runOneYearAnniversary(screen) {

    const music =
        document.getElementById("bgMusic");

    screen.classList.remove("hidden");

    screen.classList.add("one-year-overlay");

    screen.innerHTML = `

        <div class="one-year-container">

            <div class="one-year-opening">

                <p class="anniversary-small">
                    17 • 10 • 2026
                </p>

                <h1>
                    ONE YEAR
                </h1>

                <p class="anniversary-subtitle">
                    One beautiful year with you.
                </p>

            </div>


            <div class="anniversary-stats">

                <div class="stat">
                    <span class="stat-number">
                        365
                    </span>

                    <span class="stat-label">
                        DAYS
                    </span>
                </div>


                <div class="stat">
                    <span class="stat-number">
                        8,760
                    </span>

                    <span class="stat-label">
                        HOURS
                    </span>
                </div>


                <div class="stat">
                    <span class="stat-number">
                        525,600
                    </span>

                    <span class="stat-label">
                        MINUTES
                    </span>
                </div>


                <div class="stat">
                    <span class="stat-number">
                        31,536,000
                    </span>

                    <span class="stat-label">
                        SECONDS
                    </span>
                </div>

            </div>


            <div class="one-year-message">

                <p>
                    And somehow...
                </p>

                <h2>
                    I’d still choose you.
                </h2>

            </div>


            <div class="one-year-final">

                <p>
                    One year down.
                </p>

                <p>
                    And I hope this is only the beginning.
                </p>

                <span>
                    ❤️
                </span>

            </div>

        </div>
    `;


    if (music) {

        music.volume = 0;

        music.play().catch(() => {});

        let volume = 0;

        const fadeIn = setInterval(() => {

            if (volume < 0.6) {

                volume += 0.02;

                music.volume = volume;

            } else {

                clearInterval(fadeIn);

            }

        }, 150);

    }


    setTimeout(() => {

        const opening =
            document.querySelector(
                ".one-year-opening"
            );

        if (opening) {

            opening.classList.add("show");

        }

    }, 800);


    setTimeout(() => {

        const stats =
            document.querySelector(
                ".anniversary-stats"
            );

        if (stats) {

            stats.classList.add("show");

        }

    }, 5000);


    setTimeout(() => {

        const message =
            document.querySelector(
                ".one-year-message"
            );

        if (message) {

            message.classList.add("show");

        }

    }, 11000);


    setTimeout(() => {

        const final =
            document.querySelector(
                ".one-year-final"
            );

        if (final) {

            final.classList.add("show");

        }

    }, 17000);


    setTimeout(() => {

        screen.style.opacity = "0";

        setTimeout(() => {

            screen.classList.add("hidden");

            screen.classList.remove(
                "one-year-overlay"
            );

            screen.style.opacity = "1";

            screen.innerHTML = `

                <div id="memoryContainer"></div>

                <div class="celebration-content">

                    <h1 id="celebrationTitle">
                        ❤️
                    </h1>

                    <p id="celebrationMessage"></p>

                </div>

            `;

        }, 2500);

    }, 24000);

}


function runCinematicSequence(
    screen,
    title,
    messageEl
) {

    const music =
        document.getElementById("bgMusic");

    const container =
        document.getElementById(
            "memoryContainer"
        );

    container.innerHTML = "";

    screen.classList.remove("hidden");

    screen.classList.add(
        "cinematic-overlay"
    );

    title.innerText =
        "Six Months With You";

    title.classList.add(
        "cinematic-title"
    );

    messageEl.innerHTML = "";

    messageEl.classList.add(
        "cinematic-message"
    );


    setTimeout(() => {

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


        typeWriterEffect(
            "Six months ago, I didn’t know life could feel any better, but each day it gets better with you. You didn’t just become part of my days… you became my joy everyday.",
            "celebrationMessage"
        );

    }, 3000);


    setTimeout(() => {

        showCinematicPhotos(container);

    }, 12000);


    setTimeout(() => {

        messageEl.innerHTML =
            "And I still choose you. Every single time.";

    }, 28000);


    setTimeout(() => {

        screen.style.transition =
            "opacity 3s ease";

        screen.style.opacity = "0";

    }, 32000);


    setTimeout(() => {

        screen.classList.remove(
            "cinematic-overlay"
        );

        screen.classList.add("hidden");

        container.innerHTML = "";

        screen.style.opacity = "1";

        showHiddenMessage();

    }, 36000);

}


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


        const img =
            document.createElement("img");

        img.src = images[i];

        img.classList.add(
            "cinematic-img"
        );

        img.style.left =
            (20 + Math.random() * 60) + "%";

        img.style.top =
            (20 + Math.random() * 50) + "%";

        container.appendChild(img);


        setTimeout(() => {

            img.remove();

        }, 9000);


        i++;

    }, 3000);

}


function showHiddenMessage() {

    const screen =
        document.getElementById(
            "celebrationScreen"
        );

    screen.classList.remove("hidden");

    screen.classList.add(
        "cinematic-overlay"
    );

    screen.innerHTML = `

        <div style="
            text-align:center;
            color:#f5e6d3;
        ">

            <h1 style="
                font-size:40px;
                letter-spacing:2px;
            ">

                I didn’t say everything…

            </h1>


            <p style="
                margin-top:20px;
                font-size:20px;
                max-width:600px;
            ">

                But I saved this part for the end.
                <br><br>

                You have been a shinning light
                in my life and you make my days
                calmer and my life happier.
                Doing life with you is amazing
                and I wouldn't want it any other way.
                <br><br>

                Oh and WAZZZZZZZUUUPPP my love:)

            </p>

        </div>

    `;


    setTimeout(() => {

        screen.classList.add("hidden");

    }, 12000);

}


function typeWriterEffect(
    text,
    elementId
) {

    let i = 0;

    const speed = 65;

    const element =
        document.getElementById(
            elementId
        );

    if (!element) return;

    element.innerHTML = "";


    function type() {

        if (i < text.length) {

            element.innerHTML +=
                text.charAt(i);

            i++;

            setTimeout(
                type,
                speed
            );

        }

    }

    type();

}


function launchConfetti() {

    for (
        let i = 0;
        i < 50;
        i++
    ) {

        let c =
            document.createElement(
                "div"
            );

        c.classList.add(
            "confetti"
        );

        c.style.left =
            Math.random() * 100 + "vw";

        c.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        document.body.appendChild(c);


        setTimeout(() => {

            c.remove();

        }, 5000);

    }

}


function showMemories() {

    const container =
        document.getElementById(
            "memoryContainer"
        );

    if (!container) return;

    container.innerHTML = "";

}


function startBirthdayStory() {

    const story =
        document.getElementById(
            "birthdayStory"
        );

    const sections =
        document.querySelectorAll(
            ".story-section"
        );

    const player =
        document.getElementById(
            "bgMusic"
        );

    story.classList.remove(
        "hidden"
    );


    if (player) {

        player.src =
            "media/birthday.mp3";

        player.play().catch(() => {});

    }


    let current = 0;


    function nextSection() {

        if (
            current <
            sections.length - 1
        ) {

            sections[current]
                .classList.remove(
                    "active"
                );

            current++;

            sections[current]
                .classList.add(
                    "active"
                );

            setTimeout(
                nextSection,
                11000
            );

        } else {

            setTimeout(() => {

                story.classList.add(
                    "hidden"
                );


                const screen =
                    document.getElementById(
                        "celebrationScreen"
                    );

                const title =
                    document.getElementById(
                        "celebrationTitle"
                    );

                const message =
                    document.getElementById(
                        "celebrationMessage"
                    );


                screen.classList.remove(
                    "hidden"
                );


                title.innerText =
                    "🎂 Happy Birthday My Love 🎂";


                message.innerText =
                    "Thank you for existing. Thank you for being you.";


                launchConfetti();


                showCinematicPhotos(
                    document.getElementById(
                        "memoryContainer"
                    )
                );


                setTimeout(() => {

                    screen.classList.add(
                        "hidden"
                    );

                }, 15000);


            }, 8000);

        }

    }


    setTimeout(
        nextSection,
        11000
    );

}


function playVoiceNote() {

    const voice =
        new Audio(
            "media/voice.mp3"
        );

    const music =
        document.getElementById(
            "bgMusic"
        );


    if (music) {

        let v =
            music.volume;


        let fadeOut =
            setInterval(() => {

                if (v > 0.05) {

                    v -= 0.05;

                    music.volume = v;

                } else {

                    music.pause();

                    clearInterval(
                        fadeOut
                    );

                }

            }, 80);

    }


    setTimeout(() => {

        voice.volume = 1;

        voice.play();

    }, 800);


    voice.onended = () => {

        if (music) {

            music.play();

            let v = 0;

            music.volume = 0;


            let fadeIn =
                setInterval(() => {

                    if (v < 0.6) {

                        v += 0.05;

                        music.volume = v;

                    } else {

                        clearInterval(
                            fadeIn
                        );

                    }

                }, 80);

        }

    };

}

function secretMessage() {

    const screen = document.getElementById("celebrationScreen");

    if (!screen) return;

    screen.classList.remove("hidden");

    screen.classList.add("cinematic-overlay");

    screen.innerHTML = `
        <div style="
            text-align:center;
            color:#f5e6d3;
            padding:30px;
        ">

            <div style="
                font-size:60px;
                margin-bottom:25px;
            ">
                ❤️
            </div>

            <h1 style="
                font-size:42px;
                letter-spacing:3px;
            ">
                You Found It.
            </h1>

            <p style="
                margin-top:25px;
                font-size:21px;
                line-height:1.9;
                max-width:650px;
                margin-left:auto;
                margin-right:auto;
            ">
                If you clicked this little heart,
                then you were curious enough to find
                one of the little secrets I left for you.
                <br><br>
                And honestly...
                <br><br>
                I love that about you.
                <br><br>
                I love you, My Princess. ❤️
            </p>

        </div>
    `;

    setTimeout(() => {

        screen.classList.add("hidden");

        screen.innerHTML = `
            <div id="memoryContainer"></div>

            <div class="celebration-content">

                <h1 id="celebrationTitle">
                    ❤️
                </h1>

                <p id="celebrationMessage"></p>

            </div>
        `;

    }, 10000);
}
