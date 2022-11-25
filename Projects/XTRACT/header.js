document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".js-header");

    let last = 0;

    if (header) {
        window.addEventListener("scroll", () => {
            const current = window.scrollY;
        
            // Check if last scroll is higher/lower than current scroll
            if (last > current) {
                if (current <= 100) {
                    header.classList.add("hidden-header");
                } else {
                    header.classList.remove("hidden-header");
                };
            } else {
                if (current <= 100) {
                    header.classList.add("hidden-header");
                } else {
                    header.classList.add("hidden-header");
                };
            };
            
            // Assign current scroll to last scroll
            last = current;
        });
    };
});