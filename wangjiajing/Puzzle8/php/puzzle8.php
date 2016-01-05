<?php
	$n = $_GET['num'];
	$array = range(1,$n * $n);
	shuffle($array);
	echo json_encode($array);
?>