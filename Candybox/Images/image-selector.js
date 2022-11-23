// Elements
const elements = {
    mainImage: document.getElementById("main-image"),
    thumbnails: document.querySelectorAll(".thumbnail"),
};

elements.thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
        elements.mainImage.src = thumbnail.src;
        elements.mainImage.srcset = thumbnail.srcset;
    });
});