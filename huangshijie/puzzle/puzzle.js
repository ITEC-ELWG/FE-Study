$(document).ready(function(){
	var row = $('.row');
	var col = $('.col');

	function initialize(){
		var i = 1;
		var rand = 0;
		for(i; i < 9; i++) {
			rand = parseInt(Math.random() * 9 + 1);
			if($('#'+rand).text() == '')
				$('#'+rand).text(i);
			else {
				while(true){
					rand++;
					if(rand > 9) rand = 1;
					if($('#'+rand).text() == ''){
						$('#'+rand).text(i);
						break;
					}
				}
			}
		}

		for(i = 1; i < 10; i++) {
			if($('#'+i).text() == '') {
				col.attr('value', $('#'+i).attr('class'));
				row.attr('value', $('#'+i).parent().attr('class'));
				//alert(row.attr('value') + col.attr('value'));
				break;
			}
		}
	}

	function checkSuccess() {
		var i = 1;
		for(i; i < 9; i++) {
			if(parseInt($('#' + i).text()) != i) {
				return false;
			}
		}

		alert("you win");
	}

	function move(curCol, curRow) {
		var temp = '';
		posCol = col.attr('value');
		posRow = row.attr('value');
		curId = (parseInt(curRow) - 1) * 3 + parseInt(curCol);
		posId = (parseInt(posRow) - 1) * 3 + parseInt(posCol);
		if((curRow != posRow) && (curCol != posCol))
			return;
		if(curCol == posCol) {
			if(Math.abs(parseInt(curRow) - parseInt(posRow)) > 1)
				return;
			temp = $('#'+curId).text();
			$('#'+curId).text('');
			$('#'+posId).text(temp);
			col.attr('value', curCol);
			row.attr('value', curRow);
			return;
		}
		if(curRow == posRow) {
			if(Math.abs(parseInt(curCol) - parseInt(posCol)) > 1)
				return;
			temp = $('#'+curId).text();
			$('#'+curId).text('');
			$('#'+posId).text(temp);
			col.attr('value', curCol);
			row.attr('value', curRow);
			return;
		}

	}


	initialize();

	$('.reset').click(function(){
		$('td').text('');
		initialize();
	});

	$('td').click(function(){
		var curCol = $(this).attr('class');
		var curRow = $(this).parent().attr('class');
		move(curCol, curRow);
		checkSuccess();
	});
});