socket.on("message", (user, message) => {
    if (messages.length === 1) {
        return;
    }
    let lastMessage = messages.children[messages.children.length - 2];

    if (lastMessage.innerText.startsWith(user) && lastMessage.id === `-${message}-`) {
        messages.removeChild(messages.children[messages.children.length - 1]);
        if (lastMessage.children.length === 2 && lastMessage.children[1].classList.value === "badge bg-secondary") {
            lastMessage.children[1].innerText = parseInt(lastMessage.children[1].innerText) + 1;
        } else {
            let badge = document.createElement("span");
            badge.classList.value = "badge bg-secondary";
            badge.innerText = "2";
            lastMessage.prepend(badge);
        }
    }
});