$(document).ready(function(){
	Win();
	$("p").click(function(){
		Move(this,1);
		Move(this,-1);
		Move(this,3);
		Move(this,-3);
		Win();
	});
	$(document).keyup(function(e){
		if(e.keyCode==37){
			for(var i=1;i<10;i++){
				if(Move($(".grid"+i).get(0),-1)==true){
					break;
				}
			}
		}else if(e.keyCode==38){
			for(var i=1;i<10;i++){
				if(Move($(".grid"+i).get(0),-3)==true){
					break;
				}
			}
		}else if(e.keyCode==39){
			for(var i=1;i<10;i++){
				if(Move($(".grid"+i).get(0),1)==true){
					break;
				}
			}
		}else if(e.keyCode==40){
			for(var i=1;i<10;i++){
				if(Move($(".grid"+i).get(0),3)==true){
					break;
				}
			}
		}
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
			return true;
		}else{
			return false;
		}
	}
	function Win(){
		for(var i=1;i<9;i++){
			if($("p.grid"+i).text()!=i){
				return;
			}
		}
		alert("You win the game!");
		window.location.reload();
	}
});