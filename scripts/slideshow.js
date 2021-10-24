currentSlide = 0;
displaySlide(currentSlide);

function nextSlide() {
    if(currentSlide == 2){
        currentSlide = 0;
    }
    else {
        currentSlide++;
    }
    displaySlide(currentSlide);
}

function displaySlide(n) {
    var slides = document.getElementsByClassName("slide");

    for (var i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[n].style.display = "flex";
}