<?php
	session_start();
	if(isset($_SESSION['userId'])){
		$_SESSION=array();
		if(isset($_COOKIE[session_name()])){
			setcookie(session_name(),'',time()-3600);
		}
		session_destroy();
	}
	setcookie('userId','',time()-3600);
	echo "<META HTTP-EQUIV='Refresh' CONTENT='0; URL=login.php'>";
?>