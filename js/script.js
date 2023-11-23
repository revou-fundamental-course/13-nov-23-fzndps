// picture slide
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlide");

    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}
 
setInterval(() => {
    plusSlides(1);
}, 3000)

function validateForm() {
    var name = document.getElementById("name-input").value;
    var email = document.getElementById("email-input").value;

    // Reset error messages
    document.getElementById("name-error").innerHTML = "";
    document.getElementById("email-error").innerHTML = "";

    // Validate Name
    if (name.trim() === "") {
        document.getElementById("name-error").innerHTML = "Nama tidak boleh kosong";
        return false;
    }

    // Validate Email
    if (email.trim() === "") {
        document.getElementById("email-error").innerHTML = "Email tidak boleh kosong";
        return false;
    }

    return true;
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}