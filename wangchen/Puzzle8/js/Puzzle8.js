var grid = new Array('1','2','3','4','5','6','7','8');
var standard = new Array('1','2','3','4','5','6','7','8','0');
var check = new Array('picOne','picTwo','picThree','picFour','picFive','picSix','picSeven','picEight','picZero');
var trueGrid = new Array();
var empty = 8;

window.onload = function () {
	grid.sort(function() {return 0.5 - Math.random(); });
	$(document).ready(function() {
		$("#picOne").children().text(grid[0]);
		$("#picTwo").children().text(grid[1]);
		$("#picThree").children().text(grid[2]);
		$("#picFour").children().text(grid[3]);
		$("#picFive").children().text(grid[4]);
		$("#picSix").children().text(grid[5]);
		$("#picSeven").children().text(grid[6]);
		$("#picEight").children().text(grid[7]);
	});
	grid[8] = '0';
	trueGrid[0] = $("#picOne").children().text();
	trueGrid[1] = $("#picTwo").children().text();
	trueGrid[2] = $("#picThree").children().text();
	trueGrid[3] = $("#picFour").children().text();
	trueGrid[4] = $("#picFive").children().text();
	trueGrid[5] = $("#picSix").children().text();
	trueGrid[6] = $("#picSeven").children().text();
	trueGrid[7] = $("#picEight").children().text();
	trueGrid[8] = '0';
}

function getEventTarget(e) {
	var targ;
	e = e || window.event;
	targ = e.target || e.srcElement;
	var tname =targ.tagName;
	var tId = targ.id;
	var tText = $("div#" + tId).text();
	$(document).ready(function() {
		$("div#" + tId).unbind();
		$("div#" + tId).click(function() {
			if (tId == check[empty - 1]) {			
				$("div#" + tId).animate({
				left: '+=130px'
				}, 300);
				var cache = check[empty - 1];
				check[empty - 1] = check[empty];
				check[empty] = cache;
				var cache1 = trueGrid[empty - 1];
				trueGrid[empty - 1] = trueGrid[empty];
				trueGrid[empty] = cache1;
				empty = empty - 1;
			}
			else if (tId == check[empty + 1]) {
				$("div#" + tId).animate({
				left: '-=130px'
				}, 300);
				var cache = check[empty + 1];
				check[empty + 1] = check[empty];
				check[empty] = cache;
				var cache1 = trueGrid[empty + 1];
				trueGrid[empty + 1] = trueGrid[empty];
				trueGrid[empty] = cache1;
				empty = empty + 1;
			}
			else if (tId == check[empty - 3]) {
				$("div#" + tId).animate({
				top: '+=130px'
				}, 300);
				var cache = check[empty - 3];
				check[empty - 3] = check[empty];
				check[empty] = cache;
				var cache1 = trueGrid[empty - 3];
				trueGrid[empty - 3] = trueGrid[empty];
				trueGrid[empty] = cache1;
				empty = empty - 3;
			}
			else if (tId == check[empty + 3]) {
				$("div#" + tId).animate({
				top: '-=130px'
				}, 300);
				var cache = check[empty + 3];
				check[empty + 3] = check[empty];
				check[empty] = cache;
				var cache1 = trueGrid[empty + 3];
				trueGrid[empty + 3] = trueGrid[empty];
				trueGrid[empty] = cache1;
				empty = empty + 3;
			}
			else {
				return;
			}
		});
	});
}

function compare() {
	if (trueGrid.toString() == standard.toString()) {
		alert("U did it!");
	}
	else{
		alert("come on~ U will get it in 7 steps(at most)~");
	}
}









