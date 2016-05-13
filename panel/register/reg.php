<?php
include("../../include/db.php");

$user_email = $_POST['email'];
$user_pass = md5(md5(trim($_POST['password'])));

$stmt = $pdo->query('SELECT COUNT(0) AS ROW_COUNT FROM users WHERE user_email="'.$user_email.'" ');
$number = $stmt->fetch(PDO::FETCH_NUM);

if ($number[0] != 0) {
    echo "exists";
} else {
    $sql= "INSERT INTO users(user_email, user_password) VALUES ('$user_email', '$user_pass') ";

    $stmt = $pdo->query($sql);
    echo "added";
}
?>