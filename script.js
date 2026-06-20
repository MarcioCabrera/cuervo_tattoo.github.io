const botones = document.querySelectorAll(".accordion-btn");

botones.forEach(btn => {

    btn.addEventListener("click", () => {

        const contenido = btn.nextElementSibling;

        if (contenido.style.maxHeight) {

            contenido.style.maxHeight = null;

        } else {

            contenido.style.maxHeight =
                contenido.scrollHeight + "px";

        }

    });

});


document.querySelectorAll('.award-card').forEach(card => {

    card.addEventListener('click', () => {

        console.log(card);

        card.style.background = "black";

    });

});



const slides = document.querySelectorAll(".studio-slider img");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let current = 0;

function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function nextSlide() {

    current++;

    if (current >= slides.length) {
        current = 0;
    }

    showSlide(current);
}

function prevSlide() {

    current--;

    if (current < 0) {
        current = slides.length - 1;
    }

    showSlide(current);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

setInterval(nextSlide, 10000);


window.addEventListener("load", () => {

    document.querySelectorAll(".award-card").forEach(card => {

        card.addEventListener("click", () => {

            card.classList.toggle("flipped");

        });

    });

});

const higieneSlides = document.querySelectorAll(".higiene-slider img");

let higieneCurrent = 0;

function showHigiene(index) {

    higieneSlides.forEach(slide => {
        slide.classList.remove("active");
    });

    higieneSlides[index].classList.add("active");
}

function nextHigiene() {

    higieneCurrent++;

    if (higieneCurrent >= higieneSlides.length) {
        higieneCurrent = 0;
    }

    showHigiene(higieneCurrent);
}

const galleryBtn = document.querySelector(".gallery-toggle");
const gallery = document.querySelector(".gallery");

if (galleryBtn) {

    galleryBtn.addEventListener("click", () => {

        gallery.classList.toggle("open");

        if (gallery.classList.contains("open")) {
            galleryBtn.textContent = "OCULTAR GALERÍA";
        } else {
            galleryBtn.textContent = "VER GALERÍA";
        }

    });

}