/**
 * Created by JOYyuan on 16/1/23.
 */
//当文档加载完毕的时候使用
window.onload = function () {
	document.getElementById("text").style.display = "none";
    var contactAdd =document.getElementById("addContainer")
    contactAdd.style.display="none";
    var addBtn = document.getElementById("add");
    //点击添加按钮
    addBtn.onclick = function () {
        openAdd();
        return false;
    }
    var perPic = document.getElementsByClassName("img-thumbnail");
    //点击人物图片
    var i;
    for (i = 0; i < perPic.length; i++) {
        perPic[i].onclick = function () {
            perpicEx();
            return false;
        }
    }
    //上传照片
    //var imgAdd=document.getElementById("btnUpload");
    //imgAdd.onclick=function(){
    //    imgUpload();
    //    return false;
    //}

}
function mask() {
    var sHeight = document.documentElement.scrollHeight;
    var sWidth = document.documentElement.scrollWidth;
    var maskAdd = document.createElement("div");//创建元素节点DIV，在页面里面
    maskAdd.id = "mask";
    maskAdd.style.height = sHeight + "px";
    maskAdd.style.width = sWidth + "px";
    document.body.appendChild(maskAdd);
}
//添加的弹出框
function openAdd() {
    var sHeight = document.documentElement.scrollHeight;
    var sWidth = document.documentElement.scrollWidth;
    var maskAdd = document.createElement("div");//创建元素节点DIV，在页面里面
    maskAdd.id = "mask";
    maskAdd.style.height = sHeight + "px";
    maskAdd.style.width = sWidth + "px";
    document.body.appendChild(maskAdd);
    var contactAdd =document.getElementById("addContainer");
    var dHeight = contactAdd.offsetHeight;
    var dWidth = contactAdd.offsetWidth;
    //设置添加框的left和top和bottom
    contactAdd.style.left = sWidth / 3 - dWidth / 3 + "px";
    contactAdd.style.top = sWidth / 5- dHeight / 5+ "px";
    contactAdd.style.bottom = sWidth / 5- dHeight / 5+ "px";
    contactAdd.style.display="block";
    var addCancel=document.getElementById("addCancel");
    addCancel.onclick=maskAdd.onclick = function () {
        contactAdd.style.display="none";
        document.body.removeChild(maskAdd);
    }
}
//查看大图
function perpicEx() {
    var sHeight = document.documentElement.scrollHeight;
    var sWidth = document.documentElement.scrollWidth;
    var maskAdd = document.createElement("div");//创建元素节点DIV，在页面里面
    maskAdd.id = "mask";
    maskAdd.style.height = sHeight + "px";
    maskAdd.style.width = sWidth + "px";
    document.body.appendChild(maskAdd);
    var picEx = document.createElement("div");
    picEx.id = "personBig";
    picEx.innerHTML = "<div class='imgCon'></div>";
    document.body.appendChild(picEx);
    //获取添加框的宽和高
    var dHeight = picEx.offsetHeight;
    var dWidth = picEx.offsetWidth;
    //设置添加框的left和top和bottom
    picEx.style.left = sWidth / 2 - dWidth / 2 + "px";
    picEx.style.top = sWidth / 4 - dHeight / 4 + "px";
    picEx.style.bottom = sWidth / 3 - dHeight / 3 + "px";
    //点击关闭按钮
    maskAdd.onclick = function () {
        document.body.removeChild(maskAdd);
        document.body.removeChild(picEx);

    }
}
//upload照片
function imgUpload(){
    document.getElementById('img').onchange = function(){
        var img = event.target.files[0];
        // 判断是否图片
        if(!img){
            return ;
        }
        // 判断图片格式
        if(!(img.type.indexOf('image')==0 && img.type && /\.(?:jpg|png|gif)$/.test(img.name)) ){
            alert('图片只能是jpg,gif,png');
            return ;
        }
        var reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = function(e){ // reader onload start
            // ajax 上传图片
            $.post("server.php", { img: e.target.result},function(ret){
                if(ret.img!=''){
                    alert('upload success');
                    $('#showimg').html('<img src="' + ret.img + '">');
                }else{
                    alert('upload fail');
                }
            },'json');
        } // reader onload end
    }
}