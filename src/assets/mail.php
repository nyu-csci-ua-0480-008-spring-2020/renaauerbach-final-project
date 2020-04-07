<!DOCTYPE HTML>
<html>
<head>
	<title>Message Sent | Team Caleb</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="shortcut icon" type="image/x-icon" href="../images/favicon.ico" />
	<link rel="stylesheet" href="css/style.css" />
	<link href="https://fonts.googleapis.com/css?family=Cambay:400,700|Cantarell:400,700|Hind:300,400,500,600,700|Khula:300,400,600,700,800|Lato|Mallanna|Quattrocento+Sans:400,700|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i|Ubuntu:300,300i,400,400i,500,500i,700,700i" rel="stylesheet">
</head>

<body>
	<!-- Header -->
	<header id="header" class="alt">
		<div class="logo">
			<img src="../images/icon.png"></img>
			<p class="memorium">In Memory of Caleb Penn Maeir</p>
		</div>
		<a href="#menu">Menu</a>
	</header>
	<!-- Nav -->
	<nav id="menu">
		<ul class="links">
			<li><a href="../index.html">Home</a></li>
			<li><a href="../events.html">Events</a></li>
<!-- 
			<li><a href="donate.html">Donate</a></li>
 -->
			<li><a href="../contact.html" class="selected">Contact Us</a></li>
		</ul>
	</nav>
	<!-- Main -->
	<div id="main">
	
	<!-- Section -->
	<section class="wrapper style1">
		<div class="inner_a">
			<header class="align-center">
				<h1>Message Sent</h1>
				
	
<?php 
if(isset($_POST['submit'])){

    $to_us = "teamcaleb23@gmail.com"; 				//Our email address
    $to_user = $_POST['email']; 					//User email address
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $subject_us = $_POST['subject'];
    $subject_user = "Thank you for contacting Team Caleb!";
    $message_us = "From: " . $first_name . " " . $last_name . ":" . "\n\n" . $_POST['msg'];
    $message_user = "Thank you for contacting Team Caleb! Here is a copy of your message: \n\n" . $_POST['msg'] . "\n\nPlease allow us 24-48 hours to respond. We appreciate your patience and thank you for being on our team. \n\n-Team Caleb";

    $headers_us = 'From: admin@teamcaleb.org' . "\r\n" .
    'Reply-To:' . $to_us . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
    $headers_user = 'From: admin@teamcaleb.org' . "\r\n" .
    'Reply-To:' . $to_user . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
    
    mail($to_us, $subject_us, $message_us, $headers_us);
    mail($to_user, $subject_user, $message_user, $headers_user); 	//Send copy to user
    echo "<p>Thank you for your message, " . $first_name . "!</p>";
    }
?>


			</header>
			<div class="php_box">
				<div class="col align-center">
					<p class="php_text">Your message has been sent successfully. We will get back to you as 	soon as possible.</p>
					<p class="php_text">Check your inbox for a copy of your message. Not there? Check your spam folder, then add <a href = "mailto: admin@teamcaleb.org">admin@teamcaleb.org</a> to your contacts to avoid this problem in the future.</p>
					</br>
					</br>
					<a href="www.teamcaleb.org" class="button">Return to Home Page</a>
				</div>
			</div>

		</section>
	
	<!-- Footer -->
	<footer id="footer">
		<div class="copyright">
			<ul class="icons">
				<!-- <li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>  -->
				<li><a href="https://www.facebook.com/TeamCalebMaeir/" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
				<li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
				<!-- <li><a href="#" class="icon fa-snapchat"><span class="label">Snapchat</span></a></li>	-->
			</ul>
			<p id="copy">Copyright &copy; 2019 Team Caleb. All rights reserved. </p>
		</div>
	</footer>
	<!-- Scripts -->
		<script src="js/jquery.min.js"></script>
		<script src="js/jquery.scrolly.min.js"></script>
		<script src="js/jquery.scrollex.min.js"></script>
		<script src="js/skel.min.js"></script>
		<script src="js/util.js"></script>
		<script src="js/main.js"></script>

</body>
</html>