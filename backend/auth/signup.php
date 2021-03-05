<?php
///CORS
header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

function signup(){

    $connection = new mysqli('localhost', 'root', '', 'clone');
    
    if ($connection->connect_error){
        die('Connection failed' . $connection->connect_error);
    }
   
    if ( isset($_POST['type']) && $_POST['type'] == 'signUp'){
        $query = sprintf("INSERT INTO users(full_name, email, number, username, password)  VALUES('%s', '%s', '%d', '%s', '%s')",
            $connection->escape_string($_POST['fullName']),
            $connection->escape_string($_POST['email']),
            $_POST['number'],
            $connection->escape_string($_POST['username']),
            password_hash($_POST['password'], PASSWORD_DEFAULT));
            
        $connection->query($query);
    }

    $connection->close();
}

    signup();
?>
