//jQuery Custom Plugin Template

//create a private scope
(function($){

	//create jQuery function
	$.fn.contactForm = function(){
		
		//return the wrapped set and loop through the set and apply functionality to each member of the set
		return this.each(function(){

		  /* ==========================================================================
			CONTACT SELECTION
		  ========================================================================== */

		  //set variables references for all the various form elements;
		  var $contactForm = $(this),
		  $name = $contactForm.find("#name"),
		  $email = $contactForm.find("#email"),
		  $subject = $contactForm.find("#subject"),
		  $message = $contactForm.find("#message"),
		  $spam = $contactForm.find("#spam"),
		  $formFields = $contactForm.find("select, input:text, textarea"),
		  $status = $contactForm.find("#status"),
		  $submitBtn = $contactForm.find("input:submit"),
		  $resetBtn = $contactForm.find("input:reset");
		  
		  //initialise
		  $status.hide();
		  
		  /*submit handler for contact form*/
		  $contactForm.submit(function(e) { 
			  
			//prevent default form submit action
			e.preventDefault();
			
			//clear all error borders from form fields
			$formFields.removeClass("error-focus");
			
			//check required fields are not empty and that the email address is valid
			if($name.val()==""){
			  
				setStatusMessage("Please Enter Your Name");
				$name.setFocus();
			  
			}else if($email.val()==""){
			  
				setStatusMessage("Please Enter Your Email Address");
				$email.setFocus();
			  
			}else if(!isValidEmail($email.val())){
			  
				setStatusMessage("Please Enter a Correct Email Address");
				$email.setFocus();
			  
			}else if($message.val()==""){
			  
				setStatusMessage("What do you want to tell me?");
				$message.setFocus();
			  
			}else if(!$spam.val()==""){
			  
				setStatusMessage("Spam Attack!!");

			}else{
					
					//send the email
					setStatusMessage("Email being sent... please wait");
					var formData = $contactForm.serialize();
					
					$.post(sendMail, formData, function(sent){
						
						if(sent==="success"){
							
							setStatusMessage("Thanks "+$name.val()+", your message has been successfully sent");
							$formFields.val("");
						}else{
							
							setStatusMessage("Opps, something went wrong - message not sent");
						}
						
					}, "html");
				}
				
			});

			$resetBtn.hover(function(){
				
				$(this).animate({backgroundColor:'#f0f0f0',  color:'#282828'},250);
			
			}, function(){

				$(this).animate({backgroundColor:'#282828',  color:'#f0f0f0'},250);

			});

			$submitBtn.hover(function(){
				
				$(this).animate({backgroundColor:'#f0f0f0',  color:'#282828'},250);
			
			}, function(){

				$(this).animate({backgroundColor:'#282828',  color:'#f0f0f0'},250);

			});
		  
		  //click handler for reset button
		  $resetBtn.click(function(){
			  $status.slideUp("fast");
			  $formFields.removeClass("error-focus");                           
		  });
		  
		  //helper functions
		  function setStatusMessage(message){
			$status.html(message).slideDown("fast");
		  }
		  
		  $.fn.setFocus = function(){
			return this.focus().addClass("error-focus");
		  }
		  
		  function isValidEmail(email) {
			var emailRx = /^[\w\.-]+@[\w\.-]+\.\w+$/;
			return  emailRx.test(email);
		  }

			
		}); //end each()
		

	};//end $.fn.customplugin

		  
})(jQuery);