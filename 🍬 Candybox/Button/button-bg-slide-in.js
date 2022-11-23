const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    const label = button.querySelector(".button-label");
    const icon = button.querySelector(".button-icon");

    button.addEventListener("mouseover", () => {
        label.classList.add("hover-state");
        icon.classList.add("hover-state");
    });

    button.addEventListener("mouseleave", () => {
        label.classList.remove("hover-state");
        icon.classList.remove("hover-state");
    });
});