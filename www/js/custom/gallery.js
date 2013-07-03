//jQuery Custom Plugin Template

//create a private scope
(function($){

	//create jQuery function
	$.fn.gallery = function(){
		
		//return the wrapped set and loop through the set and apply functionality to each member of the set
		return this.each(function(){

			//Declare variables
			var dissolveSpeed = 800;
			var currentIndex = 0;
			var $project = $(".project");
			var $nextBtn = $(".next-btn");
			var $prevBtn = $(".prev-btn");
			var numProjects = $project.length;
				

			//Initialisation
			
			//initialise projects - stack on top of each other, hide them all and fade in the 1st project
			$project.parent().css({"position":"relative"});
			$project.hide().eq(currentIndex).fadeIn(dissolveSpeed);

			
			//Next and Previous Btns
			 
			$nextBtn.click(function(){
				
				if(currentIndex<numProjects-1){
					changeProject(currentIndex+1);
				}else{
					changeProject(0);
				}
			 
			});
				
			$prevBtn.click(function(){
				
				//update the current index
				if(currentIndex>0){
					changeProject(currentIndex-1);
				}else{
					changeProject(numProjects-1);
				}
			
			});

			$nextBtn.hover(function(){
				
				$nextBtn.animate({backgroundColor:'#f0f0f0', color:'#282828'},250);
			 
			}, function(){

				$nextBtn.animate({backgroundColor:'#282828',  color:'#f0f0f0'},250);

			});
				
			$prevBtn.hover(function(){
				
				$(this).animate({backgroundColor:'#f0f0f0',  color:'#282828'},250);
			
			}, function(){

				$(this).animate({backgroundColor:'#282828',  color:'#f0f0f0'},250);

			});
			
			//Change project Function
			
			function changeProject(newIndex){
				
				//fade out previous selected project
				$project.eq(currentIndex).stop().fadeOut(dissolveSpeed, function(){

					//update the current index to the index of the clicked on thumb
					currentIndex = newIndex;
						
					//fade in the selected project and add selected class to thumb

					$project.eq(currentIndex).stop().fadeIn(dissolveSpeed);

				});
				
			}
			
		}); //end each()
		

	};//end $.fn.customplugin

		  
})(jQuery);