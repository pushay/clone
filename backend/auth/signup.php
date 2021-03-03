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

    if ($_POST['type'] == 'signUp'){
        $query = "INSERT INTO users(full_name, email, number, username, password) 
        Values('$_POST[fullName]' , '$_POST[email]', '$_POST[number]', '$_POST[username]', '$_POST[password]')";
    }

    $connection->query($query);
    $connection->close();
}
    signup();
?>
