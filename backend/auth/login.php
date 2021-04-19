<?php
///CORS
header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

require_once('./connectDatabase.php');

function login($connection){
  
    $query = "INSERT INTO users(facebookId, full_name, email) Values('$_POST[id]' , '$_POST[name]' , '$_POST[email]') ";
    $connection->query($query);
}   

    if ($_POST['type'] == 'fbLogin'){
      $connection  = connectToDb();
      login($connection);
    }
?>
