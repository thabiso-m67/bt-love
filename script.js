```javascript
setTimeout(() => {
    document.querySelector(".envelope-container").classList.remove("hidden");
}, 4000);

function openPrompt() {
    let pass = prompt("Enter the password:");
    if(pass === "17-10-2025"){
        window.location.href = "love.html";
    } else {
        alert("Wrong password.");
    }
}

document.addEventListener("click", function(){
    const music = document.getElementById("bgMusic");
    if(music){
        music.volume = 0;
        music.play();
        let fade = setInterval(()=>{
            if(music.volume < 1){
                music.volume += 0.05;
            } else {
                clearInterval(fade);
            }
        },200);
    }
},{once:true});

function addMessage(){
    let text = document.getElementById("newMessage").value;
    if(text.trim() === "") return;

    let messages = JSON.parse(localStorage.getItem("loveMessages")) || [];
    messages.push(text);
    localStorage.setItem("loveMessages", JSON.stringify(messages));

    displayMessages();
    document.getElementById("newMessage").value = "";
}

function displayMessages(){
    let list = document.getElementById("messageList");
    if(!list) return;

    list.innerHTML="";
    let messages = JSON.parse(localStorage.getItem("loveMessages")) || [];

    messages.forEach(msg=>{
        let p = document.createElement("p");
        p.textContent = msg;
        list.appendChild(p);
    });
}

displayMessages();

// 📅 LOVE TIMER (DAYS)
const startDate = new Date("2025-10-17");
const todayGlobal = new Date();
const diffTime = todayGlobal - startDate;
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

const counter = document.getElementById("daysTogether");
if (counter) {
    counter.textContent = diffDays;
}

function secretMessage(){
    alert("No matter what happens in this world, I choose you. Every time.");
}

// 💡 MONTH CALCULATOR
function getMonthsTogether(startDate, currentDate) {
    let months = (currentDate.getFullYear() - startDate.getFullYear()) * 12;
    months += currentDate.getMonth() - startDate.getMonth();

    if (currentDate.getDate() < startDate.getDate()) {
        months--;
    }

    return months;
}

// 🎉 MAIN CELEBRATION LOGIC
function checkAnniversary() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;

    const screen = document.getElementById("celebrationScreen");
    const title = document.getElementById("celebrationTitle");
    const message = document.getElementById("celebrationMessage");

    if(!screen || !title || !message) return;

    // 🎂 HER BIRTHDAY (16 MAY)
    if(day === 16 && month === 5){
        screen.classList.remove("hidden");
        title.innerText = "🎂 Happy Birthday My Love 🎂";
        message.innerText = "Today is all about you. The most beautiful soul I know. I hope your day feels as special as you make my life every single day.";

        launchConfetti(100);
        showMemories();

        setTimeout(() => {
            screen.classList.add("hidden");
        }, 20000);
    }

    // 💖 MONTHLY ANNIVERSARY + MILESTONES
    else if(day === 17){
        const months = getMonthsTogether(startDate, today);

        let suffix = "th";
        if(months % 10 === 1 && months !== 11) suffix = "st";
        else if(months % 10 === 2 && months !== 12) suffix = "nd";
        else if(months % 10 === 3 && months !== 13) suffix = "rd";

        screen.classList.remove("hidden");

        // 🌟 MILESTONES (every 3 months)
        if(months % 3 === 0){
            title.innerText = `💫 ${months}${suffix} Month Milestone 💫`;

            message.innerText = `${months} months with you… that’s not small. That’s ${months} months of memories, growth, love, and choosing each other. And honestly? This is just the beginning.`;

            launchConfetti(120); // BIG celebration
            showMemories();

            setTimeout(() => {
                screen.classList.add("hidden");
            }, 22000);

        } else {
            // 💕 NORMAL MONTH
            title.innerText = `💖 Our ${months}${suffix} Month Anniversary 💖`;

            message.innerText = `It’s been ${months} beautiful month${months > 1 ? "s" : ""} with you. Every moment still feels like something I never want to lose.`;

            launchConfetti(50); // normal celebration
            showMemories();

            setTimeout(() => {
                screen.classList.add("hidden");
            }, 15000);
        }
    }
}

// 🎉 CONFETTI (UPGRADED)
function launchConfetti(amount = 50) {
    for(let i = 0; i < amount; i++){
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = (2 + Math.random()*3) + "s";

        const size = Math.random() * 8 + 6;
        confetti.style.width = size + "px";
        confetti.style.height = size + "px";

        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 6000);
    }
}

checkAnniversary();

// 🖼️ FLOATING MEMORIES
function showMemories() {
    const container = document.getElementById("memoryContainer");
    if(!container) return;

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
        if(index >= images.length){
            clearInterval(interval);
            return;
        }

        const img = document.createElement("img");
        img.src = images[index];
        img.classList.add("memory-img");

        img.style.left = Math.random() * 80 + "%";
        img.style.top = Math.random() * 80 + "%";

        container.appendChild(img);

        setTimeout(() => img.remove(), 6000);

        index++;
    }, 800);
}
```
