<!DOCTYPE html>
<html>
	<head>
		<title>上中下布局</title>
		<meta name="viewport" content="width=device-width; initial-scale=1.0">
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<link rel="stylesheet" type="text/css" href="css/index.css">
	</head>
	<body>
		<div id="header">
			<h1>Mikong's Home Page</h1>
			<div id="nav">
				<button><a href="#">Home</a></button>
				<button><a href="#">Info</a></button>
				<button><a href="#">Blog</a></button>
				<button><a href="#">Cont</a></button>
			</div>
			<?php 
				if(!isset($_SESSION['account'])){
					if(!isset($_COOKIE['account'])){
						echo '<div class="account"><a href="login.php">login</a><br><a href="register.php">register</a></div>';
					}else{
						$user=$_COOKIE['account'];
						echo '<div class="account"><span>'. $user.'</span><br><a href="logout.php">log out</a></div>';
					}
				}else{
					$user=$_SESSION['account'];
					echo '<div class="account"><span>'. $user.'</span><br><a href="logout.php">log out</a></div>';
				}
			?>
		</div>
		<div id="content">
			<div class="main">
				<h2>中国共产党第十八届中央委员会第五次全体会议公报</h2>
				<div> 
					<p>中国共产党第十八届中央委员会第五次全体会议，于2015年10月26日至29日在北京举行。</p>
					<p>出席这次全会的有，中央委员199人，候补中央委员156人。中央纪律检查委员会常务委员会委员和有关方面负责同志列席了会议。党的十八大代表中部分基层同志和专家学者也列席了会议。全会由中央政治局主持。中央委员会总书记习近平作了重要讲话.</p>
					<p>全会听取和讨论了习近平受中央政治局委托作的工作报告，审议通过了《中共中央关于制定国民经济和社会发展第十三个五年规划的建议》。习近平就《建议（讨论稿）》向全会作了说明。</p>
					<p>全会充分肯定党的十八届四中全会以来中央政治局的工作。一致认为，面对国内外形势的深刻复杂变化特别是经济下行压力加大的挑战，中央政治局高举中国特色社会主义伟大旗帜，全面贯彻党的十八大和十八届三中、四中全会精神，以马克思列宁主义、毛泽东思想、邓小平理论、“三个代表”重要思想、科学发展观为指导，深入贯彻习近平总书记系列重要讲话精神，团结带领全党全军全国各族人民，坚持“四个全面”战略布局，坚持统筹国内国际两个大局，坚持稳中求进工作总基调，积极引领经济发展新常态，着力推进改革开放，加强和创新宏观调控，有效化解各种风险和挑战，保持经济平稳较快发展和社会和谐稳定，开展“三严三实”专题教育，隆重纪念中国人民抗日战争暨世界反法西斯战争胜利70周年，党和国家各项事业取得了新的重大成就。</p>
                </div>
			</div>
			<div class="main">
				<h2>“全面放开二孩”落地需经4程序 抢生属违法要罚款</h2>
				<div>
					<p>以“单独二孩”政策的推出为参照系，全面放开二孩要落地，恐怕至少要经历4个关键程序：第1关：中共中央的决定;第2关：国务院制定调整意见，全国人大常委会批准;第3关：各地实施方案报批;第4关：地方人大修订计生条例。国家卫计委下属的中国人口与发展研究中心主任姜卫平昨日表示，全面落实该政策还需等待各地人大修改地方的法律之后，方可最终落地。</p>
					<h3>开放二孩要先修法</h3>
					<p>姜卫平透露，全面放开二孩的政策落实应该是参照“单独二孩”政策的实施。他强调，全面放开二孩依旧需要依法落实，首先有个修法的过程。</p>
　　         		<p>2013年11月，十八届三中全会决定启动实施“单独二孩”政策。当年12月国务院就向全国人大常委会提交了“调整完善生育政策的议案                        ”，12月末的全国人大常委会就通过中共中央、国务院印发的《关于调整完善生育政策的意见》。</p>
　　           		
　　           		<p>该《意见》明确了各地落实“单独二孩”的实施方案。首先，各省(区市)的政府制定实施方案，接着报国务院主管部门(
					即国家卫计委备案)。之后，各省人大或其常委会修订地方性法规。</p>


                </div>
			</div>
			<div class="main">
				<h2>蔡依林演唱会在建舞台灯架坍塌 致1死10多伤</h2>
				<div>
				<p>10月29日下午5时许，广西体育中心内，蔡依林演唱会正在进行舞台搭建，灯架突然坍塌，据悉，已造成一人死亡，十数人受伤。参与此次演唱会的会务公司相关人士透露，灯架坍塌可能与预算有关。</p>
    			<p>随后，蔡依林本人也在微博上对此事做出了回应，她称自己内心十分难过，并呼吁大家为伤亡者祈祷：“知道事故消息，內心十分难过，一起为伤亡的工作人员祈祷。”</p>
   				<p>此前，正在广西体育馆内搭建的舞台，是为了10月31日蔡依林PLAY世界巡回演唱会广西站做准备。已有的事故现场图片显示，数条大型灯架倾斜或脱落，据悉，已造成一人死亡，十数人受伤。</p>
   				</div>
			</div>
		</div>
		<div id="footer">
			<span>copyright:© Mikong 2015-10-30</span>
			<span><a href="#nav">want more interesting and click me</a></span>
		</div>
	</body>
</html>