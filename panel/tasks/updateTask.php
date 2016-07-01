<?php
include($_SERVER['DOCUMENT_ROOT']."/include/db.php");

$task_id = $_POST["taskID"];
$task_category = $_POST['taskCategory'];
$task_level = $_POST['taskLevel'];
$task_text = $_POST['taskText'];
$task_plus = $_POST['taskPlus'];
$task_minus = $_POST['taskMinus'];

$sql = "UPDATE tasks
        SET task_category=$task_category, task_level=$task_level, task_content='$task_text', task_plus=$task_plus, task_minus=$task_minus
        WHERE task_id=$task_id";

if ($pdo->query($sql)) {
    echo "Success!";
} else {
    echo "Error!";
}


?>