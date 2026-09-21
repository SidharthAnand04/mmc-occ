

jQuery(document).ready(function (jQuery) {
    jQuery('.mainmenu li:has(ul)').addClass('parent');
    jQuery('.mainmenu').before('<a class="menulinks"><i></i></a>');
    jQuery('a.menulinks').click(function () {
        jQuery(this).next('ul').slideToggle(250);
        jQuery('body').toggleClass('mobile-open');
        jQuery('.mainmenu li.parent ul').slideUp(250);
        jQuery('a.child-triggerm').removeClass('child-open');
        return false;
    });
    jQuery('.mainmenu li.parent > ul').before('<a class="child-triggerm"><span></span></a>');
    jQuery('.mainmenu a.child-triggerm').click(function () {
        jQuery(this).parent().siblings('li').find('a.child-triggerm').removeClass('child-open');
        jQuery(this).parent().siblings('li').find('ul').slideUp(250);
        jQuery(this).next('ul').slideToggle(250);
        jQuery(this).toggleClass('child-open');
        return false;
    });

    jQuery('.head-btn-col > a:first-of-type').click(function () {
        jQuery('.head-btn--menu').toggleClass('open');
    });
    if (jQuery(document).find('.main-slider .slider-col').length > 1) {
        jQuery('.main-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            dots: true,
            autoplaySpeed: 2000,
            infinite: true
        });
    }

    jQuery('.slider .slider-wrap-col').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        autoplaySpeed: 8000,
        infinite: true,
        centerPadding: '25px',

        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });

    if (jQuery(document).find('.review-slider .review-slides').length > 1) {
        jQuery('.content-review').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            dots: true,
            autoplaySpeed: 8000,
            infinite: false
        });
    }

    equalheight('.service-slider-sec .bottom-content');
    equalheight('.testimonial-info-sec .content > h6');
    equalheight('.health-blog-sec .bottom-content h6');

    jQuery(window).load(function () {
        jQuery('body').addClass('animate-image');
    });

    StickyHeader();

});

jQuery(window).resize(function(event) {
    equalheight('.medical-provider-sec .bottom-content');
});

equalheight = function (container) {
    var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;
    jQuery(container).each(function () {
        $el = jQuery(this);
        jQuery($el).height('auto')
        topPostion = $el.position().top;
        if (currentRowStart != topPostion) {
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

function StickyHeader() {
    var headerHeight = jQuery('.head-wrapper').innerHeight();
    jQuery('body').css("padding-top", headerHeight);
}