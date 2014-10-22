<?php

	for($i=1;$i<=9;$i++)
	{
		$my_array[$i] = $i; 
	}
	
	shuffle($my_array);
	// print_r($my_array);
    echo json_encode($my_array); 
    // json_encode($my_array); 

?>

