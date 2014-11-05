<?php
$positions = array();
$n = $_POST['num'];
//echo "hasdhas";
for($i = 0;$i < ($n * $n);$i ++)
{
	$positions[$i]  = $i;
}
//打乱数组
shuffle($positions);
echo json_encode($positions);
//var_dump($_GET);
?>