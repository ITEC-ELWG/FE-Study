<?php 
require_once('block.php');

$block = new Block();
$result = $block->generate_block();
echo json_encode($result);