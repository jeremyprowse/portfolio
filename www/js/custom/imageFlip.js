//jQuery Custom Plugin Template

//create a private scope
(function($){

	//create jQuery function
	$.fn.imageFlip = function(){
		
		//return the wrapped set and loop through the set and apply functionality to each member of the set
		return this.each(function(){

			var $container = $(this);
			var $first = $(this).find('.first');
			var $second = $(this).find('.second');

			var margin = $first.height()/2;
			var height = $first.height();
			var flipSpeed = 250;

			$container.hover(function(){

			    $first.stop().animate({height: 0, marginTop: margin},flipSpeed, 'easeInOutExpo', function(){

			    	$second.stop().animate({height: height, marginTop: 0},flipSpeed, 'easeInOutExpo');

			    });

			}, function(){

			    $second.stop().animate({height: 0, marginTop: margin},flipSpeed, 'easeInOutExpo', function(){

			    	$first.stop().animate({height: height, marginTop: 0},flipSpeed, 'easeInOutExpo');

			    });

			});
			
		}); //end each()
		

	};//end $.fn.customplugin

		  
})(jQuery);