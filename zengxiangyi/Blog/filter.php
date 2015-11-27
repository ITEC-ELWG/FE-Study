<?php 
	//表单过滤函数

// 　　function post_check($str, $min, $max) {

// 　　if (isset ( $min ) && strlen ( $str ) < $min) {

// 　　die ( '最少$min字节' );

// 　　} else if (isset ( $max ) && strlen ( $str ) > $max) {

// 　　die ( '最多$max字节' );

// 　　}

// 　　return stripslashes_array ( $str );

// 　　}
	
	function postCheck($text, $str, $min, $max)
	{
		if (isset ( $min ) && strlen ( $str ) < $min) 
		{
			echo "<br><p>".$text.'最少'.$min."字符!</p>";
			return "";
		}

		else if (isset ( $max ) && strlen ( $str ) > $max) 
		{
			echo "<br><p>".$text.'最多'.$max."字符!</p>";
			return "";
		}

		return stripslashes( $str );
	}

	//字符过滤函数

	function strCheck($str)
	{
		if (inject_check($str)) 
		{
			die ( '非法参数' );
		}

		//注入判断
		$str = htmlspecialchars($str);

		return $str;
	}

	function inject_check($sql_str) {
		return preg_match('/select|insert|and|or|update|delete|\'|\/\*|\*|\.\.\/|\.\/|union|into|load_file|outfile/i', $sql_str); // 进行过滤
	} 

	function searchCheck($str) {

		$str = str_replace ( "_", "_", $str );

		//把"_"过滤掉
		$str = str_replace ( "%", "%", $str );
		//把"%"过滤掉
		$str = htmlspecialchars ( $str );
		//转换html
		return $str;
	}
 ?>




