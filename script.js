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

    const password = prompt("Enter the password:");

    if (password === "17-10-2025") {
        window.location.href = "love.html";
    } else if (password !== null) {
        alert("Wrong password.");
    }
}


function addMessage() {

    const input = document.getElementById("newMessage");

    if (!input) return;

    const text = input.value.trim();

    if (text === "") return;

    let messages =
        JSON.parse(localStorage.getItem("loveMessages")) || [];

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

    if (!list) return;

    list.innerHTML = "";

    const messages =
        JSON.parse(localStorage.getItem("loveMessages")) || [];

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

    const today = new Date();

    const difference =
        today.getTime() - startDate.getTime();

    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );

    const counter =
        document.getElementById("daysTogether");

    if (counter) {
        counter.textContent = days;
    }
}


function checkAnniversary() {

    let today;

    if (TEST_MODE === "one-year") {

        today =
            new Date("2026-10-17T12:00:00");

    } else if (TEST_MODE === "six-month") {

        today =
            new Date("2026-04-17T12:00:00");

    } else if (TEST_MODE === "birthday") {

        today =
            new Date("2026-05-16T12:00:00");

    } else if (TEST_MODE === "monthly") {

        today =
            new Date("2026-09-17T12:00:00");

    } else {

        today = new Date();
    }


    const day =
        today.getDate();

    const month =
        today.getMonth() + 1;

    const year =
        today.getFullYear();


    if (
        TEST_MODE === "birthday" ||
        (
            day === 16 &&
            month === 5
        )
    ) {

        startBirthdayStory();

        return;
    }


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


    if (
        !screen ||
        !title ||
        !message
    ) {

        return;
    }


    const start =
        new Date(
            "2025-10-17T00:00:00"
        );


    const monthsPassed =
        (
            today.getFullYear() -
            start.getFullYear()
        ) * 12 +
        (
            today.getMonth() -
            start.getMonth()
        );


    if (
        TEST_MODE === "one-year" ||
        (
            day === 17 &&
            month === 10 &&
            year === 2026
        )
    ) {

        runOneYearAnniversary(screen);

        return;
    }


    if (
        TEST_MODE === "six-month" ||
        (
            day === 17 &&
            monthsPassed === 6
        )
    ) {

        runCinematicSequence(
            screen,
            title,
            message
        );

        return;
    }


    if (
        TEST_MODE === "monthly" ||
        day === 17
    ) {

        screen.classList.remove("hidden");

        title.textContent =
            "❤️ Monthly Anniversary ❤️";

        message.textContent =
            "Another month of us. I’d still choose you every time.";

        launchConfetti();

        setTimeout(function () {

            screen.classList.add("hidden");

        }, 15000);
    }
}


function runOneYearAnniversary(screen) {

    screen.className = "celebration one-year-story";

    screen.innerHTML = `
        <div id="anniversaryStoryContainer"></div>
    `;

    const container =
        document.getElementById(
            "anniversaryStoryContainer"
        );

    if (!container) return;

    playAnniversaryMusic();

    const scenes = [

        {
            type: "opening",
            duration: 6500,
            html: `
                <div class="anniversary-scene opening-scene">
                    <div class="scene-date">
                        17 • 10 • 2025
                    </div>

                    <h1>
                        The day our story began.
                    </h1>

                    <p>
                        I didn't know it then...
                    </p>

                    <p>
                        but that day was going to become
                        one of the most important days of my life.
                    </p>
                </div>
            `
        },

        {
            type: "photo",
            duration: 8500,
            image: "media/image4.jpg.jpeg",
            html: `
                <div class="anniversary-scene memory-scene">

                    <div class="memory-number">
                        01
                    </div>

                    <div class="memory-photo-wrap">
                        <img
                            src="media/image4.jpg.jpeg"
                            class="anniversary-photo"
                        >
                    </div>

                    <div class="memory-content">

                        <span>
                            WHERE IT ALL BEGAN
                        </span>

                        <h2>
                            Our first date.
                        </h2>

                        <p>
                            Our first picture.
                        </p>

                        <p>
                            And the beginning of a story
                            I wouldn't trade for anything.
                        </p>

                        <p>
                            Looking at this picture now makes me smile
                            because I had no idea how many memories
                            were waiting for us.
                        </p>

                    </div>

                </div>
            `
        },

        {
            type: "photo",
            duration: 7500,
            image: "media/image34.jpg.jpeg",
            html: `
                <div class="anniversary-scene memory-scene">

                    <div class="memory-number">
                        02
                    </div>

                    <div class="memory-photo-wrap">
                        <img
                            src="media/image34.jpg.jpeg"
                            class="anniversary-photo"
                        >
                    </div>

                    <div class="memory-content">

                        <span>
                            THE LAUGHS
                        </span>

                        <h2>
                            Then came the laughs.
                        </h2>

                        <p>
                            Somewhere along the way,
                            you became one of my favourite
                            people to laugh with.
                        </p>

                        <p>
                            And honestly...
                        </p>

                        <p class="special-line">
                            Some of my favourite memories
                            with you are the completely
                            ridiculous ones. 😂❤️
                        </p>

                    </div>

                </div>
            `
        },

        {
            type: "photo",
            duration: 8500,
            image: "media/image33.jpg.jpeg",
            html: `
                <div class="anniversary-scene memory-scene">

                    <div class="memory-number">
                        03
                    </div>

                    <div class="memory-photo-wrap">
                        <img
                            src="media/image33.jpg.jpeg"
                            class="anniversary-photo"
                        >
                    </div>

                    <div class="memory-content">

                        <span>
                            ONE OF MY FAVOURITES
                        </span>

                        <h2>
                            Some pictures just feel different.
                        </h2>

                        <p>
                            There are pictures you take...
                        </p>

                        <p>
                            and then there are pictures
                            you never get tired of looking at.
                        </p>

                        <p class="special-line">
                            This is one of mine.
                        </p>

                        <p>
                            Because when I look at you here,
                            I just see the girl I'm so lucky
                            to call mine.
                        </p>

                    </div>

                </div>
            `
        },

        {
            type: "photo",
            duration: 8500,
            image: "media/image10.jpg.jpeg",
            html: `
                <div class="anniversary-scene memory-scene">

                    <div class="memory-number">
                        04
                    </div>

                    <div class="memory-photo-wrap">
                        <img
                            src="media/image10.jpg.jpeg"
                            class="anniversary-photo"
                        >
                    </div>

                    <div class="memory-content">

                        <span>
                            OUR FIRST VALENTINE'S DAY
                        </span>

                        <h2>
                            Our first Valentine's Day. ❤️
                        </h2>

                        <p>
                            Our first one of many, I hope.
                        </p>

                        <p>
                            I loved making memories with you that day...
                        </p>

                        <p>
                            but what I love most is knowing
                            that it wasn't just Valentine's Day.
                        </p>

                        <p class="special-line">
                            It was our first one.
                        </p>

                    </div>

                    <div class="floating-hearts">
                        ❤️
                        ❤️
                        ❤️
                    </div>

                </div>
            `
        },

        {
            type: "photo",
            duration: 7500,
            image: "media/image30.jpg.jpeg",
            html: `
                <div class="anniversary-scene portrait-scene">

                    <div class="portrait-content">

                        <span>
                            AND THEN THERE'S JUST...
                        </span>

                        <h2>
                            You.
                        </h2>

                        <p>
                            Sometimes I look at you
                            and still can't believe
                            I get to experience life with you.
                        </p>

                    </div>

                    <div class="portrait-photo">

                        <img
                            src="media/image30.jpg.jpeg"
                            class="anniversary-photo"
                        >

                    </div>

                </div>
            `
        },

        {
            type: "photo",
            duration: 7500,
            image: "media/image29.jpg.jpeg",
            html: `
                <div class="anniversary-scene portrait-scene">

                    <div class="portrait-content">

                        <span>
                            ANOTHER ONE
                        </span>

                        <h2>
                            I could never get tired of you.
                        </h2>

                        <p>
                            I could have a thousand pictures
                            of you and somehow...
                        </p>

                        <p>
                            I'd still want another one.
                        </p>

                        <p class="special-line">
                            Every version of you is a version
                            I want to remember.
                        </p>

                    </div>

                    <div class="portrait-photo">

                        <img
                            src="media/image29.jpg.jpeg"
                            class="anniversary-photo"
                        >

                    </div>

                </div>
            `
        },

        {
            type: "photo",
            duration: 9000,
            image: "media/image26.jpg.jpeg",
            html: `
                <div class="anniversary-scene little-things-scene">

                    <div class="little-things-photo">

                        <img
                            src="media/image26.jpg.jpeg"
                            class="anniversary-photo"
                        >

                    </div>

                    <div class="little-things-content">

                        <span>
                            THE LITTLE THINGS
                        </span>

                        <h2>
                            It's not only the big moments.
                        </h2>

                        <div class="little-lines">

                            <p>
                                It's your laugh.
                            </p>

                            <p>
                                Your little expressions.
                            </p>

                            <p>
                                The random conversations.
                            </p>

                            <p>
                                The stupid jokes.
                            </p>

                            <p>
                                The moments nobody else would understand.
                            </p>

                        </div>

                        <p class="special-line">
                            Those are the things I treasure the most.
                        </p>

                    </div>

                </div>
            `
        },

        {
            type: "photo",
            duration: 9000,
            image: "media/image35.jpg.jpeg",
            html: `
                <div class="anniversary-scene us-scene">

                    <div class="us-photo">

                        <img
                            src="media/image35.jpg.jpeg"
                            class="anniversary-photo"
                        >

                    </div>

                    <div class="us-content">

                        <span>
                            US
                        </span>

                        <h2>
                            Look how far we've come.
                        </h2>

                        <p>
                            One year.
                        </p>

                        <p>
                            So many memories.
                        </p>

                        <p>
                            So many laughs.
                        </p>

                        <p>
                            So many moments I wish I could pause forever.
                        </p>

                        <p class="special-line">
                            And somehow...
                        </p>

                        <h3>
                            We're only getting started.
                        </h3>

                    </div>

                </div>
            `
        },

        {
            type: "emotional",
            duration: 8500,
            html: `
                <div class="anniversary-scene emotional-scene">

                    <div class="emotional-text">

                        <p class="small-emotional">
                            There is something
                            I want you to know.
                        </p>

                        <h2>
                            You weren't just someone
                            I started dating.
                        </h2>

                        <p>
                            Somewhere along the way,
                            you became someone I couldn't
                            imagine my life without.
                        </p>

                    </div>

                </div>
            `
        },

        {
            type: "emotional",
            duration: 9000,
            html: `
                <div class="anniversary-scene emotional-scene">

                    <div class="emotional-text">

                        <p>
                            You became my favourite person.
                        </p>

                        <p>
                            My safe place.
                        </p>

                        <p>
                            My happiness.
                        </p>

                        <p class="princess-line">
                            My Princess. ❤️
                        </p>

                    </div>

                </div>
            `
        },

        {
            type: "final-photo",
            duration: 8500,
            html: `
                <div class="anniversary-scene final-photo-scene">

                    <img
                        src="media/image33.jpg.jpeg"
                        class="final-anniversary-photo"
                    >

                    <div class="final-photo-overlay"></div>

                    <div class="final-photo-text">

                        <p>
                            And after everything...
                        </p>

                        <h2>
                            I'd still choose you.
                        </h2>

                    </div>

                </div>
            `
        },

        {
            type: "ending",
            duration: 10000,
            html: `
                <div class="anniversary-scene ending-scene">

                    <div class="ending-content">

                        <p class="ending-number">
                            365 DAYS
                        </p>

                        <p>
                            8,760 hours.
                        </p>

                        <p>
                            525,600 minutes.
                        </p>

                        <p>
                            And every single one
                            was worth it.
                        </p>

                        <div class="ending-divider"></div>

                        <h1>
                            ONE YEAR ❤️
                        </h1>

                        <p>
                            One year down.
                        </p>

                        <p>
                            I hope we get to celebrate
                            many, many more.
                        </p>

                        <h2>
                            Happy 1 Year,
                            My Princess.
                        </h2>

                        <div class="bt-final">
                            B & T ❤️
                        </div>

                    </div>

                </div>
            `
        }

    ];


    playAnniversaryScenes(
        container,
        scenes,
        0
    );
}


function playAnniversaryScenes(
    container,
    scenes,
    index
) {

    if (
        index >= scenes.length
    ) {

        finishAnniversaryStory();

        return;
    }


    container.innerHTML =
        scenes[index].html;


    const scene =
        container.firstElementChild;


    if (scene) {

        requestAnimationFrame(function () {

            scene.classList.add(
                "scene-visible"
            );

        });

    }


    setTimeout(function () {

        if (!scene) {

            playAnniversaryScenes(
                container,
                scenes,
                index + 1
            );

            return;
        }


        scene.classList.remove(
            "scene-visible"
        );

        scene.classList.add(
            "scene-fade-out"
        );


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


function playAnniversaryMusic() {

    const music =
        document.getElementById(
            "bgMusic"
        );


    if (!music) {

        console.log(
            "bgMusic element not found."
        );

        return;
    }


    music.loop = true;

    music.volume = 0.6;


    if (
        music.paused
    ) {

        music.play()
            .then(function () {

                console.log(
                    "Anniversary music playing."
                );

            })
            .catch(function (error) {

                console.log(
                    "Music requires user interaction:",
                    error
                );

            });

    }

}


function finishAnniversaryStory() {

    const screen =
        document.getElementById(
            "celebrationScreen"
        );


    if (!screen) return;


    screen.classList.add(
        "anniversary-finished"
    );


    setTimeout(function () {

        screen.classList.add(
            "hidden"
        );

        screen.classList.remove(
            "one-year-story"
        );

        screen.classList.remove(
            "anniversary-finished"
        );

        screen.innerHTML = `
            <div id="memoryContainer"></div>
            <h1 id="celebrationTitle"></h1>
            <p id="celebrationMessage"></p>
        `;

    }, 2500);
}


function runCinematicSequence(
    screen,
    title,
    message
) {

    const music =
        document.getElementById(
            "bgMusic"
        );

    const container =
        document.getElementById(
            "memoryContainer"
        );


    if (!container) return;


    container.innerHTML = "";

    screen.classList.remove(
        "hidden"
    );

    screen.classList.add(
        "cinematic-overlay"
    );

    title.textContent =
        "Six Months With You";

    title.classList.add(
        "cinematic-title"
    );

    message.innerHTML = "";

    message.classList.add(
        "cinematic-message"
    );


    setTimeout(function () {

        if (music) {

            music.volume = 0;

            music.loop = true;

            music.play()
                .then(function () {

                    let volume = 0;

                    const fade =
                        setInterval(function () {

                            if (
                                volume < 0.6
                            ) {

                                volume += 0.02;

                                music.volume =
                                    volume;

                            } else {

                                clearInterval(
                                    fade
                                );

                            }

                        }, 200);

                })
                .catch(function () {});

        }


        typeWriterEffect(

            "Six months ago, I didn’t know life could feel any better, but each day it gets better with you. You didn’t just become part of my days… you became my joy everyday.",

            "celebrationMessage"

        );

    }, 3000);


    setTimeout(function () {

        showCinematicPhotos(
            container
        );

    }, 12000);


    setTimeout(function () {

        message.innerHTML =
            "And I still choose you. Every single time.";

    }, 28000);


    setTimeout(function () {

        screen.style.opacity = "0";

    }, 32000);


    setTimeout(function () {

        screen.classList.add(
            "hidden"
        );

        screen.classList.remove(
            "cinematic-overlay"
        );

        screen.style.opacity = "1";

        container.innerHTML = "";

        showHiddenMessage();

    }, 36000);
}


function showCinematicPhotos(
    container
) {

    if (!container) return;


    const images = [

        "media/image1.jpg.jpeg",
        "media/image2.jpg.jpeg",
        "media/image3.jpg.jpeg",
        "media/image4.jpg.jpeg",
        "media/image5.jpg.jpeg"

    ];


    let index = 0;


    const interval =
        setInterval(function () {

            if (
                index >= images.length
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
                    20 +
                    Math.random() * 60
                ) + "%";


            image.style.top =
                (
                    20 +
                    Math.random() * 50
                ) + "%";


            container.appendChild(
                image
            );


            setTimeout(function () {

                image.remove();

            }, 9000);


            index++;

        }, 3000);
}


function showHiddenMessage() {

    const screen =
        document.getElementById(
            "celebrationScreen"
        );


    if (!screen) return;


    screen.classList.remove(
        "hidden"
    );


    screen.classList.add(
        "cinematic-overlay"
    );


    screen.innerHTML = `

        <div class="hidden-message">

            <h1>
                I didn’t say everything…
            </h1>

            <p>
                But I saved this part for the end.
            </p>

            <p>
                You have been a shining light in my life
                and you make my days calmer
                and my life happier.
            </p>

            <p>
                Doing life with you is amazing
                and I wouldn't want it any other way.
            </p>

            <p>
                Oh and WAZZZZZZZUUUPPP my love :)
            </p>

        </div>

    `;


    setTimeout(function () {

        screen.classList.add(
            "hidden"
        );

        screen.classList.remove(
            "cinematic-overlay"
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


    if (!element) return;


    let index = 0;

    element.innerHTML = "";

    const speed = 65;


    function type() {

        if (
            index < text.length
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
        i < 50;
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
            Math.random() *
            100 +
            "vw";


        confetti.style.animationDuration =
            (
                2 +
                Math.random() * 3
            ) +
            "s";


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

        player.loop = true;

        player.play()
            .catch(function () {});

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

            setTimeout(function () {

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


                if (
                    !screen ||
                    !title ||
                    !message
                ) {

                    return;
                }


                screen.classList.remove(
                    "hidden"
                );


                title.textContent =
                    "🎂 Happy Birthday My Love 🎂";


                message.textContent =
                    "Thank you for existing. Thank you for being you.";


                launchConfetti();


                showCinematicPhotos(
                    document.getElementById(
                        "memoryContainer"
                    )
                );


                setTimeout(function () {

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

        let volume =
            music.volume;


        const fadeOut =
            setInterval(function () {

                if (
                    volume > 0.05
                ) {

                    volume -= 0.05;

                    music.volume =
                        volume;

                } else {

                    music.pause();

                    clearInterval(
                        fadeOut
                    );
                }

            }, 80);
    }


    setTimeout(function () {

        voice.volume = 1;

        voice.play()
            .catch(function () {});

    }, 800);


    voice.onended =
        function () {

            if (!music) return;


            music.play()
                .catch(function () {});


            let volume = 0;

            music.volume = 0;


            const fadeIn =
                setInterval(function () {

                    if (
                        volume < 0.6
                    ) {

                        volume += 0.05;

                        music.volume =
                            volume;

                    } else {

                        clearInterval(
                            fadeIn
                        );
                    }

                }, 80);
        };
}


function secretMessage() {

    const screen =
        document.getElementById(
            "celebrationScreen"
        );


    if (!screen) return;


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

        screen.classList.add(
            "hidden"
        );

        screen.classList.remove(
            "cinematic-overlay"
        );


        screen.innerHTML = `

            <div id="memoryContainer"></div>

            <h1 id="celebrationTitle"></h1>

            <p id="celebrationMessage"></p>

        `;

    }, 10000);
}
