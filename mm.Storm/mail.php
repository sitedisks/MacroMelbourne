<?php
if(isset($_POST['email'])){
		$mailTo = "peter@sitedisks.com.au";
		$subject = "Enquiry from Marco Sky";
		$body = "New message from Marco Sky Website<br><br>
              FROM: ".$_POST['email']."<br>
              NAME: ".$_POST['name']."<br>
              PHONE: ".$_POST['contact']"<br>
              COMMENTS: ".$_POST['message']."<br>";	
              
              
		$headers = "To: Solido <".$mailTo.">\r\n";
		$headers .= "From: ".$_POST['author']." <".$_POST['email'].">\r\n";
		$headers .= "Content-Type: text/html";
    
		//envio destinatario
		$mail_success =  mail($mailTo, utf8_decode($subject), utf8_decode($body), $headers);		
}
?>  