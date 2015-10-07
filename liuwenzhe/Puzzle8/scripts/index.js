$(document).ready(function() {
    var block_array = new Array();
    var position_array = new Array();

    $(".create-block-btn").click(function() {
        $.get("http://localhost/Puzzle8/service/create_block.php", {
                num: $("input").val()
            },
            function(data, status) {
                var data = jQuery.parseJSON(data);
                block_array = data.array;
                position_array = data.array;
                genBlocks(data.array, data.line_num);
                initClick();
            }), 'json';
    });

    function genBlocks(array, line_num) {
        var mainContainer = $(".main-container");
        mainContainer.empty();

        for (var i = 0; i < line_num; i++) {
            for (var k = 0; k < line_num; k++) {
                if (array[i][k] == 0) {
                    $("<div/>").addClass("pull-left block").html("").appendTo(mainContainer);
                } else {
                    $("<div/>").addClass("pull-left block number-block-color").html(array[i][k]).appendTo(mainContainer);
                }
            };
        };
        mainContainer.css({"height":100*line_num+'px', "width":100*line_num+'px'});
        initBlockPosition(line_num);
    }

    function initBlockPosition(line_num) {
        for (var i = 0; i < line_num; i++) {
            for (var k = 0; k < line_num; k++) {
                var num = i * line_num + k;
                var block = $('.main-container').find('.block:eq(' + num + ')')
                block.css({
                    'top': i * 100 + 'px',
                    'left': k * 100 + 'px'
                });
            };
        };
    }

    function initClick() {
        $(".block").click(function(event) {
            $.get("http://localhost/Puzzle8/service/move_block.php", {
                    value: $(this).html(),
                    array: block_array
                },
                function(data, status) {
                    console.log("Data: " + data + "\nStatus: " + status);
                    var data = jQuery.parseJSON(data);

                    if (data.result != 0) {
                        block_array = data.array;
                        moveBlocks($(event.target), $(".empty-block-color"), data.animation, data.result);
                    };
                }), 'json';
        });
    }

    function moveBlocks(block1, block2, animation, result) {
        switch (animation) {
            case 'right':
                block1.animate({
                    left: "-=100px"
                }, function() {
                    binggo(result);
                });
                break;
            case 'left':
                block1.animate({
                    left: "+=100px"
                }, function() {
                    binggo(result);
                });
                break;
            case 'bottom':
                block1.animate({
                    top: "-=100px"
                }, function() {
                    binggo(result);
                });
                break;
            case 'top':
                block1.animate({
                    top: "+=100px"
                }, function() {
                    binggo(result);
                });
                break;
            default:
                break;
        }
    }

    function binggo(result) {
        if (result == 2) {
            alert('binggo');
        };
    }

    //键盘事件监听，上：38，左：37，右：39，下：40
    $(document).on("keyup", function(event) {
        console.log(event.keyCode);
        if (event.keyCode > 36 && event.keyCode < 41) {
            $.get("http://localhost/Puzzle8/service/key_event.php", {
                    key_num: event.keyCode,
                    array: block_array
                },
                function(data, status) {
                    console.log("Data: " + data + "\nStatus: " + status);
                    var data = jQuery.parseJSON(data);

                    if (data.result != 0) {
                        block_array = data.array;
                        for (var i = 0; i < block_array.length; i++) {
                            for (var k = 0; k < block_array.length; k++) {
                                if (position_array[i][k] == data.value) {
                                    var position = i * block_array.length + k;
                                };
                            };
                        };
                        var block = $('.main-container').find('.block:eq(' + position + ')');
                        moveBlocks(block, $(".empty-block-color"), data.animation, data.result);
                    };
                }), 'json';
        };
    });
});
