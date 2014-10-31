var inputs;
function initInputBtn(){
	inputs = document.getElementsByTagName("input");

	for (var i = 0; i < inputs.length; i++) {
		inputs[i].onclick = function(){
			input(this);
		};
	}
}


function input(element){
	inputs[0].value += element.value;
}

window.onload = initInputBtn;