<?php
	require_once ('cn.php');
	
	$itemsQuery = 'SELECT * 
	FROM items';
	
$result = mysql_query($itemsQuery, $cn) or
	die(mysql_error($cn));
	
//$items = $itemsQuery ->rowCount() ? $itemsQuery : []

//echo '<pre>', print_r($items, true), '</pre>';
while($row = mysql_fetch_assoc($result)){
	//list items
	
	// if done is true, style with strikeout
	if($row['done']== 1){
		echo 
			'<li>
			<span class="id">' . $row['id'] . '</span>
			<span class="done">' . $row['name'] . '</span>
			<a href="#" class="delete-button">delete</a>&nbsp
			</li>';
	}
	else{
		echo 
			'<li>
			<span class="id">' . $row['id'] . '</span>
			<span class="item">' . $row['name'] . '</span>
			<a href="#" class="done-button">mark as done</a>&nbsp
			<a href="#" class="delete-button">delete</a>&nbsp
	  </li>';
	}
}	

	
?>