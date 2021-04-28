console.log("started")
socket.on("message", (user, message) => {
    console.log(message);
    if (messages.length === 1) {
        return;
    }
    let lastMessage = messages.children[messages.children.length - 2];
    console.log(lastMessage.innerText === `${user}: ${message}`);

    if (lastMessage.innerText === `${user}: ${message}`) {
        messages.remove(messages.children[messages.children.length - 1]);

        if (lastMessage.children.length === 2 && lastMessage.children[1].classList.value === "badge bg-secondary") {
            console / log("new number: " + parseInt(lastMessage.children[1].innerText) + 1)
            lastMessage.children[1].innerText = parseInt(lastMessage.children[1].innerText) + 1;
        } else {
            console.log("new badge")
            let badge = document.createElement("span");
            badge.classList.value = "badge bg-secondary";
            badge.innerText = "2";
            lastMessage.appendChild(badge);
        }
    } else {
        console.log("not equal")
        console.log(lastMessage.innerText);
        console.log(`${user}: ${message}`);
    }

});