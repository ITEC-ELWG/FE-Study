var buttonType = ["buttonOne", "buttonTwo", "buttonThree", "buttonFour",
 "buttonFive", "buttonSix", "buttonSeven", "buttonEight"];
var topButton, leftCheck, topBlank, leftBlank;
var buttonChoose;
/*window.onload=function(){         //设置input中value的初始值
  for(var i=0;i<=7;i++)
  {
    $(buttonType[i]).attr({"value":i+1});
  }
}*/
function loadXMLDoc(){          //Ajax获得randArrange.php中的数据
  var xmlhttp;
  if(window.XMLHttpRequest)
  {
    xmlhttp=new XMLHttpRequest();
  }
  else
  {
    xmlhttp=new ActuveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {      
        backString=xmlhttp.responseText;
    for(var i=0;i<=7;i++)     //通过返回字符串重新设置value
    {                                     //并且相应改变buttonType
        var charGet=backString.charAt(i);
        //alert(charGet);
        $('#'+buttonType[i]).attr({"value":charGet});
        $('#'+buttonType[i]).attr({"id":buttonType[charGet-1]});
        //buttonType[i]=buttonTypeChange[charGet-1];
        //alert(buttonType[i]);
    }
    }
  }
xmlhttp.open("GET","randArrange.php",true);
xmlhttp.send();
}

function clickButton(id){
    buttonChoose = $('#'+id);
    blankGet = $("#blank");
    move();
    setTimeout("suceessCheck()",500);

}
function move() {                   //经过比对,移动相应按钮
    topButton = buttonChoose.offset().top;
    leftCheck = buttonChoose.offset().left;
    leftBlank = blankGet.offset().left;
    topBlank = blankGet.offset().top;
    if (leftCheck == leftBlank) {
        if ((topButton + 104) == topBlank) {
            blankGet.animate({
                top: '-=104px'
            },500);
            buttonChoose.animate({
                top: '+=104px'
            },500);
        } else if ((topButton - 104) == topBlank) {
            blankGet.animate({
                top: '+=104px'
            });
            buttonChoose.animate({
                top: '-=104px'
            },500);   
        }
    } else if (topButton == topBlank) {
        if ((leftCheck + 100) == leftBlank) {
            blankGet.animate({
                left: '-=100px'
            },500);
            buttonChoose.animate({
                left: '+=100px'
            },500)
        } else if ((leftCheck - 100) == leftBlank) {
            blankGet.animate({
                left: '+=100px'
            },500);
            buttonChoose.animate({
                left: '-=100px'
            },500);
        }
    }
}
function suceessCheck() {               //成功检测
    if ($(buttonType[0]).offset().top > $(buttonType[3]).offset().top
     || $(buttonType[3]).offset().top > $(buttonType[6]).offset().top
     ||$(buttonType[7]).offset().left>blankGet.offset().left)
        return;
    if ($(buttonType[0]).offset().top == $(buttonType[1]).offset().top 
      && $(buttonType[1]).offset().top == $(buttonType[2]).offset().top)

    {
        if ($(buttonType[0]).offset().left + 100 == $(buttonType[1]).offset().left 
          && $(buttonType[1]).offset().left + 100 == $(buttonType[2]).offset().left) 
          {} 
        else return;
    } 
    else return;
    if ($(buttonType[3]).offset().top == $(buttonType[4]).offset().top 
      && $(buttonType[4]).offset().top == $(buttonType[5]).offset().top) {
        if ($(buttonType[3]).offset().left + 100 == $(buttonType[4]).offset().left
         && $(buttonType[4]).offset().left + 100 == $(buttonType[5]).offset().left) 
          {}
           else return;
    }
     else return;
    if ($(buttonType[6]).offset().top == $(buttonType[7]).offset().top 
      && $(buttonType[6]).offset().left + 100 == $(buttonType[7]).offset().left)
        alert("You succeed,Congratulations!");
    else return;
}
