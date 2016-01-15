
var num_in = "";
var cal_in = "";
var res_in = "";
var num_out = "";
var cal_out = "";
//数组对象
var cal_end = new Array();
var num_end = new Array();
var result;
window.onload = function () {
    function init() {
        var inputs;
        result = document.getElementById('display');
        inputs = document.getElementsByTagName('input');
        result.value = "0";
        num_in = "0";
        for (var i = 1; i < inputs.length; i++) {
            inputs[i].onclick = function () {
                selector(this);
            }
        }
    }
    init();
}
function selector(whichpre) {
    switch (whichpre.className) {
        case "btn_in num":
            res_in = "";
            if (cal_in) {
                result.value = "";
                cal_in= "";
                num_in = "";
            }
            if ((whichpre.value == ".") && (num_in[1] == ".")) {
                return;
            }
            if ((!num_in) && ((whichpre.value) == ".")) {
                return;
            }

            else if ((whichpre.value != ".") && (num_in == "0")) {
                num_in = whichpre.value;
                ifNumPush();
                result.value = num_in;
                return;
            }
            else {
                num_in += whichpre.value;
                result.value = num_in;
                ifNumPush();
            }
            break;
        case "btn_in cal":
            if (res_in) {
                num_end.push(res_in);
                num_in = res_in;
            }
            if (num_in) {
                cal_in = whichpre.value;
                result.value = cal_in;
                ifCalPush();
            }
            break;
        case "btn_in equal":
            calculate();
            break;
        case "btn_in del":
            if ((!cal_in) && (!res_in)) {
                num_in = num_in.substring(0, num_in.length - 1);
                num_end[num_end.length - 1] = num_in;
                if (num_in == "") {
                    num_in = 0;
                }
                ifNumPush();
                result.value = num_in;
            }
            break;
        case "btn_in clear":
           cal_in = "";
            num_in = "";
            res_in = "";
            lastCal = "";
            num_end.splice(0, num_end.length);
            cal_end.splice(0, cal_end.length);
            result.value = "0";
            break;
    }
}
function calculate() {
    if ((!cal_end.length) && (!lastCal)) {
        if (!num_in) {
            num_in = "0";
        }
        result.value = num_in;
        return;
    }
    else if (cal_end.length) {
        res_in = num_end[0];
        if (cal_end.length == num_end.length) {
            num_end.push(num_end[num_end.length - 1]);
        }
        for (var i = 0; i < cal_end.length; i++) {
           res_in = calselector(res_in, cal_end[i], num_end[i + 1]);
        }
    }
    else {
        cal_end.push(lastCal);
        num_end.push(res_in);
        num_end.push(lastNum);
        calculate();
        return;
    }
    if (res_in == "Infinity") {
       res_in = "illegal";
    }
    result.value = res_in;
    num_in = "";
    num_end.splice(0, num_end.length);
    cal_end.splice(0, cal_end.length);
}
function ifNumPush() {
    if (num_end.length > cal_end.length) {
        num_end[num_end.length - 1] = num_in;
    }
    else {
        num_end.push(num_in);
    }
    num_out= num_end[num_end.length - 1];
}
function ifCalPush() {
    if (num_end.length > cal_end.length) {
        cal_end.push(cal_in);
    }
    else {
        cal_end[cal_end.length - 1] = cal_in;
    }
   cal_out = cal_end[cal_end.length - 1];
}
function calselector(numA, cal, numB) {
    var res_in = numA + cal + numB;
    var anum = parseFloat(numA);
    var bnum = parseFloat(numB);
    switch (cal) {
        case "+":
            res_in = anum + bnum;
            break;
        case "-":
            res_in = anum - bnum;
            break;
        case "*":
            res_in = anum * bnum;
            break;
        case "÷":
            res_in= anum / bnum;
            break;
        case "%":
            res_in = anum / 100;
            break;
    }
    return res_in;
}
