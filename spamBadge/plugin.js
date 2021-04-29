const badgeClassNames = "badge bg-secondary";

socket.on("message", (user, message) => {
    if (messages.length === 1) {
        return;
    }
    let lastMessage = messages.children[messages.children.length - 2];

    if (((lastMessage.children[0].classList.value === badgeClassNames && lastMessage.innerText.startsWith(lastMessage.children[0].innerText + user)) ||
            (lastMessage.innerText.startsWith(user))) && lastMessage.id === `-${message}-`) {
        messages.removeChild(messages.children[messages.children.length - 1]);
        if (lastMessage.children.length === 2 && lastMessage.children[0].classList.value === badgeClassNames) {
            lastMessage.children[0].innerText = parseInt(lastMessage.children[0].innerText) + 1;
        } else {
            let badge = document.createElement("span");
            badge.classList.value = badgeClassNames;
            badge.style.marginRight = ".2em";
            badge.innerText = "2";
            lastMessage.prepend(badge);
        }
    }
});