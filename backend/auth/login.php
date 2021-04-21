<?php
///CORS
header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

require_once('./connectDatabase.php');

function fbLogin($connection){
    $query = "INSERT INTO users(facebookId, full_name, email) Values('$_POST[id]' , '$_POST[name]' , '$_POST[email]') ";
    $connection->query($query);
}   

function login($connection){
  $checkIfUserExists = sprintf("SELECT * FROM users WHERE (email = '%s') OR (username = '%s') OR (number = '%d')",
  $connection->escape_string($_POST['usephemail']),
  $connection->escape_string($_POST['usephemail']),
  $connection->escape_string($_POST['usephemail'])
);

  $response = $connection->query($checkIfUserExists);
 
  if ($response->num_rows > 0){
    while($row = $response->fetch_array()){
      $checkIfPasswordMatches  = password_verify($_POST['password'],$row['password']);
    } 
    if ($checkIfPasswordMatches == true){
      echo json_encode(['loggedIn' => true]);
    } 
    else echo json_encode(['loggedIn' => false]);
  }
  else echo json_encode(['loginError' => 'accountNotExisting']); 
}
  if (isset($_POST['type'])){
    if ($_POST['type'] == 'fbLogin'){
      $connection  = connectToDb();
      fbLogin($connection);
    }
    if ($_POST['type'] == 'login'){
      $connection = connectToDb();
      login($connection);
    }
  }

?>
