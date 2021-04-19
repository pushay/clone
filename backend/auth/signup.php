<?php
///CORS
header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

require_once('./verificateEmail.php');
require_once('./connectDatabase.php');

function checkIfUserExists($connection) {

    $checkIfExists = sprintf("SELECT * FROM USERS WHERE username = '%s' OR email = '%s'",
    $connection->escape_string($_POST['username']),
    $connection->escape_string($_POST['email']));

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
    return false;
}

function signup($connection){
   
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

if ($_POST['type'] == 'signUp'){
    $connection = connectToDb();
    $exist = checkIfUserExists($connection);

    if (!$exist) {
        signup($connection);
        VerificateEmail($connection);
    }
}

?>
