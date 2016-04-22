<?php
if(isset($_POST['email'])){

	  $mailToPeter = "peter@sitedisks.com.au";
		$mailToElsa = "Elsa.lin@goldensunrise.com.au";
		$mailToKristine = "kristine@dynamicresidential.com.au";
    $mailTo = "peter@sitedisks.com.au,Elsa.lin@goldensunrise.com.au,kristine@dynamicresidential.com.au";
    
		$subject = "Enquiry from Marco Sky";
		$body = "<small>New message from <h2>Marco Sky</h2></small><br><hr> <b><i><br/>From:</i></b> ".$_POST['email'].
        "<br><b><i>Name:</i></b> ".$_POST['name']."<br><b><i>Contact:</i></b> ".$_POST['contact']."<br><br><h3>Message:</h3>".$_POST['message']."<br>";	
              
              
		$headers = "To: <".$mailTo.">\r\n";
		$headers .= "From: ".$_POST['author']." <".$_POST['email'].">\r\n";
		$headers .= "Content-Type: text/html";
    
		//envio destinatario
    $mail_success =  mail($mailTo, utf8_decode($subject), utf8_decode($body), $headers);	
}
?>
