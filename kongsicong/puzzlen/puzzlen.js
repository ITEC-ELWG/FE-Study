//判定玩家是否胜利
function isWin(bn_group,n) {
	var n = parseInt($("input").val());
	var long = $(bn_group[0]).outerWidth();
	for (var i = bn_group.length - 1; i >= 0; i--) {
		var x = $(bn_group[i]).position();
		if (x.left == (i%n)*long && x.top==parseInt(i/n)*long) continue;
		else return false;
	}
	return true;
}
//初始化各个数字位置
function initPosition(position,bn_group,n) {
	var long = $(bn_group[0]).outerWidth();
	for (var i = n*n - 1; i >= 0; i--) {
		$(bn_group[i]).css("top",parseInt(position[i]/n)*long);
		$(bn_group[i]).css("left",position[i]%n*long);
	}
}
//判断点击数字能否移动
function isAbleToMove(position,empty_position,n){
	var is=false;
	if (position - empty_position == 1) {
		for (var i = 1; i < n-1; i++) {
			if( position == i*n) return false;
		};
		is = true;
	};
	if(empty_position - position == 1) {
		for (var i = 1; i < n-1; i++) {
			if( empty_position == i*n) return false;
		};
		is = true;
	};
	if (Math.abs(empty_position - position) == n) is=true;
	return is;
}
//判断按下方向键能否有数字移动
function isAbleToMoveByKey(key,empty_position,n){
	is = false;
	if (key == 37) {
		for (var i = 0; i < n; i++) {
			if (empty_position == n-1+i*n) return false;
		};
		is = true;
	}
	if (key == 38) {
		for (var i = 0; i < n; i++) {
			if (empty_position == i + n*(n-1)) return false;
		};
		is = true;
	}
	if (key == 39) {
		for (var i = 0; i < n; i++) {
			if (empty_position == i*n) return false;
		};
		is = true;
	}
	if (key == 40) {
		for (var i = 0; i < n; i++) {
			if (empty_position == i) return false;
		};
		is = true;
	}
	return is;
}
 //找到在特定位置的数字元素
function findElementInPosition(position,bn_group,n){
	var long = bn_group.outerWidth();
	for (var i = bn_group.length - 1; i >= 0; i--) {
		var p = $(bn_group[i]).position();
		if(p.left == position%n*long && p.top == parseInt(position/n)*long)
			return bn_group[i];
	};
}
//使用键盘移动
function moveByKey(empty_position,offset,n){
	var long = $(".bn-number").outerWidth();
	var bn = findElementInPosition(empty_position+offset,$(".bn-number"),n);
	$(bn).css("top", parseInt(empty_position/n)*long);
	$(bn).css("left", empty_position%n*long);
	return empty_position+offset;
}
//重置游戏
var empty_position = 0;
$(".reset").click(function(){
	var n = parseInt($("input").val());
	//输入检测
	if (n<2||n>10||isNaN(n)) {
	 	$("input").val("输入错误");
	 	return ;
	 };
	$(".bn-number").remove();
	var position_seq = new Array();
	$.get("reset.php?n="+n*n,function(data,status){
		var data=data.split("-");
		// alert(data);
		for (var i = 0; i < data.length -1; i++) {
			position_seq[i] = parseInt(data[i]);
		};
		empty_position = parseInt(data[n*n-1]);//取最后一个数字为未放数字空位置
		//生成n*n框图，并配置属性
		var appStr="";
		for (var i = 1; i < n*n; i++) {
			appStr = appStr + '<button class="bn-number">' + i +"</button>"
		};
		$(".puzzlen").append(appStr);
		$(".puzzlen").css("width",n*50);
		$(".puzzlen").css("height",n*50);
		$(".bn-number").css("width",50);
		$(".bn-number").css("height",50);
		$(".bn-number").css("position","absolute");
		$(".bn-number").css("background","#1BBC9B");
		$(".bn-number").css("border","1px solid gray");
		//初始化各个数字位置
		initPosition(position_seq,$(".bn-number"),n);
		//点击数字移动
		$(".bn-number").click(function(){
			var n = parseInt($("input").val());
			var x = $(this).position();
			var long = $(this).outerWidth();
			empty_position = empty_position;
			var position = x.top/long*n + x.left/long;
			if (isAbleToMove(position,empty_position,n)) {
				$(this).css("top",parseInt(empty_position/n)*long);
				$(this).css("left",parseInt(empty_position%n)*long);
				empty_position = position;
			}
			if (isWin($(".bn-number"))) alert("you win");
		});
	});
});
 
 
//按下键盘移动
$("body").keyup(function(){
	// alert(empty_position);
	var n = parseInt($("input").val());
	if(event.which == 37){                          //按下左键
		if (isAbleToMoveByKey(37,empty_position,n)) {
			empty_position = moveByKey(empty_position,1,n);
		};
	}else if(event.which == 38){                    //按下上键
		if (isAbleToMoveByKey(38,empty_position,n)) {
			empty_position = moveByKey(empty_position,n,n);
		};
	}else if(event.which == 39){					//按下右键
		if (isAbleToMoveByKey(39,empty_position,n)) {
			empty_position = moveByKey(empty_position,-1,n);
		};
	}else if(event.which == 40){					//按下下键
		if (isAbleToMoveByKey(40,empty_position,n)) {
			empty_position = moveByKey(empty_position,-n,n);
		};
	}else {
		return ;
	}
	// alert(empty_position);
	if (isWin($(".bn-number"))) alert("you win");
});






