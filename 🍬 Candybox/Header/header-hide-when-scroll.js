const header = document.querySelector("header");
const margin = 100;

window.addEventListener("scroll", () => {
    const position = window.scrollY;

    // Hide when passing the margin
    position >= margin ? header.classList.add(".hidden") : header.classList.remove(".hidden");
});