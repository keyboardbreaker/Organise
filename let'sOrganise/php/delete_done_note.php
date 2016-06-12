<?php
require_once 'cn.php';
require_once 'protect.php';

$id = protect($_POST['id']);

$sql = ' DELETE 
		FROM `done` 
		WHERE `id` =' . $id . '';
			
$result = mysql_query($sql, $cn) or 
	die(mysql_error($cn).$sql);
?>