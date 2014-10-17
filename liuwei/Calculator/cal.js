
function num(temp){
	show.attr('value',  temp);

 $(function () {
 	 var show = $('.show');
 // 	$(".num").bind("click", function () {
	// num($(this).attr('id'));
 //            })
 $('.num').click(function(){
		num($(this).attr('id'));
	})




	//document.write("111");
}

});

