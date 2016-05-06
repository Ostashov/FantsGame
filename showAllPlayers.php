<?php
include("include/db.php");

//$result=mysql_query("select * from players",$connect);
//$result = $mysqli->query("SELECT id FROM test ORDER BY id ASC");
$stmt = $pdo->query('SELECT COUNT(0) AS ROW_COUNT FROM players');
$number = $stmt->fetch(PDO::FETCH_NUM);

if ($number[0] != 0) {
    $stmt = $pdo->query('SELECT * FROM players');

    echo "<table class='table table-striped table-condensed' >
    <tr>
    <th align=center>Имя</th>
    <th align=center>Пол</th>
    <th class='leftBorder'><button type='button' id='showDelPlayerButtonsBtn' class='btn btn-link' name='delPlayerBtn'>Изменить</button></th></tr>";

    //while($data = mysql_fetch_row($result))
    //$result->data_seek(0);

    while ($row = $stmt->fetch()) {
    //}
    //while ($data = $result->fetch_assoc()) {  
        echo "<tr id='player".$row['player_id']."'>";
        echo "<td align=center>".$row['player_name']."</td>";
        echo "<td align=center>".$row['player_gender']."</td>";
        echo "<td class='delButtons' hidden >";
        echo "<button type='button' class='btn btn-default btn-xs delPlayerBtn' value='".$row['player_id']."'>&times;</button></td>";
        echo "</tr>";
    }
    echo "</table>";
} else {
    echo "Нет игроков";
}
?>