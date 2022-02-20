
$(document).ready(function () {
    $('.slider').slick({
        boolean: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [

        ]

    })
});

$(function () {
    $(".burger__btn").on("click", function () {
        $(".header__nav").slideToggle(200, function () {
            if ($(this).css("display") === "none") {
                $(this).removeAttr("style");
            }
        });
    });
});