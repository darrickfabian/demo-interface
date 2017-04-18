console.clear();

$(function() {

//close dropdown on click
$('a.navLink').click(function() {
   $('#navbar-hamburger-menu').dropdown('toggle');
});
//match elements heights
$(function() {
    $('.grid-center').matchHeight({byRow: false});
});
//match elements heights
$(function() {
    $('.grid-center2').matchHeight({byRow: false});
});
//add peekaboo sidenav
// $('._9').on('animationend', function() {
//  $('.sidenav').addClass('peekaboo');
//  setTimeout(function() {
//    $('.sidenav').removeClass('peekaboo');
//  }, 3000);
// });
//add top border to accordion/glossary
$('.panel-default').each(function(){
		$(this).on('shown.bs.collapse', function(){
      $(this).find('.panel-heading').addClass('addBorder');
		});
    $(this).on('hidden.bs.collapse', function(){
      $(this).find('.panel-heading').removeClass('addBorder');
    });
})

//add animations to site greater than 767
if ($(window).width() >= 768) {
  setTimeout(function() {

  // init ScrollMagic Controller
  var controller = new ScrollMagic.Controller();

  //set first text block animation - about
  var ani1 = TweenMax.staggerFromTo('.ani1', 8, {top: 70, opacity: 0}, {top: 0, opacity: 1, ease: Back.easeOut}, 0.55);

  // build scene
  var animationBlock1 = new ScrollMagic.Scene({
    triggerElement: '.ani-block-1',
    duration: 600,
    triggerHook: .5,
    offset: -220
    })
  	.setTween(ani1)
  	;

  //set second text block animation - vision
  var ani2 = TweenMax.staggerFromTo('.ani2', 8, {top: 70, opacity: 0}, {top: 0, opacity: 1, ease: Back.easeOut}, 0.55);

  // build scene
  var animationBlock2 = new ScrollMagic.Scene({
    triggerElement: '.ani-block-2',
    duration: 600,
    triggerHook: .5,
    offset: -220
    })
    .setTween(ani2)
    ;

  //set third text block animation - values
  var ani3 = TweenMax.staggerFromTo('.ani3', 8, {top: 70, opacity: 0}, {top: 0, opacity: 1, ease: Back.easeOut}, 0.55);

  // build scene
  var animationBlock3 = new ScrollMagic.Scene({
    triggerElement: '.ani-block-3',
    duration: 600,
    triggerHook: .5,
    offset: -220
    })
    .setTween(ani3)
    ;

  //set fourth text block animation - values
  var ani4 = TweenMax.staggerFromTo('.ani4', 8, {top: 70, opacity: 0}, {top: 0, opacity: 1, ease: Back.easeOut}, 0.55);

  // build scene
  var animationBlock4 = new ScrollMagic.Scene({
    triggerElement: '.ani-block-4',
    duration: 600,
    triggerHook: .5,
    offset: -220
    })
    .setTween(ani4)
    ;

  //set fourth text block animation - values
  var ani5 = TweenMax.staggerFromTo('.ani5', 8, {top: 70, opacity: 0}, {top: 0, opacity: 1, ease: Back.easeOut}, 0.55);

  // build scene
  var animationBlock5 = new ScrollMagic.Scene({
    triggerElement: '.ani-block-5',
    duration: 600,
    triggerHook: .5,
    offset: -220
    })
    .setTween(ani5)
    ;

  //set first image block animation
  var aniImg = TweenMax.staggerFromTo('.aniImg', 8, {scale: 1.06}, {scale: 1.01, ease: Back.easeOut}, 0.55);

  // build scene
  var animationImg1 = new ScrollMagic.Scene({
    triggerElement: '.ani-img-wrap',
    duration: 700,
    triggerHook: .5,
    offset: 10
    })
  	.setTween(aniImg)
  	;

  //set second image block animation
  var aniImg2 = TweenMax.staggerFromTo('.aniImg2', 8, {scale: 1.06}, {scale: 1.01, ease: Back.easeOut}, 0.55);

  // build scene
  var animationImg2 = new ScrollMagic.Scene({
    triggerElement: '.ani-img-wrap2',
    duration: 700,
    triggerHook: .5,
    offset: 10
    })
    .setTween(aniImg2)
    ;

  //set third image block animation
  var aniImg3 = TweenMax.staggerFromTo('.aniImg3', 8, {scale: 1.06}, {scale: 1.01, ease: Back.easeOut}, 0.55);

  // build scene
  var animationImg3 = new ScrollMagic.Scene({
    triggerElement: '.ani-img-wrap3',
    duration: 700,
    triggerHook: .5,
    offset: 10
    })
    .setTween(aniImg3)
    ;

  //set fourth image block animation
  var aniImg4 = TweenMax.staggerFromTo('.aniImg4', 8, {scale: 1.06}, {scale: 1.01, ease: Back.easeOut}, 0.55);

  // build scene
  var animationImg4 = new ScrollMagic.Scene({
    triggerElement: '.ani-img-wrap4',
    duration: 700,
    triggerHook: .5,
    offset: 10
    })
    .setTween(aniImg4)
    ;

  //set fifth image block animation
  var aniImg5 = TweenMax.staggerFromTo('.aniImg5', 8, {scale: 1.06}, {scale: 1.01, ease: Back.easeOut}, 0.55);

  // build scene
  var animationImg5 = new ScrollMagic.Scene({
    triggerElement: '.ani-img-wrap5',
    duration: 700,
    triggerHook: .5,
    offset: 10
    })
    .setTween(aniImg5)
    ;

  //set ribbon 1 text animation
  var ribAni1 = TweenMax.staggerFromTo('.ribAni1', 8, {top: 70, opacity: 0}, {top: 0, opacity: 1, ease: Back.easeOut}, 0.55);

  // build scene
  var ribbonAnimation1 = new ScrollMagic.Scene({
    triggerElement: '.ribbon1',
    duration: 400,
    triggerHook: 'onEnter',
    offset: 250
    })
  	.setTween(ribAni1)
  	;


  //set ribbon 2 text animation
  var ribAni2 = TweenMax.staggerFromTo('.ribAni2', 8, {top: 70, opacity: 0}, {top: 0, opacity: 1, ease: Back.easeOut}, 0.55);

  // build scene
  var ribbonAnimation2 = new ScrollMagic.Scene({
    triggerElement: '.ribbon2',
    duration: 400,
    triggerHook: 'onEnter',
    offset: 250
    })
  	.setTween(ribAni2)
  	;

  //set ribbon 3 text animation
  var ribAni3 = TweenMax.staggerFromTo('.ribAni3', 8, {top: 70, opacity: 0}, {top: 0, opacity: 1, ease: Back.easeOut}, 0.55);

  // build scene
  var ribbonAnimation3 = new ScrollMagic.Scene({
    triggerElement: '.ribbon3',
    duration: 400,
    triggerHook: 'onEnter',
    offset: 250
    })
    .setTween(ribAni3)
    ;

  //set ribbon 4 text animation
  var ribAni4 = TweenMax.staggerFromTo('.ribAni4', 8, {top: 70, opacity: 0}, {top: 0, opacity: 1, ease: Back.easeOut}, 0.55);

  // build scene
  var ribbonAnimation4 = new ScrollMagic.Scene({
    triggerElement: '.ribbon4',
    duration: 400,
    triggerHook: 'onEnter',
    offset: 250
    })
    .setTween(ribAni4)
    ;

    //set ribbon 5 text animation
    var ribAni5 = TweenMax.staggerFromTo('.ribAni5', 8, {top: 70, opacity: 0}, {top: 0, opacity: 1, ease: Back.easeOut}, 0.55);

    // build scene
    var ribbonAnimation5 = new ScrollMagic.Scene({
      triggerElement: '.ribbon5',
      duration: 400,
      triggerHook: 'onEnter',
      offset: 250
      })
      .setTween(ribAni5)
      ;

    //calculate element heights to add active class to side navigation
    var high1 = $('#t2').height();
    var high2 = $('#t3').height();
    var high3 = $('#t4').height();
    var high4 = $('#t5').height();
    var high5 = $('#t6').height();

    var rel1 = $('#contentwrapper').height() - $('footer').height();
    var rel2 = $('#t1').height();

    var revealIt = rel1 - rel2;
    var rTest = Math.floor(revealIt);


    //reveal navigation when about section is reached
    var revealNav = new ScrollMagic.Scene({
      triggerElement: '#t2',
      duration: rTest
    })
    .setClassToggle('#navigation', 'active')
    ;

    //highlight sidenav items
    var h1 = new ScrollMagic.Scene({
      triggerElement: '#t2',
      duration: high1
    })
    .setClassToggle('.about', 'active')
    ;

    var h2 = new ScrollMagic.Scene({
      triggerElement: '#t3',
      duration: high2
    })
    .setClassToggle('.vision', 'active')
    ;

    var h3 = new ScrollMagic.Scene({
      triggerElement: '#t4',
      duration: high3
    })
    .setClassToggle('.values', 'active')
    ;

    var h4 = new ScrollMagic.Scene({
      triggerElement: '#t5',
      duration: high4
    })
    .setClassToggle('.strategies', 'active')
    ;

    var h5 = new ScrollMagic.Scene({
      triggerElement: '#t6',
      duration: high5
    })
    .setClassToggle('.resources', 'active')
    ;

    //add ribbon staggering animations
    var rib1 = new ScrollMagic.Scene({
      triggerElement: '.ribbon-container1',
      triggerHook: 'onEnter',
      offset: 90
    })
    .setClassToggle('.ribbon1', 'isActive')
    ;

    var rib2 = new ScrollMagic.Scene({
      triggerElement: '.ribbon-container2',
      triggerHook: 'onEnter',
      offset: 90
    })
    .setClassToggle('.ribbon2', 'isActive')
    ;

    var rib3 = new ScrollMagic.Scene({
      triggerElement: '.ribbon-container3',
      triggerHook: 'onEnter',
      offset: 90
    })
    .setClassToggle('.ribbon3', 'isActive')
    ;

    var rib4 = new ScrollMagic.Scene({
      triggerElement: '.ribbon-container4',
      triggerHook: 'onEnter',
      offset: 90
    })
    .setClassToggle('.ribbon4', 'isActive')
    ;

    var rib5 = new ScrollMagic.Scene({
      triggerElement: '.ribbon-container5',
      triggerHook: 'onEnter',
      offset: 90
    })
    .setClassToggle('.ribbon5', 'isActive')
    ;


    //add value section grid item fade-in
    var items = document.querySelectorAll('.value-sum .value-item');

    // get vendor transition property
    var docElemStyle = document.documentElement.style;
    var transitionProp = typeof docElemStyle.transition == 'string' ?
        'transition' : 'WebkitTransition';


    function callback1 (event) {
      for ( var i=0; i < items.length; i++ ) {
        var item = items[i];
        // stagger transition with transitionDelay
        item.style[ transitionProp + 'Delay' ] = ( i * 130 ) + 'ms';
        item.classList.toggle('isActive');
      }
    }

    var gridCall = new ScrollMagic.Scene({
      triggerElement: '.value-sum',
      offset: -225
    })
    ;
    gridCall.on('start', callback1);


    // define a new scroll position modification function (jQuery animate instead of jump)
    controller.scrollTo(function (newScrollPos) {
        $('html, body').animate({scrollTop: newScrollPos});
    });

    // Add Scenes to ScrollMagic Controller
    controller.addScene([
      revealNav,
      h1,
      h2,
      h3,
      h4,
      h5,
      animationBlock1,
      animationBlock2,
      animationBlock3,
      animationBlock4,
      animationBlock5,
      animationImg1,
      animationImg2,
      animationImg3,
      animationImg4,
      animationImg5,
      gridCall,
      rib1,
      rib2,
      rib3,
      rib4,
      rib5,
      ribbonAnimation1,
      ribbonAnimation2,
      ribbonAnimation3,
      ribbonAnimation4,
      ribbonAnimation5
    ]);

  }, 750);

}

  //modal carousel controll
  $('.strategies-modal-trigger').click(function(){
    $('#strategiesCarousel').carousel(parseInt($(this).attr('data-slide-to')));
  });

  $('#strategiesCarousel').on('slide.bs.carousel', function () {
    $('#strategiesModal').animate({ scrollTop: 0 }, 'fast');
  })


  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if($(this).attr('disable-scrolltop')) {
        return;
      }
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          window.history.replaceState( {} , '', '/' + $(this).attr('href'));
          return false;
        }
      }
    });
  });
});
