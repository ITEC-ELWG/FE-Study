var buttonType = ["#buttonOne", "#buttonTwo", "#buttonThree", "#buttonFour",
 "#buttonFive", "#buttonSix", "#buttonSeven", "#buttonEight"];
 var buttonTypeChange=[];
var topButton, leftCheck, topBlank, leftBlank;
function loadXMLDoc(){
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
         for(var i=0;i<=7;i++)
    {
        var charGet=backString.charAt(i);
        $(buttonType[i]).text(charGet);
        buttonTypeChange[i]=buttonType[charGet-1];
        //sortRandom();
    }
    for (var i = 0; i<=7; i++) {
      buttonType[i]=buttonTypeChange[i];
    }
    }
  }
xmlhttp.open("GET","randArrange.php",true);
xmlhttp.send();
}
function clickButton(value){
    buttonChoose = $(buttonType[value - 1]);
    blankGet = $("#blank");
    move();
    setTimeout("suceessCheck()",1000);
   // suceessCheck();
}

function move() {
  condition=false;
    topButton = buttonChoose.offset().top;
    leftCheck = buttonChoose.offset().left;
    leftBlank = blankGet.offset().left;
    topBlank = blankGet.offset().top;
    if (leftCheck == leftBlank) {
        if ((topButton + 104) == topBlank) {
            blankGet.animate({
                top: '-=104px'
            },"slow");
            buttonChoose.animate({
                top: '+=104px'
            },"slow");
        } else if ((topButton - 104) == topBlank) {
            blankGet.animate({
                top: '+=104px'
            });
            buttonChoose.animate({
                top: '-=104px'
            },"slow");   
        }
    } else if (topButton == topBlank) {
        if ((leftCheck + 100) == leftBlank) {
            blankGet.animate({
                left: '-=100px'
            },"slow");
            buttonChoose.animate({
                left: '+=100px'
            },"slow")
        } else if ((leftCheck - 100) == leftBlank) {
            blankGet.animate({
                left: '+=100px'
            },"slow");
            buttonChoose.animate({
                left: '-=100px'
            },"slow");
        }
    }

}

function suceessCheck() {

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
/*function sortRandom(){
for(var i=0;i<=7;i++)
{
  var charGet=backString.charAt(i);
  //var temp=backString[i];
  $(buttonType[i]).test(charGet);
  var interVariable=buttonType[charGet];
  buttonType[charGet]=buttonType[i];
  buttonType[i]=interVariable;
}
}*/