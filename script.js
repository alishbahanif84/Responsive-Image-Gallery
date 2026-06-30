// ================================
// IMAGE GALLERY
// ================================

const galleryImages = document.querySelectorAll(".gallery .image img");
const galleryItems = document.querySelectorAll(".gallery .image");

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

// ================================
// OPEN LIGHTBOX
// ================================

galleryImages.forEach((img, index) => {

    img.addEventListener("click", () => {

        currentIndex = index;

        showImage();

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});

function showImage() {

    lightboxImg.src = galleryImages[currentIndex].src;

}

// ================================
// CLOSE
// ================================

closeBtn.addEventListener("click", closeLightbox);

function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "auto";

}

// ================================
// NEXT
// ================================

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= galleryImages.length) {

        currentIndex = 0;

    }

    showImage();

});

// ================================
// PREVIOUS
// ================================

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = galleryImages.length - 1;

    }

    showImage();

});

// ================================
// CLICK OUTSIDE TO CLOSE
// ================================

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        closeLightbox();

    }

});

// ================================
// KEYBOARD
// ================================

document.addEventListener("keydown", (e) => {

    if (!lightbox.classList.contains("active")) return;

    if (e.key === "Escape") {

        closeLightbox();

    }

    if (e.key === "ArrowRight") {

        nextBtn.click();

    }

    if (e.key === "ArrowLeft") {

        prevBtn.click();

    }

});

// ================================
// FILTERS
// ================================

const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        filterBtns.forEach(b => b.classList.remove("active"));

        btn.classList.add("active");

        const value = btn.dataset.name;

        galleryItems.forEach(card => {

            if (value === "all") {

                card.style.display = "block";

            }

            else if (card.classList.contains(value)) {

                card.style.display = "block";

            }

            else {

                card.style.display = "none";

            }

        });

    });

});

// ================================
// DARK / LIGHT THEME
// ================================

const themeBtn = document.getElementById("theme-btn");

const icon = themeBtn.querySelector("i");

// Load Saved Theme

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    icon.classList.replace("fa-moon", "fa-sun");

}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        icon.classList.replace("fa-moon", "fa-sun");

        localStorage.setItem("theme", "dark");

    }

    else {

        icon.classList.replace("fa-sun", "fa-moon");

        localStorage.setItem("theme", "light");

    }

});

// ================================
// IMAGE HOVER ANIMATION
// ================================

galleryItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.style.transform = "translateY(-8px)";

    });

    item.addEventListener("mouseleave", () => {

        item.style.transform = "translateY(0px)";

    });

});

// ================================
// END
// ================================