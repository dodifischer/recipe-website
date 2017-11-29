<!DOCTYPE HTML>
<html ng-app="store">
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css"/>
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="angular.min.js"></script>
	<script type="text/javascript" src="app.js"></script>
	<script type="text/javascript" src="products.js"></script>
</head>
<body ng-controller="StoreController as store">
	<?php
	   $con=mysqli_connect('localhost','id3649192_recipeuser','recipePass');
	   $db=mysqli_select_db($con,'id3649192_recipedatabase');

		if($con){
			echo "Connection is successful to the database you are now connected to KB". "<br>";
		}
		else{
			die('Error.');
		}
		if($db){
			echo "The requested DB exists". "<br>";
		}
		else{
			die('You do not know the fucking DB that you want to connect to eh?');
		}
	?>
	<h3 id="h3Title">{{"Hola a todos!"}}<br>{{"Thees weell be a recipee website"}}</h3>
	<div class="row">
		<div class="col-sm-4"></div>
		<div class="col-sm-4">
			<ul class="list-group" id="mainList">
				<li class="list-group-item theItem" ng-repeat="product in store.products">	
					<product-title></product-title>
					<img class="image" ng-src="{{product.images[0]}}"/><br>
					<product-panels></product-panels>
			</ul>
		</div>
		<div class="col-sm-4"></div>
	</div>
</body>
</html>