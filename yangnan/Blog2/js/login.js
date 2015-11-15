document.getElementById("register-button").onclick=function(){
    window.location.href="../php/register.php";
};

// 网页加载后要运行的函数
$(document).ready(function() {
	var options = { 	
	//target:        '#output1',   // target element(s) to be updated with server response	
	beforeSubmit:  validate,// pre-s`ubmit callback 
	success:       submitted // post-submit callback 
    };		
	$('#loginForm').ajaxForm(options);
}); 
	
function validate(formData, jqForm, options) { 
	// jqForm is a jQuery object which wraps the form DOM element 
    // 
    // To validate, we can access the DOM elements directly and return true 
    // only if the values of both the username and password fields evaluate 
    // to true
    var form = jqForm[0]; 
    if (!form.account.value || !form.password.value) {
        alert('请填写完整'); 
        return false; 
    }  	
    return true;
}

function submitted (responseText) { 
    if(responseText.replace(/^\s*|\s*$/g, '')=="登录成功"){ //利用正则表达式处理返回值的空格
        setCookie('user', 'true');
		window.location.href="index.php";
	}
    else{
		alert(responseText);
	} 
}

