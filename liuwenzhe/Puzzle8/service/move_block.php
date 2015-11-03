<?php 
require_once('block.php');

$block = new Block();
$result = $block->move_block();
echo json_encode($result);