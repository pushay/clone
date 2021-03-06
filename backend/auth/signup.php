<?php
///CORS
header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

function connectToDb() {
    $connection = new mysqli('localhost', 'root', '', 'clone');
    
    if ($connection->connect_error){
        die('Connection failed' . $connection->connect_error);
    }
    return $connection;
}

function checkIfUserExists($connection) {
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
    }

    $connection->close();
}

$connection = connectToDb();
$exist = checkIfUserExists($connection);

if (!$exist) {
    signup($connection);
    echo json_encode([
        'registered' => true
    ]);
}

?>
