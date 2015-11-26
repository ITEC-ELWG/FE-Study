<?php

$order = $_POST["order"];
$array = array();

for ($i = 0; $i < $order * $order; $i++) { 
	
	$array[$i] = $order * $order - $i - 1;
}

shuffle($array);

echo json_encode($array);