$(function() {
    var show = $('.show');
    var show1 = $('.show1');
    var res_flog = 0;

    var jnum1 = "",
        jnum2 = "",
        jcacu = "";

    function num(temp) {
        if (jnum1 == "" || res_flog == 1) {
            jnum1 = temp;
            res_flog = 0;
            var jnum1_temp = parseInt(jnum1);
            if (jnum1_temp == 0) {
                show.attr('value', jnum1_temp);
                jnum1 = "";
            } else {
                show.attr('value', jnum1);
            }
        } else if (jcacu == "") {
            jnum1 = jnum1 + temp;
            var jnum1_temp = parseInt(jnum1);
            if (jnum1_temp == 0) {
                show.attr('value', jnum1_temp);
                jnum1 = "";
            } else {
                show.attr('value', jnum1);
            }
        } else if (jnum2 == "") {
            jnum2 = temp;
            var jnum2_temp = parseInt(jnum2);
            if (jnum2_temp == 0) {
                show.attr('value', jnum2_temp);
                jnum2 = "";
            } else {
                show.attr('value', jnum2);
            }
        } else {
            jnum2 = jnum2 + temp;
            var jnum2_temp = parseInt(jnum2);
            if (jnum2_temp == 0) {
                show.attr('value', jnum2_temp);
                jnum2 = "";
            } else {
                show.attr('value', jnum2);
            }
        }
    }

    function cacu(temp) {
        // body...
        res_flog = 0;
        if (jnum1 == "") {
            switch (temp) {
                case "+":
                    break;
                case "-":
                    jnum1 = temp;
                    show.attr('value', jnum1);
                    break;
                case "x":
                case "/":
                    jnum1 = "0";
                    jcacu = temp;
                    show.attr('value', jnum1);
                    break;
                default:
                    alert("cacu error");
                    break;
            }
        } else if (jnum2 == "") {
            jcacu = temp;
            //show.attr('value', "");
        } else if (jnum1 !== "" && jnum2 !== "") {
            jnum1 = showResult(jnum1, jcacu, jnum2);
            jcacu = temp;
            jnum2 = "";
        } else alert("cacu error!")
    }

    function showResult(fnum1, fcacu, fnum2) {
        // body...
        var res = 0;
        var num1_temp = parseFloat(fnum1);
        var num2_temp = parseFloat(fnum2);
        switch (fcacu) {
            case "+":
                res = num1_temp + num2_temp;
                //show1.attr('value', "jia");
                break;
            case "-":
                res = num1_temp - num2_temp;
                //show1.attr('value', "sub");
                break;
            case "x":
                res = num1_temp * num2_temp;
                //show1.attr('value', "mul");
                break;
            case "/":
                res = num1_temp / num2_temp;
                //show1.attr('value', "div");
                break;
            default:
                alert("showResult error");
                break;
        }
        // if (math.abs(res) > 1e15) {
        //     show.attr('value', "beyond measure");
        //     res = 0;
        // };
        // else {
        //     show.attr('value', res);
        // };

        show.attr('value', res);
        return res;
    }

    function percent() {
        if (jnum1 !== "") {
            if (jnum2 !== "") {
                jnum1 = showResult(jnum1, jcacu, jnum2);
            }
            res_flog = 1;
            jnum1 = jnum1 / 100;
            jcacu = "";
            jnum2 = "";
            show.attr('value', jnum1);
        } else {
            alert("per Error!");
        }
    }

    function equal() {
        if (jnum1 == 0) {
            jnum1 = 0;
            jcacu = "+";
            jnum2 = 0;
        };
        if (jnum2 == "") {
            jcacu = "+";
            jnum2 = 0;
        }
        jnum1 = showResult(jnum1, jcacu, jnum2);
        jnum2 = "";
        res_flog = 1;
        show.attr('value', jnum1);
    }

    function clear() {
        // body...
        jnum1 = "";
        jnum2 = "";
        jcacu = "";
        res_flog = 0;
        show.attr('value', "0.");
        show1.attr('value', "0.");
    }

    $('.num').click(function() {
        num($(this).attr('id'));
    });

    $('.cacu').on("click", function() {

        cacu($(this).attr('value'));
    });

    $('.clear').on("click", function() {

        clear();
    });

    $('.equal').on("click", function() {

        equal();
    });

    $('.percent').on("click", function() {

        percent();
    });
});
