function unlock() {
    const password = document.getElementById("password").value;
    const correctPassword = "17102025";

    if (password === correctPassword) {
        document.querySelector(".envelope").classList.add("open");

        setTimeout(() => {
            window.location.href = "love.html";
        }, 1200);

    } else {
        document.getElementById("error").innerText = "That’s not our date.";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("messageList")) {
        loadMessages();
    }
});

function addMessage() {
    const messageInput = document.getElementById("newMessage");
    const message = messageInput.value;

    if (message.trim() === "") return;

    let messages = JSON.parse(localStorage.getItem("loveMessages")) || [];
    messages.push(message);
    localStorage.setItem("loveMessages", JSON.stringify(messages));

    messageInput.value = "";
    loadMessages();
}

function loadMessages() {
    const messageList = document.getElementById("messageList");
    messageList.innerHTML = "";

    let messages = JSON.parse(localStorage.getItem("loveMessages")) || [];

    messages.forEach(msg => {
        const p = document.createElement("p");
        p.innerText = msg;
        messageList.appendChild(p);
    });
}