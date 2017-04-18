console.clear();
console.log('ScrollMagic v%s loaded', ScrollMagic.version);

// init
var controller = new ScrollMagic.Controller();

var obj1Height = $('.additionalContent').height();
var winHeight = $(window).height();
var offset1 = (obj1Height - winHeight) * -1;

// define movement of panels
var wipeAnimation = new TimelineMax()
    .fromTo('section.panel.turqoise', 1, {x: '-100%'}, {x: '0%', ease: Linear.easeNone})  // in from left
    .to('section.panel .additionalContent', 1, {y: offset1, ease: Linear.easeNone}) // scroll Content
    .fromTo('section.panel.green',    1, {x:  '100%'}, {x: '0%', ease: Linear.easeNone})  // in from right
    .fromTo('section.panel.bordeaux', 1, {y: '-100%'}, {y: '0%', ease: Linear.easeNone}); // in from top

// create scene to pin and link animation
new ScrollMagic.Scene({
        triggerElement: '#pinContainer',
        triggerHook: 'onLeave',
        duration: '400%'
    })
    .setPin('#pinContainer')
    .setTween(wipeAnimation)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);





$(window).resize(function () {
		var params = {css: {
			scaleX: parseFloat($('input#scaleX').val()),
			scaleY: parseFloat($('input#scaleY').val())
		}};
		// reset progress to start so changes do not occur from current position but from start
		tween.progress(0)
		// set set new tween parameters
		tween.updateTo(params, true);
		// re-add tween to reset position and to update
		scene.setTween(tween);
	});


  // //add pannel# to each  panel
  // $(".panel").each(function(i) {
  //   $(this).addClass("panel" + (i + 1));
  // });
  //
  // // how many panels
  // var numPanels = $('.panel').length;
  //
  // // Add z-index and calulate tween durations
  // var orderedPanels = [];
  // var duration = [];
  // for (var i = 0; i < numPanels; i++) {
  // 	// generate CSS for z-index of each panel, negative numbers decending
  //   orderedPanels.push(".panel" + (i + 1) + " {z-index: -" + (i + 1) + ";} ");
  //   // Calulate tween duration for each panel based on height
  //   duration.push(($(".panel" + (i+1)).height()/200));
  // }
  // // Add CSS for z-index of each panel to the head
  // $("<style id='panelZOrder' type='text/css'>" + (orderedPanels.join("")) + "</style>").appendTo("head");
  //
  //
  // // init
  // var controller = new ScrollMagic.Controller();
  //
  // // define movement of panels
  // var wipeAnimation = new TimelineLite()
  //   .fromTo("section.panel.panel1", duration[0], {
  //     y: "0",
  //     boxShadow: "0px 0px 200px 200px #000"
  //   }, {
  //     y: "-100%",
  //     boxShadow: "0px 0px 0px 0px #000",
  //     ease: Linear.easeNone
  //   })
  //   .fromTo("section.panel.panel2", duration[1], {
  //     y: "0",
  //     boxShadow: "0px 0px 200px 200px #000"
  //   }, {
  //     y: "-100%",
  //     boxShadow: "0px 0px 0px 0px #000",
  //     ease: Linear.easeNone
  //   })
  //   .fromTo("section.panel.panel3", duration[2], {
  //     y: "0",
  //     boxShadow: "0px 0px 200px 200px #000"
  //   }, {
  //     y: "-100%",
  //     boxShadow: "0px 0px 0px 0px #000",
  //     ease: Linear.easeNone
  //   })
  //   .fromTo("section.panel.panel4", duration[3], {
  //     y: "0",
  //     boxShadow: "0px 0px 200px 200px #000"
  //   }, {
  //     y: "-100%",
  //     boxShadow: "0px 0px 0px 0px #000",
  //     ease: Linear.easeNone
  //   });
  //
  //
  // // create scene to pin and link animation
  // new ScrollMagic.Scene({
  //     triggerElement: "#pinContainer",
  //     triggerHook: "onLeave",
  //     duration: "400%"
  //   })
  //   .setPin("#pinContainer")
  //   .setTween(wipeAnimation)
  //   .addIndicators() // add indicators (requires plugin)
  //   .addTo(controller);
