<?php
include("include/db.php");

if (isset($_SESSION['userid'])) {
    $stmt = $pdo->query("SELECT * FROM users WHERE user_id='".$_SESSION['userid']."' ");
    $row = $stmt->fetch();

    echo json_encode(array($row['user_id'], $row['user_email'], $row['user_rules'], $row['user_isVerified']));
} else {
    echo json_encode(array(0));
}
?>