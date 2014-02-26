 var clearFlag=false;

  function getNum(num){
  var objresult=document.getElementById("result");
  if(clearFlag){
   objresult.value="";
   clearFlag=false;
  }
 objresult.value+=num;
 }

function getResult(){
 var objresult=document.getElementById("result");
 objresult.value=eval(objresult.value);
 clearFlag=true;
}

function Del(){
 var objresult=document.getElementById("result");
 objresult.value=objresult.value.substring(0,objresult.value.length-1);
}

function Clear(){
 var objresult=document.getElementById("result");
 objresult.value=objresult.value.substring(0,0);
}





