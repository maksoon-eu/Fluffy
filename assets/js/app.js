$(function() { 
let flufSlider = $("#flufSlider");

flufSlider.slick({
    infinite: true,
    fade: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 3
          }
        },
        {
            breakpoint: 1100,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1
            }
          },
    ]
});

$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let scrollEl = $(this).data("scroll");
    let scrollElPos = $(scrollEl).offset().top;

    nav.removeClass('show');
    navToggle.removeClass('burger-active');

    $("html, body").animate({
        scrollTop: scrollElPos
    }, 500);
});

let navToggle = $("#navToggle");
let nav = $("#nav");

    $(function() {
        navToggle.on('click', function() {
            navToggle.toggleClass('burger-active');

            nav.toggleClass('show');
        });
    });

$(window).scroll(function(){
    let wt = $(window).scrollTop();
    let forestText = $('.forest__inner-text');
    let vectorRot = $('.controlPos');
    let titleWhite = $('.whitepaper');
    let pointPos = $('.point');
    let forestH = forestText.offset().top;
    let vectorH = vectorRot.offset().top;
    let titleH = titleWhite.offset().top;
    let pointH = pointPos.offset().top;

    if ((wt + 500) > forestH) {
        $(".forest__inner").removeClass('none');
        $(".forest__inner").addClass("animate__animated animate__bounceIn animate__slow");
    }

    if ((wt + 300) > vectorH) {
        $(".ship").removeClass('none');
        $(".ship").addClass("animate__animated animate__fadeInLeft animate__slow");
    }

    if ((wt) > titleH) {
        $(".whitepaper__inner-left").removeClass('none');
        $(".whitepaper__inner-left").addClass("animate__animated animate__fadeInLeft");
    }

    if ((wt) > titleH) {
        $(".whitepaper__inner-right").removeClass('none');
        $(".whitepaper__inner-right").addClass("animate__animated animate__fadeInRight");
    }

    if ((wt) > pointH) {
        $(".whitepaper__under").removeClass('none');
        $(".whitepaper__under").addClass("animate__animated animate__fadeInUp");
    }
});
});