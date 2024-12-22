document.addEventListener("DOMContentLoaded", () => {
    $(document).ready(function() {
        $('.carousel').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            prevArrow: '<div class="carousel__arrow carousel__prev"><i class="fa-solid fa-angle-left"></i></div>',
            nextArrow: '<div class="carousel__arrow carousel__next"><i class="fa-solid fa-angle-right"></i></div>'
        });
    });
});
