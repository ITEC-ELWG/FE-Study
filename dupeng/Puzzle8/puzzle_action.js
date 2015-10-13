$(document).ready(function(){
	Win();
	$("p").click(function(){
		Move(this,1);
		Move(this,-1);
		Move(this,3);
		Move(this,-3);
		Win();
	});
	$(document).keyup(function(e){//设置键盘的点击事件
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
		Win();
	});
	function Move(node,step){//根据当前被操作模块进行移动 step的值分别表示:上移(-3),左移(-1),右移(1),下移(3)。
		var tag=parseInt(node.className.split("grid")[1]);
		if(canMove(tag,step)&&$("p."+"grid"+(tag+step)).attr("class").indexOf("blank")!=-1){
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
	function canMove(location,step){//判断特定位置能移动的方向,如位置1处只能向右、下两个方向移动。
		if((location==1&&step==-1)||(location==1&&step==-3)||(location==2&&step==-3)||(location==3&&step==-3)||(location==3&&step==1)
			||(location==4&&step==-1)||(location==6&&step==1)||(location==7&&step==-1)||(location==7&&step==3)
			||(location==8&&step==3)||(location==9&&step==1)||(location==9&&step==3)){
			return false;
		}else{
			return true;
		}
	}
});