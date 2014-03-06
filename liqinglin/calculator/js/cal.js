    arg = new Array();
    arg[0] = 0.0;
    arg[1] = 0.0;
    oper = " ";
    flag = 0;
    Num1 = " ";
    Num2 = " ";

    function doClear() { // 清除
        document.getElementById("answer").value = 0;
        arg[0] = 0;
        arg[1] = 0;
        flag = 0;
        oper = " ";
    }

    function doPercent() { //百分号
        if (arg[1] == 0) {
            arg[0] = arg[0] / 100;
            document.getElementById("answer").value = arg[0];
        } else {
            arg[1] = arg[1] / 100;
            document.getElementById("answer").value = arg[1];
        }
    }

    function getNumber(num) { // 主要计算及数据录入
        if (arg[0] != 0 && arg[1] != 0 && oper == "=") {
            arg[0] = arg[1];
            arg[1] = 0;
            flag = 0;
            Num1 = Num2;
            Num2 = " ";
        }
        if (num != "=") {
            if (num != '+' && num != '-' && num != '*' && num != '/' && num != '=') {
                if (flag == 0) {
                    if (arg[0] == 0) {
                        Num1 = num;
                        if (num == ".")
                            Num1 = "0.";
                    } else {
                        Num1 = Num1 + num;
                    }
                    arg[0] = parseFloat(Num1);
                    document.getElementById("answer").value = Num1;
                } else {
                    if (arg[1] == 0) {
                        Num2 = num;
                        if (num == ".")
                            Num2 = "0.";
                    } else {
                        Num2 = Num2 + num;
                    }
                    arg[1] = parseFloat(Num2);
                    document.getElementById("answer").value = Num2;
                }
            } else {
                oper = num;
                flag = 1;
            }
            /*alert(arg[0]);
                alert(arg[1]);
                alert(oper);*/
        } else {
            switch (oper) {
                case "+":
                    arg[0] = arg[0] + arg[1];
                    arg[1] = 0;
                    break;
                case "-":
                    arg[0] = arg[0] - arg[1];
                    arg[1] = 0;
                    break;
                case "*":
                    arg[0] = arg[0] * arg[1];
                    arg[1] = 0;
                    break;
                case "/":
                    arg[0] = arg[0] / arg[1];
                    arg[1] = 0;
                    break;
                default:
                    ;
            }
            document.getElementById("answer").value = arg[0];
            Num1 = arg[0].toString();
            Num2 = " ";
            oper = "=";
        }
    }
