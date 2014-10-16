function writesome() {
    var pi = 3.14;
    var x = "my name is liugui";
    var y = "so great";

    document.write(pi + "<br/>");
    document.write(x + "<br/>");
    document.write(y + "<br/>"); //写在函数内部的语句函数调用时才会执行，写在函数外面的语句浏览器载入时就会自动运行

    var person = new Object() //Objectb必须首字母大写，因为JS对大小写敏感。后面属性定义和函数名定义的时候只要在调用时一致就可以
    person.name = "liugui"; //这时候属性之间可以用分号分隔
    person.age = 56;
    person.eyecolor = "black";

    var tep = person.age;
    document.write(tep + "<br/>");
}


function ceo(name, job) {
    document.write("welcome" + name + "the" + job);
}


function person(firstname,lastname,age,eyecolor)
{
	this.firstname=firstname;//前面的firstname是属性名，后面的是变量名
	this.lastname=lastname;
	this.age=age;
	this.eyecolor=eyecolor;
}