<?php
	$account = $_GET["account"];
	if ($account) {
		include("conn.php");
		$sql = "select account from user where account='$account';";
		$result=$mysqliObj->query($sql);
		if($result&&$result->fetch_row()[0]){
			echo "用户名已存在";
		}
		else echo "";
		$mysqliObj->close();
	}
?>