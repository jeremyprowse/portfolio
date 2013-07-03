/* ==========================================================================
   Preloader
   ========================================================================== */

   $('body').jpreLoader();


/* ==========================================================================
   Mobile/Touchscreen Options
   ========================================================================== */

if( /Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent) ) {
  $('.map-dissable').show();
  $('.launch-mobile').show();
  $('.website').css({'margin-bottom':100});
};


/* ==========================================================================
   Map Styles
   ========================================================================== */

var map;
var auckland = new google.maps.LatLng(-36.847316,174.765895);

var MY_MAPTYPE_ID = 'custom_style';

function initialize() {

  var featureOpts = [
    {
      stylers: [
        { saturation: -100 },
        { weight: 0.5 }
      ]
    }
  ];

  var mapOptions = {
    zoom: 16,
    center: auckland,
    scrollwheel: false,
    dragable: false,
    disableDefaultUI: true,
    mapTypeId: MY_MAPTYPE_ID
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var styledMapOptions = {
    name: 'Custom Style'
  };

  var marker = new google.maps.Marker({
      position: auckland, 
      map: map,
      icon: 'img/marker.png',
      shadow: {
        url: 'img/marker-shadow.png',
        anchor: new google.maps.Point(0, 22)
      }
  });

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

}

google.maps.event.addDomListener(window, 'load', initialize);



/* ==========================================================================
  Flip Plugin & Top Scroll
   ========================================================================== */

$('.flip').imageFlip();

$('.flip-li').imageFlip();

$('.flip-cv').imageFlip();


$(".flip").click(function() {

	$('body,html').animate({scrollTop: 0}, 800, 'easeInOutExpo');

	return false;

});


/* ==========================================================================
   Apply Gallery Plugin
   ========================================================================== */

$('.work').gallery();


/* ==========================================================================
   Apply Gallery Plugin
   ========================================================================== */

$('form').contactForm();


/* ==========================================================================
   Launch Show Hide
   ========================================================================== */

$('.launch').hide();

var fadeSpeed = 250;

$('.mask, .launch').hover(function(){

  $('.screenshot').stop().fadeTo(fadeSpeed, 0.5);

  $('.launch').stop().fadeIn(fadeSpeed);

}, function(){

  $('.screenshot').stop().fadeTo(fadeSpeed, 1);

  $('.launch').stop().fadeOut(fadeSpeed);

});


/* ==========================================================================
   Skills Animate
   ========================================================================== */

$('.nine').css({width:0});
$('.eight').css({width:0});
$('.seven').css({width:0});

$.fn.isOnScreen = function(){
     
  var win = $(window);
   
  var viewport = win.scrollTop();
  viewportBottom = viewport + win.height();
   
  var element = $(this).offset();
  elementBottom = element.top + $(this).outerHeight();
   
  return (!(viewportBottom < element.top || viewport > elementBottom));
     
};

$(window).scroll(function(){

  if($('.skill').isOnScreen()){

    setTimeout(function(){

      $('.nine').animate({width:'90%'}, 800, 'easeInOutExpo');
      $('.eight').animate({width:'80%'}, 800, 'easeInOutExpo');
      $('.seven').animate({width:'70%'}, 800, 'easeInOutExpo');

    }, 400);

  };

});