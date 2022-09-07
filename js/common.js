//main navigation

jQuery(document).ready(function($){


// Navbar
$( "<span class='clickD'></span>" ).insertAfter(".navbar-nav li.menu-item-has-children > a");
 $('.navbar-nav li .clickD').click(function(e) {
    e.preventDefault();
    var $this = $(this);
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.removeClass('toggled');
    } else {
        $this.parent().parent().find('.sub-menu').removeClass('show');
        $this.parent().parent().find('.toggled').removeClass('toggled');
        $this.next().toggleClass('show');
        $this.toggleClass('toggled');
    }
});

$(window).on('resize', function(){
    var win = $(this); //this = window
    if (win.width() < 1025) {
        $('html').click(function(){
            $('.navbar-nav li .clickD').removeClass('toggled');
            $('.toggled').removeClass('toggled');
            $('.sub-menu').removeClass('show');
        });
        $(document).click(function(){
            $('.navbar-nav li .clickD').removeClass('toggled');
            $('.toggled').removeClass('toggled');
            $('.sub-menu').removeClass('show');
        });
        $('.navbar-nav').click(function(e){
        e.stopPropagation();
        });
     }
});

/* ===== For menu animation === */
$(".navbar-toggler").click(function(){
    $(".navbar-toggler").toggleClass("open");
    $(".navbar-toggler .stick").toggleClass("open");
    $('body,html').toggleClass("open-nav");
});


// Navbar end


if ($(".wow").length) {
  // wow animation
  var wow = new WOW(
    {
      boxClass: 'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 0,          // distance to the element when triggering the animation (default is 0)
      mobile: true,       // trigger animations on mobile devices (default is true)
      live: true,       // act on asynchronously loaded content (default is true)
      callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();
}
if ($(".splitAnim").length) {
    inView('.splitAnim')
        .on('enter', function(el) {
            if (el.classList.contains("splitAnim") && !el.classList.contains("active")) {
                var tl = gsap.timeline(),
                    mySplitText = new SplitText(el, { type: "words,chars" }),
                    chars = mySplitText.chars; //an array of all the divs that wrap each character
                gsap.set(el, { perspective: 400 });
                tl.from(chars, { duration: 0.45, opacity: 0, y: 50, transformOrigin: "50% 50%", ease: "back", stagger: 0.07 }, "+=0");
            }
            if (el.classList.contains("splitAnim")) {
                el.classList.add("active");
            }
        })
}


// one page scroll menu link
$('.navbar-nav > li > a[href*="#"], .scroll-text').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");
    $('.navbar-nav > li > a').each(function () {
        $(this).parent('li').removeClass('current-menu-item');
    });
    $(this).parent('li').addClass('current-menu-item');
    var target = this.hash, $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - $(".page-header").outerHeight()
    }, 500, 'swing', function () {
        window.location.href.substr(0, window.location.href.indexOf('#'));
        $(document).on("scroll", onScroll);
    });
});
 $(document).on("scroll", onScroll);
function onScroll(event){
    var scrollPos = $(document).scrollTop() + 160;
    $('.navbar-nav > li > a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navbar-nav > li').removeClass("current-menu-item");
            currLink.parent('li').addClass("current-menu-item");
        }
        else{
            currLink.parent('li').removeClass("current-menu-item");
        }
    });
}


// back to top btn open
// ===== Scroll to Top ==== 
// jQuery(window).scroll(function(){
//     if (jQuery(this).scrollTop() >= 400) {     
//         jQuery('#return-to-top').fadeIn(200);   
//     } else {
//         jQuery('#return-to-top').fadeOut(200);  
//     }
// });
// jQuery('#return-to-top').click(function() {     
//     jQuery('body,html').animate({
//         scrollTop : 0           
//     }, 500);
// });
// back to top btn end


$(window).scroll(function() {
    if ($('.page-header').length){

          if ($(window).scrollTop() > 0) {
              $(".page-header").addClass('affix');
          } else {
              $(".page-header").removeClass('affix');
          }
    }
});

$('.js-artist-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    mobileFirst: true,
    responsive: [
        {
          breakpoint: 767,
          settings: {
            dots: true,
            arrows: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3000,
            adaptiveHeight: true,
          }
        }
      ]
  });

$('.js-accordion-content').hide();
$('.js-accordion:first-child').addClass('open');
$('.js-accordion:first-child .js-accordion-content').show();
$(".js-accordion-toggle").on('click', function() {
  $(this).parent().toggleClass('open');
  $(this).next().slideToggle();
  $('.js-accordion').not($(this).parent()).removeClass('open');
  $('.js-accordion-content').not($(this).next()).slideUp();
});

});



// jQuery(document).ready(function($) {
//     function scrollToSection(event) {
//       event.preventDefault();
//       var $section = $($(this).attr('href')); 
//       $('html, body').animate({
//         scrollTop: $section.offset().top
//       }, 100);
//     }
//     $('[data-scroll]').on('click', scrollToSection);
//   }(jQuery));