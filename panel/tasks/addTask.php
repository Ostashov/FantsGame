<?php
include($_SERVER['DOCUMENT_ROOT']."/include/db.php");

$task_category = $_POST['taskCategory'];
$task_level = $_POST['taskLevel'];
$task_text = $_POST['taskText'];
$task_plus = $_POST['taskPlus'];
$task_minus = $_POST['taskMinus'];
if ($_POST['taskTimer'] > 0) {
    $task_timer = $_POST['taskTimer'];
} else {
    $task_timer = 0;
}

$sql = "INSERT INTO tasks(task_category, task_level, task_content, task_plus, task_minus, task_timer)
        VALUES ('$task_category', '$task_level', '$task_text', '$task_plus', '$task_minus', '$task_timer') ";

$stmt = $pdo->query($sql);
?>