// ================================
// DISNEY WORLD JAVASCRIPT
// ================================


// Menampilkan pesan ketika website selesai dimuat
document.addEventListener("DOMContentLoaded", function () {

    console.log("Disney World website is ready! ✨");

});


// ================================
// ANIMASI SAAT SCROLL
// ================================

const cards = document.querySelectorAll(
    ".movie-card, .character-card, .gallery-item"
);


const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(function (card) {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(30px)";

    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});