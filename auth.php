<?php
include("include/db.php");

$user_email = $_POST['email'];
$user_password = $_POST['password'];

$stmt = $pdo->query("SELECT * FROM users WHERE user_email='".$user_email."' AND user_password='".md5(md5(trim($user_password)))."' ");
$row = $stmt->fetch();
$user_id = $row['user_id'];

if ($user_id > 0) {
    $hash = generateCode(10);
    $stmt = $pdo->query("UPDATE users SET user_hash='".$hash."' WHERE user_id='".$user_id."' ");
    $_SESSION["userid"] = $user_id;
    $_SESSION["hash"] = $hash;
    if (isset($_SESSION["userid"])) {
        echo "1";
    }
} else {
    echo "0";
}



function generateCode($length=6) {
    $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHI JKLMNOPRQSTUVWXYZ0123456789";
    $code = "";
    $clen = strlen($chars) - 1;  
    while (strlen($code) < $length) {
            $code .= $chars[mt_rand(0,$clen)];  
    }
    return $code;
}
?>