setTimeout(() => {
const envelope = document.querySelector(".envelope-container");

```
if(envelope){
    envelope.classList.remove("hidden");
}
```

}, 5000);

function openPrompt(){

```
let pass = prompt("Enter the password:");

if(pass === "17-10-2025"){
    window.location.href = "love.html";
} else {
    alert("Wrong password.");
}
```

}

document.addEventListener("click", function(){

```
const music = document.getElementById("bgMusic");

if(music){

    music.volume = 0;

    music.play().catch(() => {});

    let volume = 0;

    const fade = setInterval(() => {

        if(volume < 1){

            volume += 0.05;
            music.volume = Math.min(volume, 1);

        } else {

            clearInterval(fade);

        }

    }, 200);

}
```

}, {once:true});

function addMessage(){

```
let text = document.getElementById("newMessage").value;

if(text.trim() === "") return;

let messages =
    JSON.parse(localStorage.getItem("loveMessages")) || [];

messages.push(text);

localStorage.setItem(
    "loveMessages",
    JSON.stringify(messages)
);

displayMessages();

document.getElementById("newMessage").value = "";
```

}

function displayMessages(){

```
let list = document.getElementById("messageList");

if(!list) return;

list.innerHTML = "";

let messages =
    JSON.parse(localStorage.getItem("loveMessages")) || [];

messages.forEach(msg => {

    let p = document.createElement("p");

    p.textContent = msg;

    list.appendChild(p);

});
```

}

displayMessages();

const startDate = new Date("2025-10-17T00:00:00");

function updateCounter(){

```
const now = new Date();

const difference = now - startDate;

if(difference < 0) return;


const totalSeconds =
    Math.floor(difference / 1000);

const days =
    Math.floor(totalSeconds / 86400);

const hours =
    Math.floor((totalSeconds % 86400) / 3600);

const minutes =
    Math.floor((totalSeconds % 3600) / 60);

const seconds =
    totalSeconds % 60;


const daysElement =
    document.getElementById("counterDays");

const hoursElement =
    document.getElementById("counterHours");

const minutesElement =
    document.getElementById("counterMinutes");

const secondsElement =
    document.getElementById("counterSeconds");


if(daysElement){
    daysElement.textContent = days;
}

if(hoursElement){
    hoursElement.textContent = hours;
}

if(minutesElement){
    minutesElement.textContent = minutes;
}

if(secondsElement){
    secondsElement.textContent =
        String(seconds).padStart(2, "0");
}
```

}

updateCounter();

setInterval(updateCounter, 1000);

function secretMessage(){

```
alert(
    "No matter what happens in this world, I choose you. Every time."
);
```

}
