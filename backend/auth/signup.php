<?php
///CORS
header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

require_once('C:\xampp\htdocs\backend\libs\phpmailer\vendor\autoload.php');

use PHPMailer\PHPMailer\PHPMailer; 
use PHPMailer\PHPMailer\Exception; 

function connectToDb() {

    $connection = new mysqli('localhost', 'root', '', 'clone');
    
    if ($connection->connect_error){
        die('Connection failed' . $connection->connect_error);
    }
    return $connection;
}

function checkIfUserExists($connection) {

    if (isset($_POST['type'])){
            $checkIfExists = sprintf("SELECT * FROM USERS WHERE username = '%s' OR email = '%s'",
            $connection->escape_string($_POST['username']),
            $connection->escape_string($_POST['email'])
        );

        $response = $connection->query($checkIfExists);

        if ($response->num_rows > 0){
            $errors = Array();
            while ($row = $response->fetch_assoc()) {
                if ($row["username"] ==  $_POST['username']){
                    $errors['usernameExists'] = true;
                }
                if ($row["email"] ==  $_POST['email']){
                    $errors['emailExists'] = true;
                }
            }
            if (count($errors)){
                echo json_encode($errors);
                return true;
            }
        }
    }
    return false;
}
function signup($connection){
   
    if (isset($_POST['type']) && $_POST['type'] == 'signUp'){

        $query = sprintf("INSERT INTO users(full_name, email, number, username, password, verification_code)  VALUES('%s', '%s', '%d', '%s', '%s','%d')",
            $connection->escape_string($_POST['fullName']),
            $connection->escape_string($_POST['email']),
            $_POST['number'],
            $connection->escape_string($_POST['username']),
            password_hash($_POST['password'], PASSWORD_DEFAULT),
            rand(1000, 9999)
        );

        $connection->query($query);

        echo json_encode([
            'registered' => true
        ]);
    } 
}

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
    $mail->Subject = "Your verification code is".$userVerificationCode; 
    
    $bodyContent = "<h1> Hello ".$_POST['fullName']."!"." Your verification code is ".$userVerificationCode. "</h1>
    </br>
    <p>Please activate your account by writing or copying this code to our form.</p>"; 
    $mail->Body = $bodyContent; 
    
    $mail->send();
}

if ($_POST['type'] == 'signUp'){
    $connection = connectToDb();
    $exist = checkIfUserExists($connection);

    if (!$exist) {
        signup($connection);
        VerificateEmail($connection);
    }
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

?>
