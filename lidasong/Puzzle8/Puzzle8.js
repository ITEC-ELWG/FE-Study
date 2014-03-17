var buttonType = ["#buttonOne", "#buttonTwo", "#buttonThree", "#buttonFour", "#buttonFive", "#buttonSix", "#buttonSeven", "#buttonEight"];
var topButton, leftCheck, topBlank, leftBlank;

function clickButton(value) {
    buttonChoose = $(buttonType[value - 1]);
    blankGet = $("#blank");
    move();
    suceessCheck();
}

function move() {
    topButton = buttonChoose.offset().top;
    leftCheck = buttonChoose.offset().left;
    leftBlank = blankGet.offset().left;
    topBlank = blankGet.offset().top;
    if (leftCheck == leftBlank) {
        if ((topButton + 104) == topBlank) {
            blankGet.animate({
                top: '-=104px'
            });
            buttonChoose.animate({
                top: '+=104px'
            });
        } else if ((topButton - 104) == topBlank) {
            blankGet.animate({
                top: '+=104px'
            });
            buttonChoose.animate({
                top: '-=104px'
            });
        }
    } else if (topButton == topBlank) {
        if ((leftCheck + 100) == leftBlank) {
            blankGet.animate({
                left: '-=100px'
            });
            buttonChoose.animate({
                left: '+=100px'
            });
        } else if ((leftCheck - 100) == leftBlank) {
            blankGet.animate({
                left: '+=100px'
            });
            buttonChoose.animate({
                left: '-=100px'
            });
        }
    }
}

function suceessCheck() {
    if ($(buttonType[0]).offset().top > $(buttonType[3]).offset().top || $(buttonType[3]).offset().top > $(buttonType[6]).offset().top)
        return;
    if ($(buttonType[0]).offset().top == $(buttonType[1]).offset().top && $(buttonType[1]).offset().top == $(buttonType[2]).offset().top)

    {
        if ($(buttonType[0]).offset().left + 100 == $(buttonType[1]).offset().left && $(buttonType[1]).offset().left + 100 == $(buttonType[2]).offset().left) {} else return;
    } else return;

    if ($(buttonType[3]).offset().top == $(buttonType[4]).offset().top && $(buttonType[4]).offset().top == $(buttonType[5]).offset().top) {
        if ($(buttonType[3]).offset().left + 100 == $(buttonType[4]).offset().left && $(buttonType[4]).offset().left + 100 == $(buttonType[5]).offset().left) {} else return;
    } else return;

    if ($(buttonType[6]).offset().top == $(buttonType[7]).offset().top && $(buttonType[6]).offset().left + 100 == $(buttonType[7]).offset().left)

        alert("You succeed,Congratulations!");
    else return;
}
