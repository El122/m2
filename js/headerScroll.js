let header = $('header');
let scrollPrev = 0;

$(window).scroll(function () {
    let scrolled = $(window).scrollTop();

    if (scrolled > 100 && scrolled > scrollPrev) {
        header.fadeOut(300);
    } else {
        header.fadeIn(300);
    }
    scrollPrev = scrolled;
});