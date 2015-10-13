$(document).ready(function(){
	$("p").click(function(){
		Move(this,1);
		Move(this,-1);
		Move(this,3);
		Move(this,-3);
	});
	function Move(node,step){
		var tag=parseInt(node.className.split("grid")[1]);
		if($("p."+"grid"+(tag+step)).attr("class")!=undefined&&$("p."+"grid"+(tag+step)).attr("class").indexOf("blank")!=-1){
			var data;
			var name;
			name="p."+"grid"+(tag+step);
			data=$(node).text();//为什么是$(this)而不是this？？？只有通过jquery的封装才能用其相关方法/////////*********************
			$(node).text("");
			$(name).text(data);
			$(node).addClass("blank");
			$(name).removeClass("blank");
		}
	}
	
});