<?php
include("include/db.php");

$playerName = $_REQUEST['playerName'];
$playerGender = $_REQUEST['playerGender'];

$sql= "INSERT INTO players(player_name, player_gender) VALUES ('$playerName', '$playerGender') ";
//$r=mysql_query ($sql);

$stmt = $pdo->query($sql);

?>