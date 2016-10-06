var content;
var isFirst = true;
var effective = true;

window.onload = function() {
    content = document.getElementById("showWindow");
}

function getValue(value) {
    if (true == isFirst && "%" != value) {
        content.value = "";
        effective = true;
        isFirst = false;
    }

    var text = value;

    if ("AC" == text) {
        content.value = "";
        isFirst = true;// 如果是AC，重新计算
    }
    else if ("%" == text) {
        if (-1 != content.value.indexOf("%")) return ;
        else if (true == isFirst && "" != content.value) {
            var temp = content.value.indexOf("=");
            content.value = content.value.substring(temp + 1);
            content.value = Number(content.value) * 100;
            content.value = content.value + "%";
            return ;
        }
        var index = content.value.indexOf("+") +
                    content.value.indexOf("-") +
                    content.value.indexOf("x") +
                    content.value.indexOf("÷");
        if (-4 == index && "" != content.value) {
            var temp = Number(content.value) * 100;
            content.value = temp + "%";
            isFirst = true;
        }
        else if (-4 != index) {
            alert("百分比转换不正确，输入中含有除数字以外的运算符！");
            isFirst = true;
        }
        else {
            alert("你尚未输入数据！");
            isFirst = true;
        }
    }
    else if ("=" == text) {
        if ("" == content.value) isFirst = true;// 如果没有输入就按下等于号，重新计算
        else {
            var resultText = parse(content.value);
            if (true == effective) content.value = content.value + "=" + resultText;// 计算结果有效，输出结果
            isFirst = true;// 计算完成，重新计算
        }
    }
    else content.value = content.value + text;
}

function parse(content) {
    var index = content.indexOf("+");

    if (index > -1) return parse(content.substring(0,index)) + parse(content.substring(index + 1));

    index = content.lastIndexOf("-");

    if (index > -1) return parse(content.substring(0,index)) - parse(content.substring(index + 1));

    index = content.lastIndexOf("x");

    if (index > -1) return parse(content.substring(0,index)) * parse(content.substring(index + 1));

    index = content.lastIndexOf("÷");

    if (index > -1) {
        var temp = parse(content.substring(index + 1));
        if (0 == temp) {
            alert("0不能做除数！");
            effective = false;
            return Number(1);
        }
        else return parse(content.substring(0,index)) / temp;
    }

    if ("" == content) {
        alert("算式输入错误！");
        effective = false;
        return Number(1);
    }
    else return Number(content);
}