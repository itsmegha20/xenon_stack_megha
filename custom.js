(function ($) {
    'use strict'; $('.mean-menu').meanmenu({ meanScreenWidth: "991" }); $(window).on('scroll', function () {
        if ($(this).scrollTop() > 150) { $('.navbar-area').addClass("is-sticky"); }
        else { $('.navbar-area').removeClass("is-sticky"); }; var scrolled = $(window).scrollTop(); if (scrolled > 300) $('.go-top').addClass('active'); if (scrolled < 300) $('.go-top').removeClass('active');
    }); $('.category-slide').owlCarousel({ items: 1, loop: true, margin: 30, nav: true, dots: false, autoplay: true, smartSpeed: 1000, autoplayHoverPause: true, navText: ["<i class='ri-arrow-left-line'></i>", "<i class='ri-arrow-right-line'></i>",], responsive: { 0: { items: 1, }, 414: { items: 1, }, 576: { items: 2, }, 768: { items: 2, }, 992: { items: 3, }, 1200: { items: 3, }, }, }); $('.courses-slide').owlCarousel({ items: 1, loop: true, margin: 30, nav: true, dots: false, autoplay: true, smartSpeed: 1000, autoplayHoverPause: true, navText: ["<i class='ri-arrow-left-line'></i>", "<i class='ri-arrow-right-line'></i>",], responsive: { 0: { items: 1, }, 414: { items: 1, }, 576: { items: 1, }, 768: { items: 2, }, 992: { items: 2, }, 1200: { items: 3, }, }, }); $('.testimonials-slide').owlCarousel({ items: 1, loop: true, margin: 30, nav: true, dots: false, autoplay: false, smartSpeed: 1000, autoplayHoverPause: true, navText: ["<i class='ri-arrow-left-line'></i>", "<i class='ri-arrow-right-line'></i>",], responsive: { 0: { items: 1, }, 414: { items: 1, }, 576: { items: 1, }, 768: { items: 2, }, 992: { items: 3, center: true, }, 1200: { items: 3, center: true, }, }, }); $('.testimonials-slide-two').owlCarousel({ items: 1, loop: true, margin: 30, nav: true, dots: false, autoplay: false, smartSpeed: 1000, autoplayHoverPause: true, navText: ["<i class='ri-arrow-left-line'></i>", "<i class='ri-arrow-right-line'></i>",], responsive: { 0: { items: 1, }, 414: { items: 1, }, 576: { items: 1, }, 768: { items: 2, }, 992: { items: 1, }, 1200: { items: 1, }, }, }); $('.testimonials-slide-three').owlCarousel({ items: 1, loop: true, margin: 30, nav: false, dots: false, autoplay: false, smartSpeed: 1000, autoplayHoverPause: true, responsive: { 0: { items: 1, }, 414: { items: 1, }, 576: { items: 1, }, 768: { items: 2, }, 992: { items: 2, }, 1200: { items: 2, }, }, }); $('.blog-slide').owlCarousel({ items: 1, loop: true, margin: 30, nav: true, dots: false, autoplay: true, smartSpeed: 1000, autoplayHoverPause: true, navText: ["<i class='ri-arrow-left-line'></i>", "<i class='ri-arrow-right-line'></i>",], responsive: { 0: { items: 1, }, 414: { items: 1, }, 576: { items: 1, }, 768: { items: 2, }, 992: { items: 2, }, 1200: { items: 3, }, }, }); $('.partner-slide').owlCarousel({ items: 1, loop: true, margin: 24, nav: false, dots: false, autoplay: true, smartSpeed: 1000, autoplayHoverPause: true, center: true, responsive: { 0: { items: 1, }, 414: { items: 1, }, 576: { items: 2, }, 768: { items: 3, }, 992: { items: 3, }, 1200: { items: 3, }, }, }); $('.ba-slider').beforeAfter(); $('.go-top').on('click', function () { $("html, body").animate({ scrollTop: "0" }, 50); }); function makeTimer() {
        var endTime = new Date("november  30, 2022 17:00:00 PDT"); var endTime = (Date.parse(endTime)) / 1000; var now = new Date(); var now = (Date.parse(now) / 1000); var timeLeft = endTime - now; var days = Math.floor(timeLeft / 86400); var hours = Math.floor((timeLeft - (days * 86400)) / 3600); var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60); var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60))); if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        $("#days").html(days + "<span>Days</span>"); $("#hours").html(hours + "<span>Hours</span>"); $("#minutes").html(minutes + "<span>Minutes</span>"); $("#seconds").html(seconds + "<span>Seconds</span>");
    }




    setInterval(function () { makeTimer(); }, 300); $(window).on('load', function () { $('.preloader').addClass('preloader-deactivate'); })
    $('.popup-youtube, .popup-vimeo').magnificPopup({ disableOn: 300, type: 'iframe', mainClass: 'mfp-fade', removalDelay: 160, preloader: false, fixedContentPos: false, });

    function callbackFunction(resp) {
        if (resp.result === "success") {
            formSuccessSub();
        }
        else {
            formErrorSub();
        }
    }
    
    
    
    $('.accordion').find('.accordion-title').on('click', function () {
        $(this).toggleClass('active'); $(this).next().slideToggle('fast');
        $('.accordion-content').not($(this).next()).slideUp('fast');
        $('.accordion-title').not($(this)).removeClass('active');
    });
    $('.banner-area, .why-choose-us-area, .our-review-area, .subscribe-area, .quality-area, .page-title-area').mousemove(function (e) { var wx = $(window).width(); var wy = $(window).height(); var x = e.pageX - this.offsetLeft; var y = e.pageY - this.offsetTop; var newx = x - wx / 2; var newy = y - wy / 2; $('.shape').each(function () { var speed = $(this).attr('data-speed'); if ($(this).attr('data-revert')) speed *= -.4; TweenMax.to($(this), 1, { x: (1 - newx * speed), y: (1 - newy * speed) }); }); }); AOS.init(); $(".others-option-for-responsive .dot-menu").on("click", function () { $(".others-option-for-responsive .container .container").toggleClass("active"); }); $('.input-counter').each(function () {
        var spinner = jQuery(this), input = spinner.find('input[type="text"]'), btnUp = spinner.find('.plus-btn'), btnDown = spinner.find('.minus-btn'), min = input.attr('min'), max = input.attr('max'); btnUp.on('click', function () {
            var oldValue = parseFloat(input.val()); if (oldValue >= max) { var newVal = oldValue; } else { var newVal = oldValue + 1; }

            spinner.find("input").val(newVal); spinner.find("input").trigger("change");
        });
        btnDown.on('click', function () {
            var oldValue = parseFloat(input.val()); if (oldValue <= min) { var newVal = oldValue; } else { var newVal = oldValue - 1; }
            spinner.find("input").val(newVal); spinner.find("input").trigger("change");
        });
    }); 
    $('body').append("<div class='switch-box'><label id='switch' class='switch'><input type='checkbox' onchange='toggleTheme()' id='slider'><span class='slider round'></span></label></div>");
})(jQuery); 

function setTheme(themeName) { localStorage.setItem('jufa_theme', themeName); document.documentElement.className = themeName; }
function toggleTheme() { if (localStorage.getItem('jufa_theme') === 'theme-dark') { setTheme('theme-light'); } else { setTheme('theme-dark'); } }
(function () { if (localStorage.getItem('jufa_theme') === 'theme-dark') { setTheme('theme-dark'); document.getElementById('slider').checked = false; } else { setTheme('theme-light'); document.getElementById('slider').checked = true; } })();