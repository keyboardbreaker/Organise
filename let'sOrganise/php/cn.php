<?php

$cn = mysql_connect('localhost', 'c0yujin', 'xfDXLgC1cHFPbznk8sYw') or
	die('Unable to connect to server');
mysql_select_db('c0yujin', $cn) or
	die(mysql_error($cn));
?>