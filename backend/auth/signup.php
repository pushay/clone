<?php
///CORS
header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

require_once('C:\xampp\htdocs\backend\libs\phpmailer\vendor\autoload.php');

use PHPMailer\PHPMailer\PHPMailer; 
use PHPMailer\PHPMailer\Exception; 

function connectToDb() {
    // ENV
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

        $query = sprintf("INSERT INTO users(full_name, email, number, username, password)  VALUES('%s', '%s', '%d', '%s', '%s')",
            $connection->escape_string($_POST['fullName']),
            $connection->escape_string($_POST['email']),
            $_POST['number'],
            $connection->escape_string($_POST['username']),
            password_hash($_POST['password'], PASSWORD_DEFAULT));

        $connection->query($query);

        echo json_encode([
            'registered' => true
        ]);
    }

    $connection->close();
}

function VerificateEmail(){
  
    $mail = new PHPMailer(TRUE); 
    
    $mail->isSMTP();  
    $mail->SMTPDebug = 4;                
    $mail->Host = getenv("EMAIL_HOST");       
    $mail->SMTPAuth = true;              
    $mail->Username = getenv("EMAIL_USERNAME");   
    $mail->Password = getenv("EMAIL_PASS");   
    $mail->SMTPSecure = 'tls';           
    $mail->Port = 587;                  
    $mail->setFrom(getenv("EMAIL_USERNAME"), 'InstagramClone'); 
    $mail->addAddress('joannaKeiley100@gmail.com'); 
    $mail->isHTML(true); 
    $mail->Subject = "Your verification code is here"; 
    
    $bodyContent = "<h1> Hello ".$_POST['fullName']."."." Your verification code is".(rand(100, 9999))."</h1>"; 
    $mail->Body = $bodyContent; 
    
    $mail->send();
}
var_dump(getenv("EMAIL_PORT"));
if ($_POST['type'] == 'signUp'){
    $connection = connectToDb();
    $exist = checkIfUserExists($connection);

    if (!$exist) {
        signup($connection);
        VerificateEmail();
    }
}

?>
