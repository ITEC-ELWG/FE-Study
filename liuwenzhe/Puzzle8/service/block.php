<?php
/**
* 
*/
class Block
{
	public function generate_block()
	{
		$num = isset($_GET['num']) ? $_GET['num'] : 3;
		$block = array();
		$disorder_nums = array();

		for ($i=0; $i < $num*$num; $i++) { 
			$disorder_nums[$i] = $i;
		}

		shuffle($disorder_nums);

		for ($i=0; $i < $num; $i++) { 
			for ($k=0; $k < $num; $k++) { 
				$block[$i][$k] = $disorder_nums[$num*$i + $k];
			}
		}

		$result = array();
		$result['line_num'] = $num;
		$result['array'] = $block;
		return $result;
	}

	public function move_block($value = '', $array = '')
	{
		if ($value != '') {
			$value = $value;
			$array = $array;			
		}else{
			$value = $_GET['value'];
			$array = $_GET['array'];			
		}

		$line = count($array);
		$row_n = 0;
		$line_n = 0;
		$row_z = 0;
		$line_z = 0;
		$result = array();

		for ($i=0; $i < $line; $i++) { 
			for ($k=0; $k < $line; $k++) { 
				if ($array[$i][$k] == $value) {
					$row_n = $i;
					$line_n = $k;
				}
				if ($array[$i][$k] == 0) {
					$row_z = $i;
					$line_z = $k;
				}
			}
		}

		if ($row_n == $row_z) {
			if ($line_n - $line_z == 1) {
				$array = $this->update_block_array($array, $row_n, $line_n, $row_z, $line_z, $value);
				$success = $this->binggo($array, $line);
				if ($success) {
					$result = $this->response(2, $array, 'right');
				}else{
					$result = $this->response(1, $array, 'right');
				}		
				return $result;
			}elseif($line_z - $line_n == 1){
				$array = $this->update_block_array($array, $row_n, $line_n, $row_z, $line_z, $value);
				$success = $this->binggo($array, $line);
				if ($success) {
					$result = $this->response(2, $array, 'left');
				}else{
					$result = $this->response(1, $array, 'left');
				}
				return $result;
			}else{
				$result = $this->response(0, $array);
				return $result;
			}
		}
		elseif ($line_z == $line_n) {
			if ($row_z - $row_n == 1) {
				$array = $this->update_block_array($array, $row_n, $line_n, $row_z, $line_z, $value);
				$success = $this->binggo($array, $line);
				if ($success) {
					$result = $this->response(2, $array, 'top');
				}else{
					$result = $this->response(1, $array, 'top');
				}
				return $result;
			}elseif($row_n - $row_z == 1){
				$array = $this->update_block_array($array, $row_n, $line_n, $row_z, $line_z, $value);
				$success = $this->binggo($array, $line);
				if ($success) {
					$result = $this->response(2, $array, 'bottom');
				}else{
					$result = $this->response(1, $array, 'bottom');
				}
				return $result;
			}else{
				$result = $this->response(0, $array);
				return $result;
			}
		}else{
			$result = $this->response(0, $array);
			return $result;
		}
	}

	public function key_up(){
		$key_num = $_GET['key_num'];
		$array = $_GET['array'];
		$result = $this->is_move($array, $key_num);
		if ($result != false) {
			$return = $this->move_block($result['array'], $array);
			$return['value'] = $result['array']; 
			return $return;
		}else{
			$return = $this->response(0, $array);
			return $return;
		}
	}

	private function is_move($array ,$key_num){
		switch ($key_num) {
			case 39:
				for ($i=0; $i < count($array); $i++) { 
					for ($k=0; $k < count($array); $k++) { 
						if ($array[$i][$k] == 0) {
							if ($k != 0) {
								$return = array();
								$return['array'] = $array[$i][$k - 1];
								$return['value'] = $i*count($array) + $k-1;
								return $return;
							}else{
								return false;
							}
						}
					}
				}
				break;
			case 40:
				for ($i=0; $i < count($array); $i++) { 
					for ($k=0; $k < count($array); $k++) { 
						if ($array[$i][$k] == 0) {
							if ($i != 0) {
								$return = array();
								$return['array'] = $array[$i - 1][$k];
								$return['value'] = ($i - 1)*count($array) + $k;
								return $return;								
							}else{
								return false;
							}
						}
					}
				}				
				break;
			case 37:
				for ($i=0; $i < count($array); $i++) { 
					for ($k=0; $k < count($array); $k++) { 
						if ($array[$i][$k] == 0) {
							if ($k != count($array) - 1) {
								$return = array();
								$return['array'] = $array[$i][$k + 1];
								$return['value'] = $i*count($array) + $k+1;
								return $return;								
							}else{
								return false;
							}
						}
					}
				}
				break;
			case 38:
				for ($i=0; $i < count($array); $i++) { 
					for ($k=0; $k < count($array); $k++) { 
						if ($array[$i][$k] == 0) {
							if ($i != count($array) - 1) {
								$return = array();
								$return['array'] = $array[$i+1][$k];
								$return['value'] = ($i+1)*count($array) + $k;
								return $return;								
							}else{
								return false;
							}
						}
					}
				}
				break;
			default:
				break;
		}
	}

	private function response($result, $array, $animation = ''){
		$return = array();
		$return['result'] = $result;
		$return['array'] = $array;
		$return['animation'] = $animation;

		return $return;
	}

	private function update_block_array($array, $row_n, $line_n, $row_z, $line_z, $value){
		$array[$row_n][$line_n] = 0;
		$array[$row_z][$line_z] = $value;

		return $array;
	}

	private function binggo($array, $line){
		for ($i=0; $i < $line; $i++) { 
			for ($k=0; $k < $line; $k++) { 
				$num = $i*$line + $k;
				if ($array[$i][$k] != $num) {
					return false;
				}
			}
		}
		return true;
	}
}

	

