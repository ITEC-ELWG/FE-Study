<?php
	setcookie("username","",time()-3600);
	setcookie("password","",time()-3600);	
	echo '<meta http-equiv="refresh" content="0;url=login.php" />';
?>