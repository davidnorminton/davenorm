<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = "Thank you for your interest";
$txt = "Thank you " . $name . " for your interst in my profile. David";
$headers  = 'From: info@davenorm.me' . "\n".
            'MIME-Version: 1.0' . "\n" . 
            'Content-type: text/html; charset=iso-8859-1' . "\n" .
            "X-Mailer: PHP";

$load_html = file_get_contents('thankyou.html');
$final_mail = str_replace('{{ name }}', $name, $load_html);
mail('davidnorminton@gmail.com', "from davenorm.me",$message, "From:info@davenorm.me");
mail($email, $subject, $final_mail, $headers);
?>

<html>
    <head>
        <title>davenorm.me | developer profile</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <link rel="stylesheet"  media="(max-width: 851px)" type="text/css" href="css/mobile.css">
        <link rel="stylesheet"  media="(min-width: 850px)" type="text/css" href="css/style.css">
        <link rel="stylesheet" href="css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Barrio" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
        <script src="scripts.js"></script>
        <!--[if IE]>
            <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->

    </head>
    <body>
        <div id="thanks-main">
            <div id="thankyou-div">
                <img id="email-icon" width="100" alt="" src="images/email-icon.png" />
                    <div id="thanks-text">
                    <b class="thanks-text">Thank You <?= $name ?> for looking over my profile and taking the time to email me,</b><br /> 
                    I promise to get back to you as quickly as I can.<br />
                    Thanks. David.
                    </div>
                    <a href="http://davenorm.me"><div id="back-button">Back To Main Page</div></a>
            </div> 
        </div>
       <footer>
           <div id="footer-center">
           </div>
           <div id="very-bottom">                
                <div id="copyright">Copyright &copy; davenorm.me 2017</div>
                <div id="social">
                    <a href="mailto:davidnorminton@gmail.com">
                        <i class="fa fa-envelope footer-icons"></i>
                    </a>
                    <a target="_blank" href="https://github.com/davidnorminton">
                        <i class="fa fa-github footer-icons"></i>
                    </a>
                    <a target="_blank" href="https://uk.linkedin.com/in/david-norminton-72911599">
                        <i class="fa fa-linkedin footer-icons"></i>
                    </a>
                    <a target="_blank" href="https://twitter.com/davenorminton">
                        <i class="fa fa-twitter footer-icons"></i>
                    </a>
                </div>
           </div>
       </footer>
<style>
#thanks-text {
    font-size :22px;
}
#thankyou-div {
    position : relative;
    top : 50px;
}
#back-button {
    margin-top: 38px;
    border: 2px solid green;
    background: rgba(0, 128, 0, 0.61);
    display: inline-block;
    padding: 5px 10px;
    border-radius: 50px;
    color: #000;
    cursor : pointer;
    transition : all .3s ease-in-out;
}
#back-button:hover {
    margin-top: 38px;
    border: 2px solid #555555;
    background: rgb(201, 201, 201);
    display: inline-block;
    padding: 5px 10px;
    border-radius: 50px;
    color: #63b163;
}
</style>
<script>
$(document).ready(function(){
    var mainDiv = $('#thanks-main');
    // centre about area on front page
    var windowHeight = $(window).height()
    var mainDivHeight = windowHeight - 243; // this is the height of the footer
    // set amin height for projects div
    $(mainDiv).css('min-height', mainDivHeight);
    
});
</script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-91671447-1', 'auto');
  ga('send', 'pageview');

</script>
   </body>
</html>
