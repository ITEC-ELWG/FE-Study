<?php 
require_once('block.php');

$block = new Block();
$result = $block->key_up();
echo json_encode($result);