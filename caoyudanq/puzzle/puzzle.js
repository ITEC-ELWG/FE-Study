var dim =3;
$(document).ready(function(){
	initPuzzle();

});
function initPuzzle(){
	for(var i=0;i<dim;i++){
		$("<tr></tr>").appendTo("table");
	
	}
	for(var i=0;i<dim;i++){
		$("<td></td>").appendTo("tr");
	
	}
}