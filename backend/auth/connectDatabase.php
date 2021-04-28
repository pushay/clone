<?php

function connectToDb() {

$connection = new mysqli('localhost', 'root', '', 'clone');

if ($connection->connect_error){
    die('Connection failed' . $connection->connect_error);
}
return $connection;
}

?>