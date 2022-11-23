const header = document.querySelector("header");

let last = 0;

window.addEventListener("scroll", () => {
    const current = window.scrollY;

    // Check if last scroll is higher/lower than current scroll
    last > current ? header.classList.remove(".hidden") : header.classList.add(".hidden");

    // Assign current scroll to last scroll
    last = current;
});