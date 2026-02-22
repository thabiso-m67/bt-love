
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
const diffDays = Math.floor(diffTime / (1000*60*60*24));
const counter = document.getElementById("daysTogether");
if(counter){
    counter.textContent = "We've been writing our story for " + diffDays + " days.";
}

function secretMessage(){
    alert("No matter what happens in this world, I choose you. Every time.");
}
