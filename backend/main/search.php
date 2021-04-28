<?php 

header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

require_once('../auth/connectDatabase.php');

function search($searched, $connection){
    if ($searched == 'random'){
        $sql = 'SELECT * FROM USERS where id < 11';
    }
    else {
       $sql = sprintf("SELECT * FROM USERS where  username LIKE '%%%s%%'", 
        $connection->escape_string($searched));
    }

    $response =  $connection->query($sql);

    if ($response->num_rows > 0){
        $arrInfo = Array();
        $info = Array();
 
        $searchedInfo = Array("full_name", "username", "avatar");

        while($row = $response->fetch_assoc()){
            for ($i = 0; $i < count($searchedInfo); $i++){
                $info[$searchedInfo[$i]] = $row[$searchedInfo[$i]];
            }
            $info['search'] = 'completed';
            array_push($arrInfo, $info);
            $info = Array();
        }
        echo json_encode($arrInfo);
    } else 
        echo json_encode([
            'search' => 'notFound'
        ]);
}

if (isset($_POST['type']) && $_POST['type'] == "search"){
    $connection = connectToDb();
    search($_POST['searched'], $connection);
}
?>