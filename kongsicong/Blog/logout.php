<?php
	session_start();
	if(isset($_SESSION['account'])){
		$_SESSION=array();
		if(isset($_COOKIE[session_name()])){
			setcookie(session_name(),'',time()-3600);
		}
		session_destroy();
	}
	setcookie('account','',time()-3600);
	echo "<META HTTP-EQUIV='Refresh' CONTENT='0; URL=index.php'>";
?>