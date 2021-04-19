<?php 

header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

require_once('C:\xampp\htdocs\backend\libs\phpmailer\vendor\autoload.php');
require_once('./connectDatabase.php');

use PHPMailer\PHPMailer\PHPMailer; 
use PHPMailer\PHPMailer\Exception; 


function VerificateEmail($connection){
    
    $verificationCode = $connection->query("SELECT verification_code FROM `users` WHERE email = '".$_POST['email']."'");

    while ($row = $verificationCode->fetch_assoc()) {
        $userVerificationCode = $row['verification_code'];
    }

    $mail = new PHPMailer(TRUE); 
    
    $mail->isSMTP();                
    $mail->Host = getenv("EMAIL_HOST");       
    $mail->SMTPAuth = true;              
    $mail->Username = getenv("EMAIL_USERNAME");   
    $mail->Password = getenv("EMAIL_PASS");   
    $mail->SMTPSecure = 'tls';           
    $mail->Port = 587;                  
    $mail->setFrom(getenv("EMAIL_USERNAME"), 'InstagramClone'); 
    $mail->addAddress('joannaKeiley100@gmail.com'); 
    $mail->isHTML(true); 
    $mail->Subject = "Your verification code is"." ".$userVerificationCode; 
    
    $bodyContent = "<h1> Hello ".$_POST['fullName']."!"." Your verification code is ".$userVerificationCode. "</h1>
    </br>
    <p>Please activate your account by writing or copying this code to our form.</p>"; 
    $mail->Body = $bodyContent;
    $mail->send();
}

function ActivateAnAccount($connection){
    $verificationCode = $connection->query("SELECT verification_code FROM users WHERE email = '".$_POST['email']. "'");

    while ($row = $verificationCode->fetch_assoc()) {
        $userVerificationCode = $row['verification_code'];
    }

    if ($userVerificationCode){  
        if ($userVerificationCode == $_POST['verificationCode']){
            $connection->query("UPDATE USERS SET activatedAccount = 1 WHERE email = '".$_POST['email']. "' ");
            echo json_encode(array('activated' => true));
        } else {
            echo json_encode(array('activated' => false));
        }
    }
}

if ($_POST['type'] == 'verificateCode'){ 
    $connection = connectToDb();
    ActivateAnAccount($connection);
}

if ($_POST['type'] == 'sendEmail'){
    $connection = connectToDb();
    VerificateEmail($connection);
}

?>