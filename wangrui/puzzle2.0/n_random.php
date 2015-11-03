<?php
$x = $_POST["m"];
for ($i=0; $i < ($x*$x); $i++) { 
    $array_ori[$i] = $i;
}
shuffle($array_ori);
echo json_encode($array_ori) ;             
?>