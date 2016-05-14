<?php
include("include/db.php");
include("ep.php");

$user_email = $_POST['email'];
$user_pass = md5(md5(trim($_POST['password'])));

$stmt = $pdo->query('SELECT COUNT(0) AS ROW_COUNT FROM users WHERE user_email="'.$user_email.'" ');
$number = $stmt->fetch(PDO::FETCH_NUM);

if ($number[0] != 0) {
    echo "exists";
} else {
    $date = date("Y-m-d H:i:s");
    $sql= "INSERT INTO users(user_email, user_password, user_signUp_date) VALUES ('$user_email', '$user_pass', '$date') ";

    $stmt = $pdo->query($sql);
    echo "added";

    $stmt = $pdo->query('SELECT user_id FROM users WHERE user_email="'.$user_email.'" ');
    $row = $stmt->fetch();
    $user_id = $row['user_id'];

    $hash = md5($user_id.$user_email);
    $stmt = $pdo->query("INSERT INTO email_verification VALUES ('$user_id', '$hash')");

    echo emailSendLetter($hash); // doesn't work
}
?>