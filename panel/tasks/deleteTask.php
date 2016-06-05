<?php
include($_SERVER['DOCUMENT_ROOT']."/include/db.php");

$task_id = $_POST["task_id"];
//$sql= "DELETE FROM tasks WHERE task_id='".$task_id."' ";
$sql = "UPDATE tasks SET task_isDeleted='1' WHERE task_id='".$task_id."' ";

if ($stmt = $pdo->query($sql)) {
    echo "1";
} else {
    echo "0";
}
?>