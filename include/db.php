<?php
$connect = mysql_connect("localhost:8888","root","root");
if( ! $connect) {
    die (mysql_errno().' '.mysql_error().' Ошибка подключения.');
}
mysql_select_db("fantsDB");
?>