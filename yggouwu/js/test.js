/*登录验证*/
$(function(){
	$(".test-input").eq(0).focusout(function(){
		var val1=$(".test-input").eq(0).val();
		if(val1.length==0){
			 $('.tel-test').html('用户名不能为空');
		}else{
			$('.tel-test').html('');
		}
	})
	$(".test-input").eq(1).focusout(function(){
		var val2=$(".test-input").eq(1).val();
		if(val2.length==0){
			 $('.psw-test').html('密码不能为空');
		}else{
			$('.psw-test').html('');
		}
	})
	$(".test-input").eq(2).focusout(function(){
		var val3=$(".test-input").eq(2).val();
		if(val3.length==0){
			 $('.test-test').html('验证码不能为空');
		}else{
			$('.test-test').html('');
		}
	})
})



/*注册验证*/
$(function(){
	var $reg=/^1\d{10}$/ig;
	$(".lcbiput").focusout(function(){
		var val=$(".lcbiput").val();
    	if(val.length==0){
         	$('.tel-test').html('手机号不能为空');
    	}else if(!$reg.test(val)){
         	$('.tel-test').html('您输入的手机号码不正确')
    	}else{
       		$('.tel-test').html('')
    	}
	})
	
	
	$(".login-state").focusout(function(){
		var val2=$(".login-state").val();
		if(val2.length==0){
			 $('.test-test').html('验证码不能为空');
		}else{
			$('.test-test').html('');
		}
	})
	$(".login-tel").focusout(function(){
		var val3=$(".login-tel").val();
		if(val3.length==0){
			$('.tel-test-test').html('手机验证码不能为空');
		}else{
			$('.tel-test-test').html('');
		}
	})
})



$(function(){
	$(".reg-password").focusout(function(){
        var $val=$(this).val();
        var $reg = /^[a-z0-9_-]{6,18}$/;
        if($val.length==0) {
            $('.tip-password').html('密码不能为空');
        }else if(!$reg.test($val)){
            $('.tip-password').html('输入的密码少于六位数')
        }else{
            $('.tip-password').html('')
        }
    });
    //密码再次确认
    $('.reg-again').focusout(function () {
        var $val=$(this).val();
        if($val!==$('.reg-password').val()){
            $('.tip-again').html('两次输入的密码不一致')
        }else if($val.length==0){
            $('.tip-again').html('重复密码不能为空')
        }else{
        	$('.tip-again').html('请记好您的密码')
        }
    });
    /*用户名验证*/
   $(".reg-user").focusout(function(){
	   	var reg = /^[0-9]{6,18}$/;
	    var val=$(".reg-user").val();
	    if(val.length==0) {
	         $('.tip-user').html('用户名不能为空');
	    }else if(!reg.test(val)){
	         $('.tip-user').html('输入的用户名不合法')
	    }else{
	         $('.tip-user').html('请记好验证名')
	    }
   })
   
})



$(function(){
	$(".reg-email").focusout(function(){
        var Val = $(this).val();
        var reg = /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;
        if(Val.length == 0){
            $(".tip-email").html("邮箱不能为空");
        }else if(!reg.test(Val)){
            $(".tip-email").html("您输入的邮箱格式不对");
        }else{
            $(".tip-email").html("");
        }
    });
    $(".back-state").focusout(function(){
    	var val=$(".back-state").val();
    	if(val.length==0){
    		$(".tip-test").html("验证码不能为空");
    	}else{
    		$(".tip-test").html("");
    	}
    })
})
