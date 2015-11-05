
window.onload = function(){
	var show = document.getElementById("show");
	var result = document.getElementById("result");
	var AC = document.getElementById("AC");
	var del = document.getElementById("delete");
	var buttons = document.getElementsByTagName("button");
	var toggle = document.getElementById("switch");
	var str = "";
	for(var i = 0;i < buttons.length;i++){
		buttons[i].onclick = function(){
			str = str + this.innerHTML;
			show.value = str;
		}
	}
	var count = 1;
	toggle.onclick = function(){
		
		if(count%2 == 1){
			for(var i = 0;i < buttons.length;i++){
				if(i != 3)buttons[i].disabled = "true";
			}
		}
		else {
			for(var i = 0;i < buttons.length;i++){
				if(i != 3)buttons[i].disabled = "";
			}
		}
		show.value = "";
		count++;
	}
	del.onclick=function(){
		str = str.substr(0,str.length-1);
		show.value = str;
	}
	result.onclick = function(){
		var res = 0;
		var reg = /^(\d+(\.\d+)?[\+\-\*\/]\d+(\.\d+)?)|(\d+(\.\d+)?\%)$/;
		var r = str.match(reg);
		if(r!=null) {
			if(str.indexOf('%') != -1) res = parseFloat(str.split(/[%]/)[0]) / 100;
			else res = eval(str);
			show.value = res;
		}else {
			res = "input wrong"
		}
		str = "";
	}
	AC.onclick = function(){
		show.value = "0";
		str = "";
	}
}
