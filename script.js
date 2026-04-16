
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

const startDate = new Date("2025-10-17");
const today = new Date();
const diffTime = today - startDate;
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

const counter = document.getElementById("daysTogether");
if (counter) {
    counter.textContent = diffDays;
}

function secretMessage(){
    alert("No matter what happens in this world, I choose you. Every time.");
}

function checkAnniversary() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;

    const screen = document.getElementById("celebrationScreen");
    const title = document.getElementById("celebrationTitle");
    const message = document.getElementById("celebrationMessage");

    if(day === 17 && month === 10){
        // Yearly anniversary
        screen.classList.remove("hidden");
        title.innerText = "❤️🎉 Our Anniversary ❤️🎉";
        message.innerText = "Another year of loving you. And somehow, I love you even more.";

        launchConfetti();
    }
    
    if(day === 17){
        screen.classList.remove("hidden");
        title.innerText = "❤️ Monthly Anniversary ❤️";
        message.innerText = "Another month of us. Loving and experiencing you has been the best thing, and I’d still choose you every time.";

        launchConfetti();
        showMemories();
    }
    
    // Auto close after 5 seconds
    setTimeout(() => {
        screen.classList.add("hidden");
    }, 15000);
}

function launchConfetti() {
    for(let i = 0; i < 50; i++){
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = (2 + Math.random()*3) + "s";
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
    }
}

checkAnniversary();

else if(day === 17 && months === 6){
    startSixMonthExperience();

    // then normal celebration after
    setTimeout(() => {
        screen.classList.remove("hidden");

        title.innerText = "💛 6 Months With You 💛";
        message.innerText = "Six months of loving you… and I’d still choose you every time.";

        launchConfetti();
        launchHearts();
        showMemories();
    }, 25000);
}

function showMemories() {
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
    }, 800); // slightly faster for smoother effect
}

function startSixMonthExperience(){

    const screen = document.getElementById("sixMonthExperience");
    const text = document.getElementById("experienceText");
    const player = document.getElementById("bgMusic");

    screen.classList.remove("hidden");

    player.src = "media/milestone.mp3"; // your special song
    player.play();

    const messages = [
        "6 months ago…",
        "you walked into my life.",
        "And somehow… everything changed.",
        "You became my peace.",
        "My happiness.",
        "My home.",
        "",
        "And if I had to choose again…",
        "I would still choose you.",
        "",
        "Every time.",
        "",
        "Happy 6 Months ❤️"
    ];

    let i = 0;

    function nextLine(){
        if(i < messages.length){
            text.innerText = messages[i];
            i++;
            setTimeout(nextLine, 2000);
        } else {
            setTimeout(() => {
                screen.classList.add("hidden");
            }, 3000);
        }
    }

    nextLine();
}
