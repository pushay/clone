<?php
header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

require_once('../auth/connectDatabase.php');

function getUserInformation($connection){
    
    if (is_numeric($_POST['usephemail'])){

        $sql = sprintf("SELECT * FROM users WHERE number = '%d'",
          $connection->escape_string($_POST['usephemail'])     
        );
      } else {
        $sql = sprintf("SELECT * FROM users WHERE (email = '%s') OR (username = '%s')",
          $connection->escape_string($_POST['usephemail']),
          $connection->escape_string($_POST['usephemail'])
        );
      }

    $result = $connection->query($sql);

    if ($result->num_rows){
        $userInfo = Array();
        $neededInfo = Array("full_name","username","avatar","followers", "following", "posts");

        while($row = $result->fetch_assoc()){
            for ($i = 0; $i < count($neededInfo); $i++){
                $userInfo[$neededInfo[$i]] = $row[$neededInfo[$i]];
            }
        }
        echo json_encode($userInfo);
    }
}

if (isset($_POST['type'])){
    $connection = connectToDb();

    if ($_POST['type'] == 'getUser'){
       getUserInformation($connection);
    };
}

?>