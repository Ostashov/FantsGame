<?php
include($_SERVER['DOCUMENT_ROOT']."/include/db.php");

$task_id = $_POST["taskID"];
$task_category = $_POST['taskCategory'];
$task_level = $_POST['taskLevel'];
$task_text = $_POST['taskText'];
$task_plus = $_POST['taskPlus'];
$task_minus = $_POST['taskMinus'];

echo "Success!";
?>