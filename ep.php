<?php
include("include/db.php");

$action = $_POST['action'];

switch ($action) {
    case 'email_check':
        $hash = $_POST['hash'];

        emailVerification($hash);
        break;
    default:
        # code...
        break;
}

function emailSendLetter ($hash) {
    $stmt = $pdo->query('SELECT user_id FROM email_verification WHERE hash="'.$hash.'" ');
    $row = $stmt->fetch();
    $user_id = $row['user_id'];

    $stmt = $pdo->query('SELECT user_email FROM users WHERE user_id="'.$user_id.'" ');
    $row = $stmt->fetch();
    $user_email = $row['user_email'];

    $subject = "Подтверждение E-mail - Фанты";
    $message = "Спасибо за регистрацию!</br>";
    $message .= "Для подтверждения почты пройдите по ссылке:</br>";
    $message .= $_SERVER['DOCUMENT_ROOT']."?action=email_check&hash=".$hash;

    $result = mail($user_email, $subject, $message);
    return $result;
}

function emailVerification($hash) {

}
?>