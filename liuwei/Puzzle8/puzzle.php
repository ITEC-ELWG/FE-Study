<?php

	$num=$_POST['num'];
	
	for($i=1;$i<=$num*$num;$i++)
	{
		$my_array[$i] = $i; 
	}

	shuffle($my_array);
	// print_r($my_array);
    echo json_encode($my_array); 
    // json_encode($my_array); 

?>

