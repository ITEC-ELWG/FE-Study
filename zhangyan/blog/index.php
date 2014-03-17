<html>
<head>
	<title>login</title>
</head>
<body>
	<h2>
	    <?php
			$email=$_POST['email'];
			$password=$_POST['password'];
			if($email=="1450802680@qq.com"&&$password=="A199103252020")
			{
				echo '<a href="http://zhangyan123.github.com"> click here to enter my home! </a>';
			}
			else
			{ 
				echo "sorry!wrong email or password,please try again!";
			}
        ?>
	</h2>
</body>
</html>