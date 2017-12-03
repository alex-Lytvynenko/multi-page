(function () {
    $('.carousel').carousel({
        interval: false
    });

    $('.owl-carousel-one').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            }
        }
    });
    $('.owl-carousel-two').owlCarousel({
        loop:true,
        margin:10,
        responsive:{
           0:{
               items:1
           }
       }
    });

    $('#owl-carousel-three').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        nav: true,
        responsive:{
            0:{
                items:1
            }
        }
    });
    $('#owl-carousel-portfolio').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        nav: true,
        navText: ["<",">"],
        responsive:{
            0:{
                items:1
            }
        }
    });


})();
