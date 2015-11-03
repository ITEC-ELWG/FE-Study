<?php

//检查是否已经设置了cookies，如果没有，那么跳到登陆界面
 if (!isset($_COOKIE['username']) || (!isset($_COOKIE['password'])))
     {       
    // echo'<meta http-equiv = refresh content ="0;url = error.php">';
    //在页面执行之前执行，这样可以避免闪现登陆后的页面
     header('Location:error.php');
     }

?>

<!DocType HTML>
<html lang="zh-cmn-hans">


<head>
<meta charset="utf-8">
<meta name="author" content="">
<meta name="copyright" content="">
<meta name="keywords" content="">
<meta name="description" content="">

<title>刘贵的个人主页</title>
<link rel="stylesheet" type="text/css" href="../css/reset.css">
<link rel="stylesheet" type="text/css" href="../css/pagecss.css">	
</head>


<body class="bgimg">

<div class="lowz"><img src="../image/pagebg.jpg"/></div>

<div class="topz">
<div class="topindex">
	<div class="topindex-title">刘贵的个人简历</div>
	<ul class="title-ul">
		<li><p title="目录">目录：</p></li>
		<li><a title="基本信息" href="#basic-information">基本信息</a></li>
		<li><a title="教育背景" href="#aboutedu">教育背景</a></li>
		<li><a title="校外实践" href="#outs">校外实践</a></li>
		<li><a title="课外活动" href="#activity">课外活动</a></li>
		<li><a title="奖励资质" href="#aw">奖励资质</a></li>
	</ul>
</div>	


<div class="basicinfor">
    <ul>
    <li><a name="basic-information">电话：15527596509</a></li>
    <li>邮箱：lghustcic@126.com</li>
    <li>地址：湖北省武汉市洪山区珞瑜路1037号华中科技大学韵苑公寓23栋102室</li>
    <li>邮政编码：430074</li>
    <li>联系QQ：1169430612</li>
	
    </ul>

    <div class=basicimg>
    	<img src="../image/myself.jpg">
    </div>
</div>

<div class="education">
     <div class="education-h1"><h1><a name="aboutedu">教育背景</a></h1></div>
     <hr/>
     <div class="education-master">
     	<ul>
     		<li>2015.9-2018.7</li>
     		<li>华中科技大学</li>
     		<li>信息与通信工程</li>
     		<li>学术型硕士</li>
     	</ul>
     </div>

     <div class="education-master">
         <ul>
         	<li>2011.9-2015.7</li>
         	<li>华中科技大学</li>
         	<li>电子信息工程</li>
         	<li>工学学士</li>
         </ul>
     </div>

     <div class="education-college"><!--有关字体的控制写在div里面而不是写在ul里面-->
     	<ul >
     		<li>加权成绩：86.15</li>
     		<li>部分课程：</li>
     		<li>计算机网络（98）</li>
     		<li>数据挖掘（98）</li>
     		<li>概率论（100）</li>
     		<li>微机原理（98）</li>
     	</ul>
     </div>

     <div class="education-senior">
     		<h1 class="education-senior-h1">2008.9-2011.8</h1>
     		<h2 class="education-senior-h2">安徽省潜山野寨中学</h2>
     		<div class="education-college">
     			<ul>
     				<li>高考成绩</li>
     				<li>语文（120）</li>
     				<li>数学（125）</li>
     				<li>英语（138）</li>
     				<li>理综（251）</li>
     				<li>总分（634）</li>
     			</ul>
     		</div>
     </div>        
</div>

<div class="outschool">
	<div class="education-h1"><h1><a name="outs">校外实践</a></h1></div>
	<hr/>
	<div class="education-master">
		<h1 class="education-senior-h1">2011.7-2011.8</h1>
		<h2 class="education-senior-h2"> 辅导一位从初三进入高中的学生数学、英语、物理、生物四十天</h2>
    </div>
    <div class="ulli">
		<ul><li>
		每天准时到学生家里上课，帮助学生提前适应高中学习，学生成绩明显提高，家长非常满意
		</li></ul>
    </div>
		
    <div class="education-master">
		   <ul>
		   <li>2012.4</li>
		   <li>IBM</li>
		   <li>校园大使</li>
		   <li>华中科技大学</li>	
		   </ul>
    </div>
		 

	<div class="ulli">
		 	<ul>
		 		<li>联系合适的人选一起组建一个团队，长期接受这种校园大使工作</li>
		 		<li>严格按照要求，每天选择合适的时间以及最有效的地点贴海报（300）和发传单（200），并拍照及时反馈</li>
		 		<li>招聘会现场座无虚席，300多人到场参加，得到了招聘人员的肯定</li>
		 	</ul>
	</div>   
	<div class="education-master">
        <ul>
        	<li>2014.7 </li>
        	<li>固纬电子</li>
        	<li>实习生</li>
        	<li>苏州</li>
        </ul>
	</div> 
	<div class="ulli">
		 	<ul>
		 		<li>了解产品的生产流程，熟悉了各种测量仪器的使用，公司的运营管理和岗位职责，确定了自己的职业规划</li>
		 		<li>和带队老师一起负责组织和协调各种活动，实习结束后得到总经理的赞扬，并获得奖金（3/15）</li>
		 	</ul>
	</div>     
</div>

<div class="activity">
	<div class="education-h1"><h1><a name="activity">课外活动</a></h1></div>
     <hr/>
     <div class="education-master">
        <ul>
        	<li>2011.9-2012.12 </li>
        	<li>华科CIC</li>
        	<li>执行副总监 </li>
        	<li>华中科技大学</li>
        </ul>
	</div> 
	<div class="ulli">
		 	<ul>
		 		<li>协助学长学姐共同组建华科CIC团队，策划了三次讲座和一次分享会</li>
		 		<li>协助管理团队，并对外与其他高校保持联系，参加峰会活动，交流经验，积累人脉</li>
		 	</ul>
	</div>  

    <div class="education-master">
        <ul>
        	<li>2011.9-2012.3 </li>
        	<li>书法协会</li>
        	<li>干事 </li>
        	<li>华中科技大学</li>
        </ul>
	</div> 
	<div class="ulli">
		 	<ul>
		 		<li>
		 		参加书法培训，负责华工杯书法篆刻大赛东校区宣传与作品收集，协助部长举办两次路演，提升了自己的组织能力</li>
		 	</ul>
	</div> 

	 <div class="education-master">
        <ul>
        	<li>2011.9-2012.3</li>
        	<li>市场营销协会</li>
        	<li>干事 </li>
        	<li>华中科技大学</li>
        </ul>
	</div> 
	<div class="ulli">
		 	<ul>
		 		<li>参与圣诞节天使宝贝计划活动，与了天天校拼网的校园推广活动，个人为其增加了80人的注册量</li>
		 	</ul>
	</div>  

    <div class="education-master">
        <ul>
        	<li>2011.9-2012.9 </li>
        	<li>电信1101班</li>
        	<li>文艺委员 </li>
        	<li>华中科技大学</li>
        </ul>
	</div> 
	<div class="ulli">
		 	<ul>
		 		<li>加入年级学生会文艺部，竞选为文艺部副部长，制作了宣传板，协助学生会举办了校园达人秀</li>
		 		<li>协助团支书举办特色团日活动，独立策划路演部分，得到了同学们的肯定</li>
		 	</ul>
	</div>

    <div class="education-master">
        <ul>
        	<li>2012.9-今  </li>
        	<li>电信1101班</li>
        	<li> 班长 </li>
        	<li>华中科技大学</li>
        </ul>
	</div> 
	<div class="ulli">
		 	<ul>
		 		<li>督促班级学习情况，制定自习自我检查制度，转变班级学风，成绩明显好转</li>
		 		<li>按时下发学校通知，确保通知的时效性和有效性，及时反馈同学的情况，做好教务工作</li>
		 		<li>不定期开展班级活动，每学期组织班级春游或秋游等，增进同学之间的感情，加强班级凝聚力</li>
		 	</ul>
	</div>
   
    <div class="education-master">
        <ul>
        	<li>2012.3-2013.7 </li>
        	<li>电工电子基地</li>
        	<li> 学员 </li>
        	<li>华中科技大学</li>
        </ul>
	</div> 
	<div class="ulli">
		 	<ul>
		 		<li>利用周末和暑假时间参加相关技术课程的学习，提升自己的专业能力，使时间利用更加充分</li>
		 		<li>制作红外报警器，了解了报警器的基本原理，增强了自己的动手能力</li>
		 	</ul>
	</div>

	<div class="education-master">
        <ul>
        	<li>2014.3-2014.7</li>
        	<li>铱元素电子大赛</li>
        	<li> 参赛队员 </li>
        	<li>华中科技大学</li>
        </ul>
	</div> 
	<div class="ulli">
		 	<ul>
		 		<li>组队参加赛灵思铱元素杯电子设计大赛，用verilog语言和NEXYS4开发板做打砖块游戏设计</li>
		 		<li>比赛结果获二等奖，个人被评优</li>
		 	</ul>
	</div>
    <div class="education-master">
	<h1 class="education-senior-h1">2014.3-2014.6</h1>
     		<h2 class="education-senior-h2">与同学组队制作循迹智能小车，商定总体设计方案，负责红外通信模块，熟悉了嵌入式系统应用</h2>
    </div>
</div>

<div class="award">
    <div class="education-h1"><h1><a name="aw">奖励与资质</a></h1></div>
	<hr/>
	<div class="education-master">
	<h1 class="education-senior-h1">奖励：</h1>
	</div>

	<div class="up">
		<ul>
			<li>2008年获潜山县优秀学生干部</li>
			<li>2009年获野寨中学启航奖学金（60/936）</li>
			<li> 2009年获校级三好学生</li>
			<li>2009年获全校英语竞赛三等奖</li>
			<li>2011年获全市生物竞赛三等奖</li>
			<li>2011年获华工杯书法篆刻大赛优秀奖</li>
			<li>2012年获自强奖学金</li>
			<li>2013年获华中科技大学优秀学生干部称号</li>
			<li>2013年获优秀学生干部奖学金</li>
		</ul>
	</div>	
</div>

<div class="qualification">
	<div class="education-master">
	    <h1 class="education-senior-h1">资质：</h1>
	</div>

    <div class="up">
    	<ul>
    		<li>能较熟练的用英语与外国友人交流</li>
    		<li>普通话水平考试二甲证书（87.9）</li>
    		<li>英语四级（555）    英语六级（546） </li>
    		<li>计算机四级网络工程师 </li>
    		<li>能使用MS Word、MS Powerpoint、MS Excel处理相关文档</li>
    		<li> 参加“家史传承”公益项目，举办多次活动</li>
    		<li>累计担任十三年班长，三年学习委员，学生工作经验丰富</li>
    		<li>中国共产党预备党员</li>
    		<li>中考分数为学校历史最高分（60年），并保留至今 </li>
    		<li> 对计算机较了解，帮身边的人选购计算机并且帮助日常维护工作</li>
    	</ul>
    </div>
</div>

<div class="topindex">
    <div class="copyright">
    		<p>Copyright ©2014 刘贵</p>

    		<p>湖北省武汉市华中科技大学互联网中心</p>
    	
    </div>
	
</div>
</div>

<div>
    <form action="outlog.php" method="post">
    <!--只有使用submit才能传，使用button不能传过去-->
    <input type="submit" class="outlog" name="outlog" value="退出登录"/>
    </form>
</div>
</body>
</html>