<?php
///CORS
header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

function login(){

    $connection = new mysqli('localhost', 'root', '', 'clone');
    
    if ($connection->connect_error){
        die('Connection failed' . $connection->connect_error);
    
    }
    var_dump(isset($_POST['type']));
    var_dump($_POST['type']);
    if ( isset($_POST['type']) && $_POST['type'] == 'fbLogin'){
        $query = "INSERT INTO users(facebookId, full_name, email) 
        Values('$_POST[id]' , '$_POST[name]' , '$_POST[email]') ";
        echo $query;
        $connection->query($query);
    }

    if (isset($_POST['type']) && $_POST['type'] == 'login'){
        // do sth here logging into !!!
    }
    
    $connection->close();

}   
    login();
?>
