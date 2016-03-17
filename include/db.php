<?php
// $connect = mysqli_connect("localhost:8888","root","root");
// if( ! $connect) {
//     die (mysql_errno().' '.mysql_error().' Ошибка подключения.');
// }
//$connect = new mysqli("localhost", "root", "root", "fantsDB");
//if ($connect->connect_errno) {
//    echo "Не удалось подключиться к MySQL: (" . $connect->connect_errno . ") " . $connect->connect_error;
//}

$dsn = "mysql:host=localhost;dbname=fantsDB";
$opt = array(
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"
);
$pdo = new PDO($dsn, "root", "root", $opt);


//mysql_select_db("fantsDB");
?>