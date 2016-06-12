<?php
require_once 'cn.php';
require_once 'protect.php';

$title = protect($_POST['title']);
$url = protect($_POST['url']);
$summary = protect($_POST['summary']);
$tags = protect($_POST['tags']);

$sql = 'INSERT INTO bookmarks
	(title, url, summary, tags)
		VALUES
	("' . $title . '", "' . $url . '", "' . $summary . '", "' . $tags . '")';
$result = mysql_query($sql, $cn) or
	die(mysql_error($cn));
?>