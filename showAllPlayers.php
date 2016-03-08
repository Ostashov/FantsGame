<?php
include("include/db.php");

//$result=mysql_query("select * from players",$connect);
//$result = $mysqli->query("SELECT id FROM test ORDER BY id ASC");

echo "<table class='tableOfPlayers' >
<tr>
<th align=center>Name</th>
<th align=center>Gender</th>";

//while($data = mysql_fetch_row($result))
//$result->data_seek(0);
$stmt = $pdo->query('SELECT * FROM players');
while ($row = $stmt->fetch())
{
//}
//while ($data = $result->fetch_assoc()) {   
    echo "<tr>";
    echo "<td align=center>".$row['name']."</td>";
    echo "<td align=center>".$row['gender']."</td>";
    echo "</tr>";
}
echo "</table>";
?>