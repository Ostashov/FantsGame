<?php
include("include/db.php");

$playerId = $_POST["id"];

$sql= "DELETE FROM players WHERE player_id='".$playerId."' ";
//$r=mysql_query ($sql);

$stmt = $pdo->query($sql);

?>