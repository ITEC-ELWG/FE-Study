$(document).ready(function(){
	var firNum = $('.firNum');
	var secNum = $('.secNum');
	var point = $('.point');
	var result = 0;
	var cas = $('.case');
	var show = $('.show');
	
	function caculate(temp) {
		switch(temp){
			case 'plus':
				result = parseFloat(firNum.attr('value')) + parseFloat(secNum.attr('value'));
				break;
			case 'delete':
				result = parseFloat(firNum.attr('value')) - parseFloat(secNum.attr('value'));
				break;
			case 'div':
				if(parseFloat(secNum.attr('value')) == 0){
					alert('can not div 0');
					clear();
				}
				else
					result = parseFloat(firNum.attr('value')) / parseFloat(secNum.attr('value'));
				break;
			case 'x':
				result = parseFloat(firNum.attr('value')) * parseFloat(secNum.attr('value'));
				break;
			case 'percentage':
				result = parseFloat(firNum.attr('value')) * parseFloat(secNum.attr('value')) / 100;
				break;
		}
		firNum.attr('value', result);
		secNum.attr('value', '');
		cas.attr('value', '');
		show.attr('value', result);
	}

	function addPoint() {
		if(point.attr('value') == 'y'){
			alert('error input');
		}
		else if(point.attr('value') == '') {
			point.attr('value', 'y');
			show.attr('value', show.attr('value') + '.');
			if(cas.attr('value') == ''){
				firNum.attr('value', firNum.attr('value') + '.');
				alert(firNum.attr('value'));
			} else {
				secNum.attr('value', secNum.attr('value') + '.');
			}
		}
	}

	function clear(){
		firNum.attr('value', '');
		secNum.attr('value', '');
		point.attr('value', '');
		cas.attr('value', '');
		show.attr('value', '');
	}

	function num(temp){
		if(cas.attr('value') == ''){
			if(firNum.attr('value') == ''){
				firNum.attr('value', temp);
				//alert(firNum.attr('value'));
				show.attr('value', show.attr('value') + temp);
			} else if(firNum.attr('value') == '.') {
				show.attr('value', show.attr('value') + temp);
				firNum.attr('value', parseFloat('0' + firNum.attr('value') + temp));
				//alert(firNum.attr('value'));
			} else if(firNum.attr('value') != 0){
				show.attr('value', show.attr('value') + temp);
				firNum.attr('value', parseFloat(firNum.attr('value') + temp));
				//alert(firNum.attr('value'));
			} else{
				show.attr('value', temp);
				firNum.attr('value', temp);
				//alert(firNum.attr('value'));
			}
		} else{
			if(secNum.attr('value') == ''){
				secNum.attr('value', temp);
				//alert(secNum.attr('value'));
				show.attr('value', show.attr('value') + temp);
			} else if(secNum.attr('value') == '.') {
				show.attr('value', show.attr('value') + temp);
				secNum.attr('value', parseFloat('0' + secNum.attr('value') + temp));
				//alert(secNum.attr('value'));
			} else if(secNum.attr('value') != 0){
				show.attr('value', show.attr('value') + temp);
				secNum.attr('value', parseFloat(secNum.attr('value') + temp));
				//alert(secNum.attr('value'));
			} else{
				show.attr('value', temp);
				secNum.attr('value', temp);
				//alert(secNum.attr('value'));
			}
		}
	}


	$('.po').click(function(){
		addPoint();
	});

	$('.clear').click(function(){
		clear();
	});

	$('.num').click(function(){
		num($(this).attr('id'));
	})

	$('.cacu').click(function(){
		if(firNum.attr('value') == ''){
			alert('error input');
		} else if(secNum.attr('value') == ''){
			cas.attr('value', $(this).attr('id'));
			point.attr('value', '');
			show.attr('value', show.attr('value') + $(this).text());
		} else{
			caculate(cas.attr('value'));
			show.attr('value', show.attr('value') + $(this).text());
			cas.attr('value', $(this).attr('id'));
			point.attr('value', '');
		}
	});

	$('.equal').click(function(){
		if(firNum.attr('value') == '')
			return;
		if(secNum.attr('value') == ''){
			show.attr('value', firNum.attr('value'));
			cas.attr('value', '');
		} else {
			caculate(cas.attr('value'));
		}
	});
});