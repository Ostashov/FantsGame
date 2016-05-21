<?php
include($_SERVER['DOCUMENT_ROOT']."/include/db.php");

$category = $_POST['category'];

$sql = "SELECT * FROM tasks WHERE task_category='".$category."' ";
$stmt = $pdo->query($sql);
$number = $stmt->fetch(PDO::FETCH_NUM);

if ($number[0] > 0) {
    $sql = "SELECT * FROM tasks WHERE task_category='".$category."' ";
    $stmt = $pdo->query($sql);

    $output = Array();
    $output['data'] = Array();

    while ($row = $stmt->fetch()) {
        $output['data'][] = Array( 'task_id'=>$row['task_id'] , 'task_content'=>$row['task_content'], 'task_plus'=>$row['task_plus'],
        'task_minus'=>$row['task_minus'] , 'task_level'=>$row['task_level'] , 'task_category'=>$row['task_category'] , 'task_timer'=>$row['task_timer'] );
    }

    echo json_encode($output);
} else {
    echo "Нет подходящих заданий";
}

?>