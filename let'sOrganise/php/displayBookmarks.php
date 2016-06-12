<?php
require_once ('cn.php');

$fiveMinutesAgo = time() - 600;

$sql = 'SELECT
	title, url, tags
		FROM
	bookmarks';
	
$result = mysql_query($sql, $cn) or
	die(mysql_error($cn));

while($row = mysql_fetch_assoc($result)){
	
	echo '<p><strong>' . $row['title'] . '</strong>: <a href="' . $row['url'] . '" target="_blank" >' . $row['url'] . ' </a> </br><strong>Tags: </strong>' .$row['tags'] . '</p></br>';
	
}	
?>