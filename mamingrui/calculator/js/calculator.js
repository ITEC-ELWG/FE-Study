window.onload = function () {
    // 定义数组，接受按的数字和计算符号
    var a_res = []
    // 获取按钮对象
    var btn_txt = document.getElementsByClassName("button")
    // 获取输出屏幕元素
    var txt = document.getElementById("output-window")
    // 获取清空按钮
    var all_clear = document.getElementsByClassName("all-clear")
    // 网页加载时给按钮添加点击事件
    for (var i = 0; i < all_clear.length; i++) {
        all_clear[i].onclick = function () {
            // 判断按钮
            if (this.value == "AC") {
                // 清空数组和屏幕值
                a_res = []
                // 设置输出值为0
                txt.value = ""
            }
        }
    }
    for (i = 0; i < btn_txt.length; i++) {
        btn_txt[i].onclick = function () {
            // 按完键将值传给屏幕
            // 判断是否是数字
            if (txt.value == "" && this.value == ".") {
                txt.value = "0."
            }
            else {
                if (!isNaN(this.value) || this.value == ".") {
                    // 输入的是数字或者点
                    if (txt.value.indexOf(".") != -1) {
                        // 当前表达式中有小数点
                        if (this.value != ".") {
                            // 当前按的不是点
                            txt.value += this.value
                        }
                    }
                    else {
                        // 表达式中没有点
                        txt.value += this.value
                    }
                }
                else {
                    // 输入的是符号
                    // 存值并清除屏幕
                    if (this.value != "=") {
                        // 不为等号
                        a_res[a_res.length] = txt.value
                        // 存符号
                        a_res[a_res.length] = this.value
                        // 清屏
                        txt.value = ""
                    }
                    else {
                        // 是等号
                        a_res[a_res.length] = txt.value
                        txt.value = eval(a_res.join(""))
                        // 计算完成清空数组
                    }
                }
            }
        }
    }
}