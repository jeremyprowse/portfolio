<?php

	//define the recipient email address as a constant
	define('RECIPIENT','prowsejeremy@gmail.com');

	//catch the $_POST vars
	$name = $_POST['name'];
	$email = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];

	//set email body and headers
	$body = $message."\n\n";
	$body.= $name."<$email>";
	$headers = "From: $name<$email>";

	//send email
	if(mail(RECIPIENT, $subject, $body, $headers)){

		echo "success";

	} else {

		echo "error";
		
	}//end if else

?>