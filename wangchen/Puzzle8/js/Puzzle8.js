var grid = ['1', '2', '3', '4', '5', '6', '7', '8'];
var standard = ['1', '2', '3', '4', '5', '6', '7', '8', '0'];
var check = ['picOne', 'picTwo', 'picThree', 'picFour', 'picFive', 'picSix', 'picSeven', 'picEight', 'picZero'];
var empty = 8;

$(document).ready(function() {
	grid.sort(function() {
		return 0.5 - Math.random();
	});
	$(document).ready(function() {
		for (var i = 0; i < 8; i++) {
			$($("span")[i]).text(grid[i]);
		}
	});
	grid[8] = '0';
});

function getEventTarget(e) {
	var targ;
	e = e || window.event;
	targ = e.target || e.srcElement;
	var tId = targ.id;
	$("#" + tId).unbind();
	$("#" + tId).click(function() {
		for (var i = -3; i < 4; i = i + 2) {
			if (tId == check[empty + i]) {
				var cache = check[empty + i];
				check[empty + i] = check[empty];
				check[empty] = cache;
				var cache1 = grid[empty + i];
				grid[empty + i] = grid[empty];
				grid[empty] = cache1;
				empty = empty + i;
				switch (i) {
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
				return;
			}
			continue;
		}
	});
	if (grid[0] == standard[0]) {
		$(".result").html("完成");
	}
}

function compare() {
	if (grid.toString() != standard.toString()) {
		$(".result").html("未完成");
		return;
	}
	else if (grid.toString() == standard.toString()) {
		$(".result").html("完成");
	}
}






