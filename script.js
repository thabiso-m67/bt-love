console.log("B & T Love System Loaded");


document.addEventListener("DOMContentLoaded", function () {

    displayMessages();

    updateDaysCounter();

    checkAnniversary();

    setupMusic();

});


function setupMusic() {

    const music = document.getElementById("bgMusic");

    if (!music) {
        return;
    }

    document.addEventListener("click", function () {

        if (music.paused) {

            music.volume = 0;

            music.play().then(function () {

                fadeMusicIn(music);

            }).catch(function () {});

        }

    }, { once: true });

}


function fadeMusicIn(music) {

    if (!music) {
        return;
    }

    let volume = 0;

    music.volume = 0;

    const fade = setInterval(function () {

        volume += 0.02;

        if (volume >= 0.6) {

            volume = 0.6;

            clearInterval(fade);

        }

        music.volume = volume;

    }, 100);

}


function openPrompt() {

    const password = prompt("Enter the password:");

    if (password === "17-10-2025") {

        window.location.href = "love.html";

    } else if (password !== null) {

        alert("Wrong password.");

    }

}


function addMessage() {

    const input =
        document.getElementById("newMessage");

    if (!input) {
        return;
    }

    const text =
        input.value.trim();

    if (text === "") {
        return;
    }

    let messages =
        JSON.parse(
            localStorage.getItem("loveMessages")
        ) || [];

    messages.push(text);

    localStorage.setItem(
        "loveMessages",
        JSON.stringify(messages)
    );

    input.value = "";

    displayMessages();

}


function displayMessages() {

    const list =
        document.getElementById("messageList");

    if (!list) {
        return;
    }

    list.innerHTML = "";

    const messages =
        JSON.parse(
            localStorage.getItem("loveMessages")
        ) || [];

    messages.forEach(function (message) {

        const paragraph =
            document.createElement("p");

        paragraph.textContent = message;

        list.appendChild(paragraph);

    });

}


function updateDaysCounter() {

    const startDate =
        new Date("2025-10-17T00:00:00");

    const today =
        new Date();

    const difference =
        today.getTime() -
        startDate.getTime();

    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );

    const counter =
        document.getElementById("daysTogether");

    if (!counter) {
        return;
    }

    if (days < 0) {

        counter.textContent = "0";

    } else {

        counter.textContent = days;

    }

}


function checkAnniversary() {

    const screen =
        document.getElementById(
            "celebrationScreen"
        );

    if (!screen) {
        return;
    }


    const today =
        new Date();

    const day =
        today.getDate();

    const month =
        today.getMonth() + 1;

    const year =
        today.getFullYear();


    /*
        Birthday
        16 May
    */

    if (
        day === 16 &&
        month === 5
    ) {

        startBirthdayStory();

        return;

    }


    /*
        One Year Anniversary
        17 October 2026
    */

    if (
        day === 17 &&
        month === 10 &&
        year === 2026
    ) {

        runOneYearAnniversary(
            screen
        );

        return;

    }


    /*
        Six Month Anniversary
        17 April 2026
    */

    if (
        day === 17 &&
        month === 4 &&
        year === 2026
    ) {

        runCinematicSequence(
            screen
        );

        return;

    }


    /*
        Normal Monthly Anniversary
    */

    if (day === 17) {

        runMonthlyAnniversary(
            screen
        );

    }

}


function runMonthlyAnniversary(screen) {

    const today =
        new Date();

    const start =
        new Date(
            "2025-10-17T00:00:00"
        );

    let months =
        (
            today.getFullYear() -
            start.getFullYear()
        ) * 12;

    months +=
        today.getMonth() -
        start.getMonth();


    if (today.getDate() < 17) {
        months--;
    }


    if (months < 1) {
        return;
    }


    screen.classList.remove(
        "hidden"
    );

    screen.classList.add(
        "cinematic-overlay"
    );


    screen.innerHTML = `

        <div class="celebration-content">

            <div class="secret-heart-big">
                ❤️
            </div>

            <h1>
                ${months} Month${months === 1 ? "" : "s"}
                Together
            </h1>

            <p>
                Another beautiful chapter of us.
            </p>

            <p>
                ${months} month${months === 1 ? "" : "s"}
                of memories, laughter and love.
            </p>

            <p>
                And I would still choose you. ❤️
            </p>

        </div>

    `;


    launchConfetti();


    setTimeout(function () {

        closeCelebration(
            screen
        );

    }, 15000);

}


function runSixMonthTest() {

    const screen =
        document.getElementById(
            "celebrationScreen"
        );

    if (!screen) {
        return;
    }

    runCinematicSequence(
        screen
    );

}


function runCinematicSequence(screen) {

    const music =
        document.getElementById(
            "bgMusic"
        );


    screen.classList.remove(
        "hidden"
    );

    screen.classList.add(
        "cinematic-overlay"
    );


    screen.innerHTML = `

        <div id="memoryContainer"></div>

        <div class="celebration-content">

            <h1 class="cinematic-title">
                Six Months With You ❤️
            </h1>

            <p
                id="celebrationMessage"
                class="cinematic-message"
            ></p>

        </div>

    `;


    if (music) {

        music.volume = 0;

        music.play().then(function () {

            fadeMusicIn(music);

        }).catch(function () {});

    }


    setTimeout(function () {

        typeWriterEffect(
            "Six months ago, I didn't know life could feel any better, but each day gets better with you. You didn't just become part of my days... you became my joy every day.",
            "celebrationMessage"
        );

    }, 2000);


    setTimeout(function () {

        showCinematicPhotos(
            document.getElementById(
                "memoryContainer"
            )
        );

    }, 9000);


    setTimeout(function () {

        const message =
            document.getElementById(
                "celebrationMessage"
            );

        if (message) {

            message.innerHTML =
                "And I still choose you. Every single time. ❤️";

        }

    }, 24000);


    setTimeout(function () {

        screen.style.opacity =
            "0";

    }, 29000);


    setTimeout(function () {

        closeCelebration(
            screen
        );

        showHiddenMessage();

    }, 32000);

}


function runOneYearAnniversary(screen) {

    const music =
        document.getElementById(
            "bgMusic"
        );


    screen.classList.remove(
        "hidden"
    );

    screen.classList.add(
        "one-year-overlay"
    );


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

        music.play().then(function () {

            fadeMusicIn(music);

        }).catch(function () {});

    }


    setTimeout(function () {

        const opening =
            document.querySelector(
                ".one-year-opening"
            );

        if (opening) {

            opening.classList.add(
                "show"
            );

        }

    }, 500);


    setTimeout(function () {

        const stats =
            document.querySelector(
                ".anniversary-stats"
            );

        if (stats) {

            stats.classList.add(
                "show"
            );

        }

    }, 5000);


    setTimeout(function () {

        const message =
            document.querySelector(
                ".one-year-message"
            );

        if (message) {

            message.classList.add(
                "show"
            );

        }

    }, 11000);


    setTimeout(function () {

        const final =
            document.querySelector(
                ".one-year-final"
            );

        if (final) {

            final.classList.add(
                "show"
            );

        }

    }, 17000);


    setTimeout(function () {

        screen.style.opacity =
            "0";

    }, 22500);


    setTimeout(function () {

        closeCelebration(
            screen
        );

    }, 25000);

}


function showCinematicPhotos(container) {

    if (!container) {
        return;
    }


    const images = [

        "media/image1.jpg.jpeg",
        "media/image2.jpg.jpeg",
        "media/image3.jpg.jpeg",
        "media/image4.jpg.jpeg",
        "media/image5.jpg.jpeg",
        "media/image6.jpg.jpeg",
        "media/image7.jpg.jpeg",
        "media/image8.jpg.jpeg"

    ];


    let index = 0;


    const interval =
        setInterval(function () {

            if (
                index >=
                images.length
            ) {

                clearInterval(
                    interval
                );

                return;

            }


            const image =
                document.createElement(
                    "img"
                );


            image.src =
                images[index];


            image.classList.add(
                "cinematic-img"
            );


            image.style.left =
                (
                    10 +
                    Math.random() * 70
                ) + "%";


            image.style.top =
                (
                    15 +
                    Math.random() * 60
                ) + "%";


            container.appendChild(
                image
            );


            setTimeout(function () {

                image.remove();

            }, 8000);


            index++;

        }, 2200);

}


function showHiddenMessage() {

    const screen =
        document.getElementById(
            "celebrationScreen"
        );


    if (!screen) {
        return;
    }


    screen.classList.remove(
        "hidden"
    );

    screen.classList.add(
        "cinematic-overlay"
    );

    screen.style.opacity = "1";


    screen.innerHTML = `

        <div class="hidden-message">

            <div class="secret-heart-big">
                ❤️
            </div>

            <h1>
                I didn't say everything...
            </h1>

            <p>
                But I saved this part for the end.
            </p>

            <p>
                You have been a shining light
                in my life.
                You make my days calmer
                and my life happier.
            </p>

            <p>
                Doing life with you is amazing
                and I wouldn't want it any other way.
            </p>

            <p>
                Oh and WAZZZZZZZUUUPPP
                my love :)
            </p>

        </div>

    `;


    setTimeout(function () {

        closeCelebration(
            screen
        );

    }, 12000);

}


function typeWriterEffect(
    text,
    elementId
) {

    const element =
        document.getElementById(
            elementId
        );


    if (!element) {
        return;
    }


    let index = 0;

    element.innerHTML = "";


    const speed = 45;


    function type() {

        if (
            index <
            text.length
        ) {

            element.innerHTML +=
                text.charAt(index);

            index++;

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
        i < 70;
        i++
    ) {

        const confetti =
            document.createElement(
                "div"
            );


        confetti.classList.add(
            "confetti"
        );


        confetti.style.left =
            Math.random() * 100 +
            "vw";


        confetti.style.animationDuration =
            (
                2 +
                Math.random() * 3
            ) + "s";


        document.body.appendChild(
            confetti
        );


        setTimeout(function () {

            confetti.remove();

        }, 5000);

    }

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


    if (
        !story ||
        sections.length === 0
    ) {

        return;

    }


    story.classList.remove(
        "hidden"
    );


    if (player) {

        player.src =
            "media/birthday.mp3";

        player.volume = 0;

        player.play().then(function () {

            fadeMusicIn(player);

        }).catch(function () {});

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
                9000
            );

        } else {

            setTimeout(function () {

                story.classList.add(
                    "hidden"
                );


                const screen =
                    document.getElementById(
                        "celebrationScreen"
                    );


                if (!screen) {
                    return;
                }


                screen.classList.remove(
                    "hidden"
                );


                screen.innerHTML = `

                    <div
                        id="memoryContainer"
                    ></div>

                    <div class="celebration-content">

                        <h1>
                            🎂 Happy Birthday My Love 🎂
                        </h1>

                        <p>
                            Thank you for existing.
                            Thank you for being you.
                        </p>

                    </div>

                `;


                launchConfetti();


                showCinematicPhotos(
                    document.getElementById(
                        "memoryContainer"
                    )
                );


                setTimeout(function () {

                    closeCelebration(
                        screen
                    );

                }, 15000);


            }, 5000);

        }

    }


    setTimeout(
        nextSection,
        9000
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

        let volume =
            music.volume;


        const fadeOut =
            setInterval(function () {

                volume -= 0.05;


                if (volume <= 0) {

                    volume = 0;

                    music.pause();

                    clearInterval(
                        fadeOut
                    );

                }


                music.volume =
                    volume;


            }, 80);

    }


    setTimeout(function () {

        voice.volume = 1;

        voice.play().catch(
            function () {}
        );

    }, 500);


    voice.onended = function () {

        if (!music) {
            return;
        }


        music.play().then(function () {

            fadeMusicIn(music);

        }).catch(function () {});

    };

}


function secretMessage() {

    const screen =
        document.getElementById(
            "celebrationScreen"
        );


    if (!screen) {
        return;
    }


    screen.classList.remove(
        "hidden"
    );


    screen.classList.add(
        "cinematic-overlay"
    );


    screen.innerHTML = `

        <div class="hidden-message">

            <div class="secret-heart-big">
                ❤️
            </div>

            <h1>
                You Found It.
            </h1>

            <p>
                If you clicked this little heart,
                then you were curious enough to find
                one of the little secrets I left for you.
            </p>

            <p>
                And honestly...
            </p>

            <p>
                I love that about you.
            </p>

            <p>
                I love you, My Princess. ❤️
            </p>

        </div>

    `;


    setTimeout(function () {

        closeCelebration(
            screen
        );

    }, 10000);

}


function closeCelebration(screen) {

    if (!screen) {
        return;
    }


    screen.style.opacity = "0";


    setTimeout(function () {

        screen.classList.add(
            "hidden"
        );


        screen.classList.remove(
            "cinematic-overlay"
        );


        screen.classList.remove(
            "one-year-overlay"
        );


        screen.style.opacity = "1";


        screen.innerHTML = `

            <div id="memoryContainer"></div>

            <div class="celebration-content">

                <h1 id="celebrationTitle"></h1>

                <p id="celebrationMessage"></p>

            </div>

        `;

    }, 1000);

}
