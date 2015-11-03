$(document).ready(function() {
	var grid = ['1', '2', '3', '4', '5', '6', '7', '8'];//实际数组，跟所看的块的位置所对应的数组，用来与标准数组比较进行判断游戏是否完成
	var standard = ['1', '2', '3', '4', '5', '6', '7', '8', '0'];//标准数组，用来判断游戏是否完成
	var check = ['picOne', 'picTwo', 'picThree', 'picFour', 'picFive', 'picSix', 'picSeven', 'picEight', 'picZero'];//块的ID
	var empty = 8;//默认空块的位置
	//对实际数组进行随机排序
	grid.sort(function() {
		return 0.5 - Math.random();
	});
	//将其排序后的实际数组赋给每个块
	for (var i = 0; i < 8; i++) {
		$($(".blockIn")[i]).text(grid[i]);
	}
	grid[8] = '0';
	//重置键
	$(".buttonReset").click(function() {
		$.get('demo.php', function(data) {
			grid = JSON.parse(data);
			for (var i = 0; i < 8; i ++) {
				$($(".blockIn")[i]).text(grid[i]);
			}
			grid[8] = '0';
		});
	});
	//点击块后的行为
	$(".wrapper").click(function(e) {
		var tId = e.target.id;
		$("#" + tId).unbind();
		//通过判断空的地方与被点击块的相对位置来进行响应
		for (var i = 0; i < 4; i ++) {
			var n = 2 * i - 3; 
			//如果被点击的块与空块相邻则进行块的移动和实际数组的改变
			if (tId == check[empty + n]) {
				var cache = check[empty + n];
				check[empty + n] = check[empty];
				check[empty] = cache;
				var cache1 = grid[empty + n];
				grid[empty + n] = grid[empty];
				grid[empty] = cache1;
				empty = empty + n;
				//若被点击的块与空块相邻，则有四种情况
				switch (n) {
					case -1:
						$("#" + tId).animate({
							left: '+=130px'
						}, 300);
						break;
					case 1:
						$("#" + tId).animate({
							left: '-=130px'
						}, 300);
						break;
					case -3:
						$("#" + tId).animate({
							top: '+=130px'
						}, 300);
						break;
					case 3:
						$("#" + tId).animate({
							top: '-=130px'
						}, 300);
						break;
				}
				//每次移动块后判断游戏是否成功
				if (grid.toString() == standard.toString()) {
					$(".result").html("U did it !");
				}
				return;
			}
			continue;
		}

	});
});