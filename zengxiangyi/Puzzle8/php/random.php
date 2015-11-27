<?php
$num = $_POST["num"];
if(($num > 1) && ($num < 10))
{
	$arrayData = range(0, $num*$num - 1);
	shuffle($arrayData);
	for ($i=0; $i < $num; $i++) { 
		for ($j=0; $j < $num; $j++) { 
			$array[$i][$j] = $arrayData[$i * $num + $j];
		}
	}
	echo json_encode($array);    
}
else
{
	echo json_encode("");     

}    
?>