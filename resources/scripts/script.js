document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert(`Yay! A random ${button.textContent} button for you to click on!`);
        });
    });
});
