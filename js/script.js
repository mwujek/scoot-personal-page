/*jshint devel:true */



// on load
$(window).load(function() {
});

// on ready
$(document).ready(function() {
	var svg = $('.svg-container svg')
	var path = svg.find('.st1');
	TweenLite.to( path, 2, {
        // onStart: function(){
        //   TweenLite.to( dot, 0.3 ,{opacity:0});
        // },
        //onComplete: animateSection(expandSection, expandBtn, expandHeight , 'open'),
        ease: Back.easeInOut.config(1.5),
        drawSVG:'100%',
        //y: -1
      });

	$('.start').click(function(e) {
		e.preventDefault()
		console.log('asd');
		TweenLite.to( path, 1, {
        // onStart: function(){
        //   TweenLite.to( dot, 0.3 ,{opacity:0});
        // },
        //onComplete: animateSection(expandSection, expandBtn, expandHeight , 'open'),
        ease: Back.easeInOut.config(1.5),
        drawSVG:'0%',
        //y: -1
      });
	});


}); // end of ready

$(window).resize(function() {
  //setIntroType();
  }); // end of resize
