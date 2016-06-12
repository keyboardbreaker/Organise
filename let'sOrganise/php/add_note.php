<?php
require_once 'cn.php';
require_once 'protect.php';

$name = protect($_POST['name']);
//$created = protect($_POST['created']);	

$time = time();

$sql = 'INSERT INTO items
		(name)
			VALUES
			("' . $name . '")';
			
$result = mysql_query($sql, $cn) or 
	die(mysql_error($cn).$sql);
?>