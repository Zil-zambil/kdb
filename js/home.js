$(document ).ready(function() {

    // owl-carousel with item 3
    $('.owl-item-3').owlCarousel({
        loop:true,
        margin:15,
        responsive:{
            0:{
                items:1
            },
            678:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    // owl-carousel with item 1
    $('.owl-item-1').owlCarousel({
        loop:true,
        margin:0,
        dots:false,
        animateOut: 'fadeOut',
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        items:1,
        smartSpeed:1050
    })

    var owlButton = $('.owl-carousel');
    owlButton.owlCarousel();

    // Go to the next item
    $('.mainNextBtn').click(function() {
        owlButton.trigger('next.owl.carousel');
    })

    // Go to the previous item
    $('.mainPrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owlButton.trigger('prev.owl.carousel', [300]);
    })

    var a = 0;
    $(window).scroll(function() {
        var oTop = $('.counters').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                        countNum: countTo
                    },

                    {

                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                            //alert('finished');
                        }

                    });
            });
            a = 1;
        }
    });

});

    
 