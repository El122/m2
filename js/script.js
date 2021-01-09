$(document).ready(function () {

    let show = true;
    let countbox = ".count";
    $(window).on("scroll load resize", function () {
        if (!show) return false;
        let w_top = $(window).scrollTop();
        let e_top = $(countbox).offset().top;
        let w_height = $(window).height();
        let d_height = $(document).height();
        let e_height = $(countbox).outerHeight();
        if (w_top + 800 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.card').css('opacity', '1');
            $('.count').spincrement({
                thousandSeparator: "",
                duration: 1200
            });

            show = false;
        }
    });

});

let slideIndex = 1;
let timer = setInterval(() => {
    plusSlide();
}, 15000);
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        document.getElementsByClassName("switch")[i].style.opacity = "0.5";
        slides[i].style.display = "none";
    }

    document.getElementsByClassName("switch")[slideIndex - 1].style.opacity = "1";
    slides[slideIndex - 1].style.display = "block";
}
