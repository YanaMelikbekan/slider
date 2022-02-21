let slideIndex = 1;
showSlide(slideIndex);

function nextSlide() {
    showSlide(slideIndex += 1);
}

function previousSlide() {
    showSlide(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    let i;
    const slides = document.getElementsByClassName("item");

    if (n > slides.length) {
    slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

}
setInterval(() => {
    nextSlide()
}, 2000);