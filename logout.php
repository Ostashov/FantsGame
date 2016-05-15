<?php
include("include/db.php");

if (isset($_SESSION['userid']) & isset($_SESSION['hash'])) {
    unset($_SESSION['userid']);
    unset($_SESSION['hash']);
    session_destroy();
}
header("Location: /");
?>