//创建和存储 cookie
/*参数：cookie 的名称、值以及过期天数。
function setCookie(c_name, value, expiredays) {
    var exdate = new Date(); //通过new生成一个Date的实例，得到当前的时间；
    exdate.setDate(exdate.getDate() + expiredays); //getDate()得到当前本地时间的日,setDate()方法来设置时间
    //exdate.setHours(exdate.getHours() + expiredays);//以小时计数
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "": ";expires=" + exdate.toGMTString());
	//toGMTString()方法把Date对象转换为GMT(格林威治时间)格式的日期型字符串
}*/

//参数：cookie 的名称、值
function setCookie(c_name, value) {
    document.cookie = c_name + "=" + escape(value);
}

//cookie的读取操作
function getCookie(c_name) {　　　　
    if (document.cookie.length > 0) { //先查询cookie是否为空，为空就return ""
        c_start = document.cookie.indexOf(c_name + "=");　//通过String对象的indexOf()来检查这个cookie是否存在，不存在就为 -1
        if (c_start != -1) {　　　　　　　　
			c_start = c_start + c_name.length + 1　//+1表示"="号，获取cookie值的开始位置
            c_end = document.cookie.indexOf(";", c_start); 
			//得到值的结束位置.indexOf()第二个参数指定的开始索引的位置,因为需要考虑是否是最后一项，所以通过";"号是否存在来判断           
            if (c_end == -1) 
				c_end = document.cookie.length;　
			return unescape(document.cookie.substring(c_start, c_end));　 
        }　　　　
    }　　　　
    return ""　　
}

//删除cookie
function delCookie(name)
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}
