//这个数组记录当前每个位置上的方块情况
var nowStatus = new Array(0, 1, 2, 3, 4, 5, 6, 8, 7);
//var initStatus = new Array;
var setStatus = new Array();
//这个数组用于判断是否游戏过关成功
var success = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8);

function valueGet(e) {
    //vget存储当前点击到的方块的值
    var vget = e.value;
    document.getElementById("test").innerHTML = vget;
    //找出当前点击的那一块在游戏方格中的位置，并保存在k中 
    for (var i = 0; i < 9; i++) {
        if (nowStatus[i] == vget) {
            var k = i;
            document.getElementById("test2").innerHTML = k;
            break;
        }
    }
    return k;
}

function set(nowstatus,setStatus) 
{
    //根据给定的initStatus值设定nowStatues值并且排列界面！
    for (var i = 0; i < 9; i++) {
        if (nowstatus[i] != 8) {
            var setNum = nowstatus[i] + 1;
            $("[value=" + setStatus[i] + "]").text(setNum)
                //先要把之前设置的属性移出再添加，相当于修改class
                .removeClass()
                .addClass("number")
                .attr({
                    "id": nowstatus[i]
                    //"value": nowstatus[i]
                });
        } else if (nowstatus[i] === 8) {
            $("[value=" + setStatus[i] + "]").text("9")
                .removeClass()
                .addClass("special")
                .attr({
                    "id": 8
                    //"value": 8
                });
        }
    }
    //分两次设置，解决BUG了！！
    for (var j = 0;j < 9;j++){
            $("#" + nowStatus[j]).attr({"value":nowstatus[j]});
    }
}



$(document).ready(function() {
    $(".buttonCss").click(function() {
        //用setStatus将当前的nowStatus暂存下来
        setStatus = nowStatus;
        $.ajax({
            url: "../php/initStatus.php",
            type: "POST",
            dataType: "json",
            success: function(data) {
                nowStatus = data;
                set(nowStatus,setStatus);
            },
            async: false
        });
        
        //for (var j = 0;j < 9;j++)
        //{
             //var temp= $("ul li:eq("+setStatus[j]+")").text();
             //nowStatus[j] = temp - 1;
             //nowStatus[j] = initStatus[j];
        //}


    });
});


$(document).ready(function() {
    $("ul li").click(function() {
        //valueGet()函数放在这里调用
        var p = valueGet(this);
        if (nowStatus[p] != 8) {
            switch (p) {
                //所有的交换针对位置和抽象的位置上的value值，而不应该是具体的常数值
                case 0:
                    {
                        if (nowStatus[1] == 8) {
                            $("#" + nowStatus[0]).animate({
                                left: "+=200px"
                            }, 100);
                            $("#" + nowStatus[1]).animate({
                                left: "-=200px"
                            }, 100);

                            nowStatus[1] = nowStatus[0];
                            nowStatus[0] = 8;
                     

                        } else if (nowStatus[3] == 8) {
                            /*当下面有多个动画时：如果是关于同一个元素的同一类型动作，那么是按照顺序执行，如果是关于不同元素的，那么同时执行*/
                            $("#" + nowStatus[0]).animate({
                                top: "+=200px"
                            }, 100);
                            $("#" + nowStatus[3]).animate({
                                top: "-=200px"
                            }, 100);

                            nowStatus[3] = nowStatus[0];
                            nowStatus[0] = 8;

                        }
                        break;
                    }
                case 1:
                    {
                        if (nowStatus[0] == 8) {
                            $("#" + nowStatus[1]).animate({
                                left: "-=200px"
                            }, 100);
                            $("#" + nowStatus[0]).animate({
                                left: "+=200px"
                            }, 100);


                            nowStatus[0] = nowStatus[1];
                            nowStatus[1] = 8;
                        } else if (nowStatus[2] == 8) {
                            $("#" + nowStatus[1]).animate({
                                left: "+=200px"
                            }, 100);
                            $("#" + nowStatus[2]).animate({
                                left: "-=200px"
                            }, 100);


                            nowStatus[2] = nowStatus[1];
                            nowStatus[1] = 8;

                        } else if (nowStatus[4] == 8) {
                            $("#" + nowStatus[1]).animate({
                                top: "+=200px"
                            }, 100);
                            $("#" + nowStatus[4]).animate({
                                top: "-=200px"
                            }, 100);


                            nowStatus[4] = nowStatus[1];
                            nowStatus[1] = 8;

                        }
                        break;
                    }
                case 2:
                    {
                        if (nowStatus[1] == 8) {
                            $("#" + nowStatus[2]).animate({
                                left: "-=200px"
                            }, 100);
                            $("#" + nowStatus[1]).animate({
                                left: "+=200px"
                            }, 100);


                            nowStatus[1] = nowStatus[2];
                            nowStatus[2] = 8;
                        } else if (nowStatus[5] == 8) {
                            $("#" + nowStatus[2]).animate({
                                top: "+=200px"
                            }, 100);

                            $("#" + nowStatus[5]).animate({
                                top: "-=200px"
                            }, 100);

                            nowStatus[5] = nowStatus[2];
                            nowStatus[2] = 8;

                        }
                        break;
                    }
                case 3:
                    {
                        if (nowStatus[0] == 8) {
                            $("#" + nowStatus[3]).animate({
                                top: "-=200px"
                            }, 100);

                            $("#" + nowStatus[0]).animate({
                                top: "+=200px"
                            }, 100);

                            nowStatus[0] = nowStatus[3];
                            nowStatus[3] = 8;
                        } else if (nowStatus[4] == 8) {
                            $("#" + nowStatus[3]).animate({
                                left: "+=200px"
                            }, 100);
                            $("#" + nowStatus[4]).animate({
                                left: "-=200px"
                            }, 100);


                            nowStatus[4] = nowStatus[3];
                            nowStatus[3] = 8;

                        } else if (nowStatus[6] == 8) {
                            $("#" + nowStatus[3]).animate({
                                top: "+=200px"
                            }, 100);
                            $("#" + nowStatus[6]).animate({
                                top: "-=200px"
                            }, 100);


                            nowStatus[6] = nowStatus[3];
                            nowStatus[3] = 8;

                        }
                        break;
                    }
                case 4:
                    {
                        if (nowStatus[1] == 8) {
                            $("#" + nowStatus[4]).animate({
                                top: "-=200px"
                            }, 100);
                            $("#" + nowStatus[1]).animate({
                                top: "+=200px"
                            }, 100);


                            nowStatus[1] = nowStatus[4];
                            nowStatus[4] = 8;
                        } else if (nowStatus[3] == 8) {
                            $("#" + nowStatus[4]).animate({
                                left: "-=200px"
                            }, 100);
                            $("#" + nowStatus[3]).animate({
                                left: "+=200px"
                            }, 100);


                            nowStatus[3] = nowStatus[4];
                            nowStatus[4] = 8;

                        } else if (nowStatus[5] == 8) {
                            $("#" + nowStatus[4]).animate({
                                left: "+=200px"
                            }, 100);
                            $("#" + nowStatus[5]).animate({
                                left: "-=200px"
                            }, 100);


                            nowStatus[5] = nowStatus[4];
                            nowStatus[4] = 8;

                        } else if (nowStatus[7] == 8) {
                            $("#" + nowStatus[4]).animate({
                                top: "+=200px"
                            }, 100);
                            $("#" + nowStatus[7]).animate({
                                top: "-=200px"
                            }, 100);


                            nowStatus[7] = nowStatus[4];
                            nowStatus[4] = 8;

                        }
                        break;
                    }
                case 5:
                    {
                        if (nowStatus[2] == 8) {
                            $("#" + nowStatus[5]).animate({
                                top: "-=200px"
                            }, 100);
                            $("#" + nowStatus[2]).animate({
                                top: "+=200px"
                            }, 100);


                            nowStatus[2] = nowStatus[5];
                            nowStatus[5] = 8;
                        } else if (nowStatus[4] == 8) {
                            $("#" + nowStatus[5]).animate({
                                left: "-=200px"
                            }, 100);
                            $("#" + nowStatus[4]).animate({
                                left: "+=200px"
                            }, 100);


                            nowStatus[4] = nowStatus[5];
                            nowStatus[5] = 8;

                        } else if (nowStatus[8] == 8) {
                            $("#" + nowStatus[5]).animate({
                                top: "+=200px"
                            }, 100);
                            $("#" + nowStatus[8]).animate({
                                top: "-=200px"
                            }, 100);


                            nowStatus[8] = nowStatus[5];
                            nowStatus[5] = 8;

                        }
                        break;
                    }
                case 6:
                    {
                        if (nowStatus[3] == 8) {
                            $("#" + nowStatus[6]).animate({
                                top: "-=200px"
                            }, 100);
                            $("#" + nowStatus[3]).animate({
                                top: "+=200px"
                            }, 100);


                            nowStatus[3] = nowStatus[6];
                            nowStatus[6] = 8;
                        } else if (nowStatus[7] == 8) {
                            $("#" + nowStatus[6]).animate({
                                left: "+=200px"
                            }, 100);
                            $("#" + nowStatus[7]).animate({
                                left: "-=200px"
                            }, 100);


                            nowStatus[7] = nowStatus[6];
                            nowStatus[6] = 8;

                        }
                        break;
                    }
                case 7:
                    {
                        if (nowStatus[4] == 8) {
                            $("#" + nowStatus[7]).animate({
                                top: "-=200px"
                            }, 100);
                            $("#" + nowStatus[4]).animate({
                                top: "+=200px"
                            }, 100);


                            nowStatus[4] = nowStatus[7];
                            nowStatus[7] = 8;
                        } else if (nowStatus[6] == 8) {
                            $("#" + nowStatus[7]).animate({
                                left: "-=200px"
                            }, 100);
                            $("#" + nowStatus[6]).animate({
                                left: "+=200px"
                            }, 100);


                            nowStatus[6] = nowStatus[7];
                            nowStatus[7] = 8;

                        } else if (nowStatus[8] == 8) {
                            $("#" + nowStatus[7]).animate({
                                left: "+=200px"
                            }, 100);
                            //jQuery中属性选择器加变量的问题
                            $("#" + nowStatus[8]).animate({
                                left: "-=200px"
                            }, 100);


                            nowStatus[8] = nowStatus[7];
                            nowStatus[7] = 8;
                        }
                        break;
                    }
                case 8:
                    {
                        if (nowStatus[5] == 8) {
                            $("#" + nowStatus[8]).animate({
                                top: "-=200px"
                            }, 100);
                            $("#" + nowStatus[5]).animate({
                                top: "+=200px"
                            }, 100);


                            nowStatus[5] = nowStatus[8];
                            nowStatus[8] = 8;
                        } else if (nowStatus[7] == 8) {
                            $("#" + nowStatus[8]).animate({
                                left: "-=200px"
                            }, 100);
                            $("#" + nowStatus[7]).animate({
                                left: "+=200px"
                            }, 100);


                            nowStatus[7] = nowStatus[8];
                            nowStatus[8] = 8;
                        }
                        break;
                    }
            }
        }
        for (var i = 0; i < 9; i++) {
            var successTag = 0;
            if (nowStatus[i] != success[i]) {
                successTag = 1;
                break;
            }
        }

        if (successTag == 0) {
            //document.getElementById("test").innerHTML = "successful!!";
            alert("恭喜过关，请按重置按钮开始下一轮游戏！");
        }
    });
})
