<?php 
	if(!isset($_SESSION['userId'])){
		if(!isset($_COOKIE['userId'])){
			echo "<META HTTP-EQUIV='Refresh' CONTENT='0; URL=login.php'>";
		}
	}
?>
<!DOCTYPE html>
<html>
	<head>
		<title>上中下布局</title>
		<meta name="viewport" content="width=device-width; initial-scale=1.0">
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<link rel="stylesheet" type="text/css" href="css/index.css">
		<link rel="stylesheet" type="text/css" href="css/scroll.css">
	</head>
	
	<body>
		<div class="header">
			<div class="logo">
				<img src="img\logo_hust.png" class="logo_img logo_hust">
				<img src="img\logo_ksc.jpg" class="logo_img logo_ksc">
				<span class="logo_img logo_title">孔小葱的个人主页</span>
				<input type="search" class="logo_img input_search"><button class=" logo_img bn_search"></button>
			</div>
			<div class="nav">
				<a href="#" class="nav_link">首&nbsp;&nbsp;&nbsp;&nbsp;页</a>
				<a href="#" class="nav_link">个人简介</a>
				<a href="#" class="nav_link">学习天地</a>
				<a href="#" class="nav_link">个人荣誉</a>
				<a href="#" class="nav_link">当前研究</a>
				<a href="#" class="nav_link">与我联系</a>
			</div>
			<div class="user">
				<span><?php echo $_COOKIE['userName']?></span><br>
				<span><?php if(isset($_SESSION['userId'])||isset($_COOKIE['userId'])) echo '<a href="logout.php">logout</a>'?></span>
			</div>
		</div>
		<div class="content">
			<div class="lecture-info">
				<div class="label">个人信息</div>
				<div class ="more">
					<a href="#">更多</a> >>
				</div>
				<div class="info rank">孔小葱的主页</div>
				<div class="info lec-details">
					<strong>姓&nbsp;名:</strong>
					<div class="lec-speaker">
						<span>孔思聪</span>
					</div></br>
					<div class="lec-speaker-title">
						<span>华中科技大学大四学生</br>电信学院12级提高班</span>
					</div></br>

					<strong>性&nbsp;别:</strong>
					<div>
						<span>男</br></span><br>
					</div>
					</br>
					
					<strong>民&nbsp;族:</strong>
					<div>
						<span>汉<br>
						</span><br>
					</div>
					</br>
					
					<strong>籍&nbsp;贯:</strong>
					<div>
						<span>湖北省荆门市沙洋县</span><br>
					</div>
				</div>
			</div>
			
			<div class="lecture-photo">
				<div class="scroll" id="scroll" >
					<ul>
						<li><a href="#"><img src="img/1.jpg" class="photo_scroll"></a></li
						><li><a href="#"><img src="img/2.jpg" class="photo_scroll"></a></li
						><li><a href="#"><img src="img/3.jpg" class="photo_scroll"></a></li
						><li><a href="#"><img src="img/4.jpg" class="photo_scroll"></a></li>

					</ul>
					<ol>
						<li class="active">1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
					</ol>
				</div>
			</div>
			<div class="news">
				<div class="label">最近文章</div>
				<div class ="more">
					<a href="#">更多</a> >>
				</div>
				<div class="news_detail">
					<a href="lec_previous.html">基于kinect的3D人脸识别研究</a>
					<span>2015.11.18</span>
				</div>
				<div class="news_detail ">
					<a href="lec_previous.html">基于摄像头的2D人脸识别研究</a>
					<span>2015.11.18</span>
				</div>
				<div class="news_detail">
					<a href="lec_previous.html">基于kinect的3D人脸识别研究</a>
					<span>2015.11.18</span>
				</div>
				<div class="news_detail">
					<a href="lec_previous.html">基于摄像头的2D人脸识别研究</a>
					<span>2015.11.18</span>
				</div>
			</div
			><div class="team">
				<div class="label">个人收藏</div>
				<div class ="more">
					<a href="#">更多</a> >>
				</div>
					<div class="team_detail">
						<a href="team.html">【健身文化】多读书，多看报，少吃零食多睡觉</a>
						<span>2015.11.18</span>
					</div>
					<div class="team_detail">
						<a href="team.html">【健身文化】多读书，多看报，少吃零食多睡觉</a>
						<span>2015.11.18</span>
					</div>
					<div class="team_detail">
						<a href="team.html">【健身文化】多读书，多看报，少吃零食多睡觉</a>
						<span>2015.11.18</span>
					</div>
					<div class="team_detail">
						<a href="team.html">【健身文化】多读书，多看报，少吃零食多睡觉</a>
						<span>2015.11.18</span>
					</div>
			</div>
		</div>
		<div class="footer">
			<div class="footer_text">
				<span class="copyright">&copy; made by kongsicong | 湖北省武汉市洪山区珞喻路1037号 &nbsp;&nbsp;<a href="#" class="inner_web">内部网登录</a></span>
			</div>
		</div>
		<script type = "text/javascript" language = "javascript" src = "js/move.js"></script>
		<script type="text/javascript" src="js/scroll.js"></script>
	</body>
</html>