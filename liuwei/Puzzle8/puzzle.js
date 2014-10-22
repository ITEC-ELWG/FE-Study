$(function() {
    var clickObject = $('#9');
    var zeroObject = $('#9');
    var zeroId = parseInt(zeroObject.attr('id'));
    var clickId = parseInt(clickObject.attr('id'));

    function movePermission(zeroObject, clickObject) {
        var moveNum1 = 0;
        var moveNum2 = 0;
        var moveNum3 = 0;
        var moveNum4 = 0;

        zeroId = parseInt(zeroObject.attr('id'));
        clickId = parseInt(clickObject.attr('id'));

        switch (zeroId) {
            case 1:
                moveNum1 = 2;
                moveNum2 = 4;
                break;
            case 2:
                moveNum1 = 1;
                moveNum2 = 3;
                moveNum3 = 5;
                break;
            case 3:
                moveNum1 = 2;
                moveNum2 = 6;
                break;
            case 4:
                moveNum1 = 1;
                moveNum2 = 5;
                moveNum3 = 7;
                break;
            case 5:
                moveNum1 = 2;
                moveNum2 = 4;
                moveNum3 = 6;
                moveNum4 = 8;
                break;
            case 6:
                moveNum1 = 3;
                moveNum2 = 5;
                moveNum3 = 9;
                break;
            case 7:
                moveNum1 = 4;
                moveNum2 = 8;
                break;
            case 8:
                moveNum1 = 5;
                moveNum2 = 7;
                moveNum3 = 9;
                break;
            case 9:
                moveNum1 = 6;
                moveNum2 = 8;
                break;
            default:
                break;
        }
        if ((clickId == moveNum1) || (clickId == moveNum2) || (clickId == moveNum3) ||
            (clickId == moveNum4)) {
            return true;
        } else return false;
    }

    function moveAction(zeroObjectGet, clickObjectGet) {
        var numTemp;

        // exchange style
        clickObjectGet.removeClass("green");
        zeroObjectGet.removeClass("blue");
        clickObjectGet.addClass("blue");
        zeroObjectGet.addClass("green");
        //exchange nums
        numTemp = clickObjectGet.html();
        zeroObjectGet.html(numTemp);
        clickObjectGet.html('');
        //change zeroObject
        zeroObject = clickObjectGet;
    }

    function judgeFinished() {
        if (($('#1').html() == '1') && ($('#2').html() == '2') && ($('#3').html() == '3') &&
            ($('#4').html() == '4') && ($('#5').html() == '5') && ($('#6').html() == '6') &&
            ($('#7').html() == '7') && ($('#8').html() == '8') && ($('#9').html() == ''))
            alert("You win!");
    }

    $('#btn').on("click", function() {
        var $this = $(this);

        $.getJSON("puzzle.php", function(data) {
            var items = [];
            $(data).each(function(index, val) {
                switch (index) {
                    case 0:
                        $("#1").html(val);
                        break;
                    case 1:
                        $("#2").html(val);
                        break;
                    case 2:
                        $("#3").html(val);
                        break;
                    case 3:
                        $("#4").html(val);
                        break;
                    case 4:
                        $("#5").html(val);
                        break;
                    case 5:
                        $("#6").html(val);
                        break;
                    case 6:
                        $("#7").html(val);
                        break;
                    case 7:
                        $("#8").html(val);
                        break;
                    case 8:
                        $("#9").html(val);
                        break;
                    default:
                        break;
                }
            });
            $('#1, #2, #3, #4, #5, #6, #7, #8, #9').removeClass("green blue");
            $('#1, #2, #3, #4, #5, #6, #7, #8, #9').addClass("green");
            for (i = 1; i <= 9; i++)
                if ($('#' + i).html() == '9') {
                    $('#' + i).html('');
                    $('#' + i).removeClass("green");
                    $('#' + i).addClass("blue");
                    zeroObject = $('#' + i);
                }
        });

    })

    $('#1, #2, #3, #4, #5, #6, #7, #8, #9').on("click", function() {
        var movePermiFlog;
        clickObject = $(this);
        // clickNum = $(this).html;
        movePermiFlog = movePermission(zeroObject, clickObject);
        if (movePermiFlog) {
            moveAction(zeroObject, clickObject);
        } else {}
        judgeFinished();
    });
});
