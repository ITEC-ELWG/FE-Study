function writesome() {
    var pi = 3.14;
    var x = "my name is liugui";
    var y = "so great";

    document.write(pi + "<br/>");
    document.write(x + "<br/>");
    document.write(y + "<br/>");//写在函数内部的语句函数调用时才会执行，写在函数外面的语句浏览器载入时就会自动运行

    var person = new Object()
    person.name = "liugui"; //这时候属性之间可以用分号分隔
    person.age = 56;
    person.eyecolor = "black";

    var tep = person.age;
    document.write(tep + "<br/>");
}
