//判定玩家是否胜利
function isWin(bnGroup,n) {
	var n = parseInt($("input").val());
	var long = $(bnGroup[0]).outerWidth();
	for (var i = bnGroup.length - 1; i >= 0; i--) {
		var x = $(bnGroup[i]).position();
		if (x.left == (i%n)*long && x.top==parseInt(i/n)*long) continue;
		else return false;
	}
	return true;
}
//初始化各个数字位置
function initPosition(position,bnGroup,n) {
	var long = $(bnGroup[0]).outerWidth();
	for (var i = n*n - 1; i >= 0; i--) {
		$(bnGroup[i]).css("top",parseInt(position[i]/n)*long);
		$(bnGroup[i]).css("left",position[i]%n*long);
	}
}
//判断点击数字能否移动
function isAbleToMove(position,emptyPosition,n){
	var is=false;
	if (position - emptyPosition == 1) {
		for (var i = 1; i < n-1; i++) {
			if( position == i*n) return false;
		};
		is = true;
	};
	if(emptyPosition - position == 1) {
		for (var i = 1; i < n-1; i++) {
			if( emptyPosition == i*n) return false;
		};
		is = true;
	};
	if (Math.abs(emptyPosition - position) == n) is=true;
	return is;
}
//判断按下方向键能否有数字移动
function isAbleToMoveByKey(key,emptyPosition,n){
	is = false;
	if (key == 37) {
		for (var i = 0; i < n; i++) {
			if (emptyPosition == n-1+i*n) return false;
		};
		is = true;
	}
	if (key == 38) {
		for (var i = 0; i < n; i++) {
			if (emptyPosition == i + n*(n-1)) return false;
		};
		is = true;
	}
	if (key == 39) {
		for (var i = 0; i < n; i++) {
			if (emptyPosition == i*n) return false;
		};
		is = true;
	}
	if (key == 40) {
		for (var i = 0; i < n; i++) {
			if (emptyPosition == i) return false;
		};
		is = true;
	}
	return is;
}
 //找到在特定位置的数字元素
function findElementInPosition(position,bnGroup,n){
	var long = bnGroup.outerWidth();
	for (var i = bnGroup.length - 1; i >= 0; i--) {
		var p = $(bnGroup[i]).position();
		if(p.left == position%n*long && p.top == parseInt(position/n)*long)
			return bnGroup[i];
	};
}
//使用键盘移动
function moveByKey(emptyPosition,offset,n){
	var long = $(".bn-number").outerWidth();
	var bn = findElementInPosition(emptyPosition+offset,$(".bn-number"),n);
	$(bn).css("top", parseInt(emptyPosition/n)*long);
	$(bn).css("left", emptyPosition%n*long);
	return emptyPosition+offset;
}
//重置游戏
var emptyPosition = 0;
$(".reset").click(function(){
	var n = parseInt($("input").val());
	//输入检测
	if (n<2||n>10||isNaN(n)) {
	 	$("input").val("输入错误");
	 	return ;
	 };
	$(".bn-number").remove();
	var position_seq = new Array();
	//从服务器获取随机数字序列
	$.get("reset.php?",{n:n*n},function(data,status){
		var data=data.split("-");
		// alert(data);
		for (var i = 0; i < data.length -1; i++) {
			position_seq[i] = parseInt(data[i]);
		};
		emptyPosition = parseInt(data[n*n-1]);//取最后一个数字为未放数字空位置
		//生成n*n框图，并配置属性
		var appStr="";
		for (var i = 1; i < n*n; i++) {
			appStr = appStr + '<button class="bn-number">' + i +"</button>"
		};
		$(".puzzlen").append(appStr);
		$(".puzzlen").css("width",n*50);
		$(".puzzlen").css("height",n*50);
		//初始化各个数字位置
		initPosition(position_seq,$(".bn-number"),n);
		//点击数字移动
		$(".bn-number").click(function(){
			var n = parseInt($("input").val());
			var x = $(this).position();
			var long = $(this).outerWidth();
			emptyPosition = emptyPosition;
			var position = x.top/long*n + x.left/long;
			if (isAbleToMove(position,emptyPosition,n)) {
				$(this).css("top",parseInt(emptyPosition/n)*long);
				$(this).css("left",parseInt(emptyPosition%n)*long);
				emptyPosition = position;
			}
			if (isWin($(".bn-number"))) alert("you win");
		});
	});
});

//按下键盘移动
$("body").keyup(function(){
	// alert(emptyPosition);
	var n = parseInt($("input").val());
	if(event.which == 37){                          //按下左键
		if (isAbleToMoveByKey(37,emptyPosition,n)) {
			emptyPosition = moveByKey(emptyPosition,1,n);
		};
	}else if(event.which == 38){                    //按下上键
		if (isAbleToMoveByKey(38,emptyPosition,n)) {
			emptyPosition = moveByKey(emptyPosition,n,n);
		};
	}else if(event.which == 39){					//按下右键
		if (isAbleToMoveByKey(39,emptyPosition,n)) {
			emptyPosition = moveByKey(emptyPosition,-1,n);
		};
	}else if(event.which == 40){					//按下下键
		if (isAbleToMoveByKey(40,emptyPosition,n)) {
			emptyPosition = moveByKey(emptyPosition,-n,n);
		};
	}else {
		return ;
	}
	// alert(emptyPosition);
	if (isWin($(".bn-number"))) alert("you win");
});






