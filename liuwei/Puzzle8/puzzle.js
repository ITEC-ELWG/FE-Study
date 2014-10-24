$(function() {
    var clickObject = $('#9');
    var zeroObject = $('#9');
    var zeroId = parseInt(zeroObject.attr('id'));
    var clickId = parseInt(clickObject.attr('id'));
    var puzzleVal;
    var puzzleNum;


    function movePermission(zeroObject, clickObject) {
        var zeroX, zeroY, clickX, clickY;
        var moveActionVal;

        zeroId = parseInt(zeroObject.attr('id'));
        clickId = parseInt(clickObject.attr('id'));

        zeroX = (zeroId - 1) / puzzleNum;
        zeroX = Math.floor(zeroX);
        zeroY = (zeroId - 1) % puzzleNum;

        clickX = (clickId - 1) / puzzleNum;
        clickX = Math.floor(clickX);
        clickY = (clickId - 1) % puzzleNum;

        if (Math.abs(clickX - zeroX) + Math.abs(clickY - zeroY) == 1) {
            if (clickX == zeroX) {
                if (clickY - zeroY == 1) {
                    moveActionVal = 'left';
                } else {
                    moveActionVal = 'right';
                }
            } else if (clickX - zeroX == 1) {
                moveActionVal = 'up';
            } else {
                moveActionVal = 'down';
            }
            moveAction(zeroObject, clickObject, moveActionVal);
            return true;
        } else {
            return false;
        }
    }

    function moveAction(zeroObjectGet, clickObjectGet, moveActionVal) {
        var numTemp;

        clickObjectGet.css('z-index', 1);

        switch (moveActionVal) {
            case 'left':
                clickObjectGet.animate({
                    'left': '-=102px'
                }, 300);
                zeroObject.animate({
                    'left': '+=102px'
                }, 10);
                break;
            case 'right':
                clickObjectGet.animate({
                    'left': '+=102px'
                }, 300);
                zeroObject.animate({
                    'left': '-=102px'
                }, 10);
                break;
            case 'up':
                clickObjectGet.animate({
                    'top': '-=102px'
                }, 300);
                zeroObject.animate({
                    'top': '+=102px'
                }, 10);
                break;
            case 'down':
                clickObjectGet.animate({
                    'top': '+=102px'
                }, 300);
                zeroObject.animate({
                    'top': '-=102px'
                }, 10);
                break;
            default:
                break;
        }
        numTemp = clickObjectGet.attr('id');
        clickObjectGet.attr('id',zeroObject.attr('id'));
        zeroObject.attr('id',numTemp);
        // //exchange nums
        // numTemp = clickObjectGet.html();
        // zeroObjectGet.html(numTemp);
        // clickObjectGet.html('');
        // //change zeroObject
        // zeroObject = clickObjectGet;
    }

    function judgeFinished() {
        var getFinished = true;
        $('.green').each(function(index) {
            if ($(this).html() != $(this).attr('id')) {
                getFinished = false;
            }
            return;
        });
        if (getFinished) {
            alert('You win!');
        }
    }

    $('#btn').on("click", function() {
        var $this = $(this);
        //var puzzleNum;
        puzzleVal = $('.input-num').val();
        if ((puzzleVal < 2) || (puzzleVal > 20)) {
            alert("Please input a legal number(1<num<21)!")
            return;
        }
        puzzleNum = parseInt(puzzleVal);
        $(".puzzle-box").css('width', function() {
            return puzzleNum * 102;
        });
        $(".puzzle-box").css('height', function() {
            return puzzleNum * 102;
        });
        $.ajax({
            url: "puzzle.php",
            type: "POST",
            data: {
                num: puzzleVal,
                num1: puzzleVal
            },
            dataType: "json",
            error: function() {
                alert('Error loading XML document');
            },
            success: function(data) { //如果调用php成功            
                var items = [];
                $('.puzzle-box').empty();
                for (var i = 0; i < data.length; i++) {
                    if (data[i] != data.length) {
                        $('<div>').addClass('green').html(data[i]).attr('id', i + 1).css('left','+=102px')
                            .appendTo('.puzzle-box');
                    } else {
                        zeroObject = $('<div>').addClass('blue').html('').attr('id', i + 1)
                            .appendTo('.puzzle-box');
                        //zeroObject.removeClass('green');
                    }
                }
            }
        });
    })


    $('.puzzle-box').on('click', '.green', function() {
        var movePermiFlog;
        var getFinished;
        clickObject = $(this);
        // clickNum = $(this).html;
        movePermiFlog = movePermission(zeroObject, clickObject);
        // if (movePermiFlog) {
        //     moveAction(zeroObject, clickObject);
        // } else {}

        judgeFinished();
    });
});
