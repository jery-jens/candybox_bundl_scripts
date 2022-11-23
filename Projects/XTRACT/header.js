document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".js-header");

    let last = 0;
    
    window.addEventListener("scroll", () => {
        const current = window.scrollY;
    
        // Check if last scroll is higher/lower than current scroll
        header ? last > current ? header.classList.remove("hidden-header") : header.classList.add("hidden-header") : null;
    
        // Assign current scroll to last scroll
        last = current;
    });
});