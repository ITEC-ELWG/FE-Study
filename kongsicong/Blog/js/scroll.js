window.onload = function () {
	var oDiv = document.getElementById("scroll");
	scroll(oDiv);
}

function scroll (obj) {
	var oUl = obj.getElementsByTagName("ul")[0];
	var oBn = obj.getElementsByTagName("ol")[0].getElementsByTagName("li");
	var oImg = obj.getElementsByTagName("ul")[0].getElementsByTagName("li");
	var long = parseInt(getStyle(obj,"width"));
	for ( var i = 0; i < oImg.length; i++){
		oImg[i].style.width = long + 'px';
	}

	oUl.style.width = long*oBn.length + 'px';
	var now = 0;
	for ( var i=0 ; i < oBn.length ; i++) {
		oBn[i].index = i;
		oBn[i].onclick = function () {
			now = this.index;
			tab();
		}
	}
	function tab () {
		for ( var i = 0; i< oBn.length; i++) {
			oBn[i].className = "";
		}
		oBn[now].className = "active";
		startMove(oUl , {"left":-now*long});
	}
	function next() {
		now++;
		if( now == oBn.length) {
			now = 0;
		}
		tab();
	}
	var timer = setInterval(next,2000);

	obj.onmouseover = function () {
		clearInterval(timer);
	}
	obj.onmouseout = function () {
		timer = setInterval(next,2000);
		
	} 
}