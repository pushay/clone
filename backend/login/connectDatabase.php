<?php
///CORS
header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

function connectWithSql(){

    $connection = new mysqli('localhost', 'root', '', 'clone');
    
    if ($connection->connect_error){
        die('Connection failed' . $connection->connect_error);
    
    }
    $query = "INSERT INTO users Values(NULL, '$_POST[id]' , '$_POST[name]') , '$_POST[email]' ";
    $connection->query($query);
    
    $connection->close();
}
    if (isset($_POST['id']) AND isset($_POST['email']) AND isset($_POST['name'])){
        connectWithSql();
    }
?>
