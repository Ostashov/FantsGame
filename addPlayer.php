<?php
include("include/db.php");

$playerName = $_REQUEST['playerName'];
$playerIsMale = $_REQUEST['playerIsMale'];

$sql= "INSERT INTO players(player_name, player_isMale) VALUES ('$playerName', '$playerIsMale') ";
//$r=mysql_query ($sql);

$stmt = $pdo->query($sql);

?>