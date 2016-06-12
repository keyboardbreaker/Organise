<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>To do</title>
		<link href="http://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
		<link href="http://fonts.googleapis.com/css?family=Shadows+Into+Light+Two" rel="stylesheet">
		<link rel="stylesheet" href="css/todo.css">
		
		<meta name="viewport" content="width=device-width, initial-scale=1.0">	
	</head>
	<body>
		<div class="list">
			<h1 class="header">to do.</h1>
			
			<ul>
				<li><span class="item">shopping</span></li>
				<li><span class="item done">learn php</span></li>
			</ul>
			
			<form class = "item-add" action="add.php" method="post">
					<input type="text" name="name" placeholder="type a new item here" class "input" autocomplete="off" required>
					<input type="submit" value="Add" class="submit">
			
		</div>
	</body>
</html>