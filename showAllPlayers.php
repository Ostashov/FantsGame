<?php
include("include/db.php");

//$result=mysql_query("select * from players",$connect);
//$result = $mysqli->query("SELECT id FROM test ORDER BY id ASC");
$stmt = $pdo->query('SELECT * FROM players');
if (count($stmt->fetch()) != 0) {
    echo "<table class='tableOfPlayers' >
    <tr>
    <th align=center>Имя</th>
    <th align=center>Пол</th>
    <th class='leftBorder'><button type='button' id='showDelPlayerButtonsBtn' name='delPlayerBtn'>Изменить</button></th></tr>";

    //while($data = mysql_fetch_row($result))
    //$result->data_seek(0);

    while ($row = $stmt->fetch()) {
    //}
    //while ($data = $result->fetch_assoc()) {   
        echo "<tr id='player".$row['id']."'>";
        echo "<td align=center>".$row['name']."</td>";
        echo "<td align=center>".$row['gender']."</td>";
        echo "<td class='leftBorder delButtons' >";
        echo "<button type='button' class='delPlayerBtn' value='".$row['id']."'>x</button></td>";
        echo "</tr>";
    }
    echo "</table>";
} else {
    echo "Нет игроков";
}
?>