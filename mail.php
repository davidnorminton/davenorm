<?php

$post = json_decode($_POST);

$errors = [];
$success = [];

$name = $_POST['username'];
$email = $_POST['email'];
$message = $_POST['message'];


// validate username
if(empty($name) || $name == '' ) {
	$errors['error']['username'] = "No Username";
} else {
	array_push($success, filter_var($name, FILTER_SANITIZE_STRING));
}

// validate email
if(empty($email) || $email == '') {
	$errors['error']['email'] = "No Email";
} else {

	if(!filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
		array_push($success, $email);	  
	} else {
		$errors['error']['email'] = "Invalid Email";
	}

}

// validate message
if(empty($message) || $message == '') {
	$errors['error']['message'] = "No Message";
} else {
	array_push($success, filter_var($message, FILTER_SANITIZE_STRING));	  
}


if(!empty($errors)) {
	echo json_encode($errors);
} else {
    $subject = "Thank you for your interest";
    $headers  = 'From: info@davenorm.me' . "\n".
                "Content-type: text/html\r\n";

    $load_html = file_get_contents('thankyou.html');
    $final_mail = str_replace('{{ name }}', $name, $load_html);
    $final_mail = str_replace('{{ email }}', $email, $final_mail);
    $final_mail = str_replace('{{ msg }}', $message, $final_mail);

    mail('davidnorminton@gmail.com', "from davenorm.me", $final_mail, "From:info@davenorm.me");
    mail($email, $subject, $final_mail, $headers);
	echo json_encode(array("success"));
}
?>
