//这个数组记录当前每个位置上的方块情况
var nowStatus = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8);

var vget;
var k;

function valueGet(e) {
    vget = e.value;
    document.getElementById("test").innerHTML = vget;
    //找出当前点击的那一块在游戏方格中的位置，并保存在k中 
    for (var i = 0; i < 9; i++) {
        if (nowStatus[i] == vget) {
            k = i;
            document.getElementById("test2").innerHTML = k;
            break;
        }
    }
}

$(document).ready(function() {

    $(".number").click(function() {
        //valueGet()函数放在这里调用
        valueGet(this);
        if (nowStatus[k] != 8) {
            switch (k) {
                case 0:
                    {
                        if (nowStatus[1] == 8) {
                            $("#"+nowStatus[1]).animate({
                                left: "-=200px"
                            });
                            $("#"+nowStatus[0]).animate({
                                left: "+=200px"
                            });
                            nowStatus[1] = nowStatus[0];
                            nowStatus[0] = 8;
                            
                        } else if (nowStatus[3] == 8) {
                            /*当下面有多个动画时：如果是关于同一个元素的同一类型动作，那么是按照顺序执行，如果是关于不同元素的，那么同时执行*/
                            $("#"+nowStatus[3]).animate({
                                top: "-=200px"
                            });
                            $("#"+nowStatus[0]).animate({
                                top: "+=200px"
                            });
                            nowStatus[3] = nowStatus[0];
                            nowStatus[0] = 8;
                            
                        } 
                        break;
                    }
                case 1:
                    {
                        if (nowStatus[0] == 8) {
                            $("#"+nowStatus[1]).animate({
                                left: "-=200px"
                            });
                            $("#"+nowStatus[0]).animate({
                                left: "+=200px"
                            });
                            nowStatus[0] = nowStatus[1];
                            nowStatus[1] = 8;
                        } else if (nowStatus[2] == 8) {
                            $("#"+nowStatus[1]).animate({
                                left: "+=200px"
                            });
                            $("#"+nowStatus[2]).animate({
                                left: "-=200px"
                            });
                            nowStatus[2] = nowStatus[1];
                            nowStatus[1] = 8;
                            
                        } else if (nowStatus[4] == 8) {
                            $("#"+nowStatus[1]).animate({
                                top: "+=200px"
                            });
                            $("#"+nowStatus[4]).animate({
                                top: "-=200px"
                            });
                            nowStatus[4] = nowStatus[1];
                            nowStatus[1] = 8;
                            
                        } 
                        break;
                    }
                case 2:
                    {
                        if (nowStatus[1] == 8) {
                            $("#"+nowStatus[2]).animate({
                                left: "-=200px"
                            });
                            $("#"+nowStatus[1]).animate({
                                left: "+=200px"
                            });
                            nowStatus[1] = nowStatus[2];
                            nowStatus[2] = 8;
                        } else if (nowStatus[5] == 8) {
                            $("#"+nowStatus[2]).animate({
                                top: "+=200px"
                            });
                            $("#"+nowStatus[5]).animate({
                                top: "-=200px"
                            });
                            nowStatus[5] = nowStatus[2];
                            nowStatus[2] = 8;
                            
                        } 
                        break;
                    }
                case 3:
                    {
                        if (nowStatus[0] == 8) {
                            $("#"+nowStatus[3]).animate({
                                top: "-=200px"
                            });
                            $("#"+nowStatus[0]).animate({
                                top: "+=200px"
                            });
                            nowStatus[0] = nowStatus[3];
                            nowStatus[3] = 8;
                        } else if (nowStatus[4] == 8) {
                            $("#"+nowStatus[3]).animate({
                                left: "+=200px"
                            });
                            $("#"+nowStatus[4]).animate({
                                left: "-=200px"
                            });
                            nowStatus[4] = nowStatus[3];
                            nowStatus[3] = 8;
                            
                        } else if (nowStatus[6] == 8) {
                            $("#"+nowStatus[3]).animate({
                                top: "+=200px"
                            });
                            $("#"+nowStatus[6]).animate({
                                top: "-=200px"
                            });
                            nowStatus[6] = nowStatus[3];
                            nowStatus[3] = 8;
                            
                        } 
                        break;
                    }
                case 4:
                    {
                        if (nowStatus[1] == 8) {
                            $("#"+nowStatus[4]).animate({
                                top: "-=200px"
                            });
                            $("#"+nowStatus[1]).animate({
                                top: "+=200px"
                            });
                            nowStatus[1] = nowStatus[4];
                            nowStatus[4] = 8;
                        } else if (nowStatus[3] == 8) {
                            $("#"+nowStatus[4]).animate({
                                left: "-=200px"
                            });
                            $("#"+nowStatus[3]).animate({
                                left: "+=200px"
                            });
                            nowStatus[3] = nowStatus[4];
                            nowStatus[4] = 8;
                            
                        } else if (nowStatus[5] == 8) {
                            $("#"+nowStatus[4]).animate({
                                left: "+=200px"
                            });
                            $("#"+nowStatus[5]).animate({
                                left: "-=200px"
                            });
                            nowStatus[5] = nowStatus[4];
                            nowStatus[4] = 8;
                            
                        } else if (nowStatus[7] == 8) {
                            $("#"+nowStatus[4]).animate({
                                top: "+=200px"
                            });
                            $("#"+nowStatus[7]).animate({
                                top: "-=200px"
                            });
                            nowStatus[7] = nowStatus[4];
                            nowStatus[4] = 8;
                            
                        } 
                        break;
                    }
                case 5:
                    {
                        if (nowStatus[2] == 8) {
                            $("#"+nowStatus[5]).animate({
                                top: "-=200px"
                            });
                            $("#"+nowStatus[2]).animate({
                                top: "+=200px"
                            });
                            nowStatus[2] = nowStatus[5];
                            nowStatus[5] = 8;
                        } else if (nowStatus[4] == 8) {
                            $("#"+nowStatus[5]).animate({
                                left: "-=200px"
                            });
                            $("#"+nowStatus[4]).animate({
                                left: "+=200px"
                            });
                            nowStatus[4] = nowStatus[5];
                            nowStatus[5] = 8;
                            
                        } else if (nowStatus[8] == 8) {
                            $("#"+nowStatus[5]).animate({
                                top: "+=200px"
                            });
                            $("#"+nowStatus[8]).animate({
                                top: "-=200px"
                            });
                            nowStatus[8] = nowStatus[5];
                            nowStatus[5] = 8;
                            
                        } 
                        break;
                    }
                case 6:
                    {
                        if (nowStatus[3] == 8) {
                            $("#"+nowStatus[6]).animate({
                                top: "-=200px"
                            });
                            $("#"+nowStatus[3]).animate({
                                top: "+=200px"
                            });
                            nowStatus[3] = nowStatus[6];
                            nowStatus[6] = 8;
                        } else if (nowStatus[7] == 8) {
                            $("#"+nowStatus[6]).animate({
                                left: "+=200px"
                            });
                            $("#"+nowStatus[7]).animate({
                                left: "-=200px"
                            });
                            nowStatus[7] = nowStatus[6];
                            nowStatus[6] = 8;
                            
                        } 
                        break;
                    }
                case 7:
                    {
                        if (nowStatus[4] == 8) {
                            $("#"+nowStatus[7]).animate({
                                top: "-=200px"
                            });
                            $("#"+nowStatus[4]).animate({
                                top: "+=200px"
                            });
                            nowStatus[4] = nowStatus[7];
                            nowStatus[7] = 8;
                        } else if (nowStatus[6] == 8) {
                            $("#"+nowStatus[7]).animate({
                                left: "-=200px"
                            });
                            $("#"+nowStatus[6]).animate({
                                left: "+=200px"
                            });
                            nowStatus[6] = nowStatus[7];
                            nowStatus[7] = 8;
                            
                        } else if (nowStatus[8] == 8) {
                            //jQuery中属性选择器加变量的问题
                            $("#"+nowStatus[7]).animate({
                                left: "+=200px"
                            });
                            $("#"+nowStatus[8]).animate({
                                left: "-=200px"
                            });
                            nowStatus[8] = nowStatus[7];
                            nowStatus[7] = 8;
                        } 
                        break;
                    }
                case 8:
                    {
                        if (nowStatus[5] == 8) {
                            $("#"+nowStatus[8]).animate({
                                top: "-=200px"
                            });
                            $("#"+nowStatus[5]).animate({
                                top: "+=200px"
                            });
                            nowStatus[5] = nowStatus[8];
                            nowStatus[8] = 8;
                        } else if (nowStatus[7] == 8) {
                            $("#"+nowStatus[8]).animate({
                                left: "-=200px"
                            });
                            $("#"+nowStatus[7]).animate({
                                left: "+=200px"
                            });
                            nowStatus[7] = nowStatus[8];
                            nowStatus[8] = 8;
                                                   } 
                        break;
                    }



            }
            document.getElementById("arr0").innerHTML = nowStatus[0];
            document.getElementById("arr1").innerHTML = nowStatus[1];
            document.getElementById("arr2").innerHTML = nowStatus[2];
            document.getElementById("arr3").innerHTML = nowStatus[3];
            document.getElementById("arr4").innerHTML = nowStatus[4];
            document.getElementById("arr5").innerHTML = nowStatus[5];
            document.getElementById("arr6").innerHTML = nowStatus[6];
            document.getElementById("arr7").innerHTML = nowStatus[7];
            document.getElementById("arr8").innerHTML = nowStatus[8];

        }
    });
})
