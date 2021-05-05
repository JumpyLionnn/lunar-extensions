const badgeClassNames = "badge bg-secondary";

socket.on("message", (user, message) => {
    if (messages.length === 1) {
        return;
    }
    let lastMessage = messages.children[messages.children.length - 2];
    let lastText = lastMessage.id;
    let lastMessageBadge = lastMessage.querySelector("#spamBadge");
    if (lastText === `-${message}-`) {
        messages.removeChild(messages.children[messages.children.length - 1]);
        if (lastMessageBadge !== null) {
            lastMessageBadge.innerText = parseInt(lastMessageBadge.innerText) + 1;
        } else {
            let badge = document.createElement("span");
            badge.classList.value = badgeClassNames;
            badge.id = "spamBadge";
            badge.style.marginRight = ".2em";
            badge.innerText = "2";
            lastMessage.prepend(badge);
        }
    }
});