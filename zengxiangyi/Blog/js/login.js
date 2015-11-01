// JavaScript Document
//支持Enter键登录
		document.onkeydown = function(e){
			if($(".bac").length==0)
			{
				if(!e) e = window.event;
				if((e.keyCode || e.which) == 13){
					var obtnLogin=document.getElementById("submit_btn")
					obtnLogin.focus();
				}
			}
		}

    	$(function(){
			//提交表单
			$('#submit_btn').click(function(){
				//show_loading();
				var myReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; //邮件正则
				var inputCode = document.getElementById("captcha").value.toUpperCase();
				if($('#email').val() == ''){
					show_err_msg('邮箱未填写！');	
					$('#email').focus();
				}
				else if(!myReg.test($('#email').val())){
					show_err_msg('邮箱格式错误！');
					$('#email').focus();
				}
				else if($('#password').val() == ''){
					show_err_msg('密码未填写！');
					$('#password').focus();
				}
				
				else{
					validate () ;
					
				}
			});
		});