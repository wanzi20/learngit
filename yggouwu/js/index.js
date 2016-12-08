//                    首页

//手风琴效果
$(function(){
	$(".new-list").children("li").mouseover(function(){
		$(this).children(".litte-box").css("display","none");
		$(this).children(".big-box").css("display","block")
	});
	$(".new-list").children("li").mouseout(function(){
		$(this).siblings().children(".big-box").css("display","none");
		$(this).children(".litte-box").css("display","none")
		$(this).siblings().children(".litte-box").css("display","block");
	});
});
//移动的小辣妈
$(function(){
	setInterval(function(){
		$(".move-p").animate({"right":"1200"},50000).animate({"right":"-1000"},1);
	},5000);
	setInterval(function(){
		$(".tab").animate({"bottom":"100"},50000).animate({"bottom":"-100"},1);
	},5000);
});
//正在热卖  滑过轮播
$(function(){
	$(".rm").children("a").mouseover(function(){
		$(".rm").children().removeClass('active');
		$(this).addClass('active');
	})
	$(".rm-a1").mouseover(function(){
		$(".move-ul1").css("display","block");
		$(".move-ul2").css("display","none");
		$(".move-ul3").css("display","none");
	})
	$(".rm-a2").mouseover(function(){
		$(".move-ul2").css("display","block");
		$(".move-ul1").css("display","none");
		$(".move-ul3").css("display","none");
	})
	$(".rm-a3").mouseover(function(){
		$(".move-ul3").css("display","block");
		$(".move-ul2").css("display","none");
		$(".move-ul1").css("display","none");
	})
	$(".move-right").click(function(){
		$(".m1-center-ul").children("ul").animate({"left":"0"},500)
	});
	$(".move-left").click(function(){
		$(".m1-center-ul").children("ul").animate({"left":"-390"},500)
	});
});

$(function(){
    $('#t4-nav li').hover(function(){
        $(this).addClass('active').find('.nav-box').show();
        $(this).siblings('li').find('.nav-box').hide()
    },function(){
        $(this).removeClass('active').find('.nav-box').hide();
    });


    $('#m3-nav1 li').each(function(i){
        $(this).click(function(){
            $(this).addClass('active').siblings('li').removeClass('active');
            $('.nav1-con1 li').eq(i).fadeIn().siblings('li').hide();
            $('.nav1-con2 li').eq(i).fadeIn().siblings('li').hide();
        });
    });


    $('#m4-nav2 li').each(function(i){
        $(this).mouseenter(function(){
            $(this).addClass('active').siblings('li').removeClass('active');
            $('#m4-nav1 li').eq(i).fadeIn().siblings('li').hide();
        });
    });

    //遮罩层
    $('#m4-nav3 li').hover(function(){
        $(this).removeClass('hover').siblings('li').addClass('hover');
    },function(){
        $('#m4-nav3 li').removeClass('hover');
    });
});
jQuery("#banner,#ban-left,#m2-nav2").slide({mainCell:".bd ul",autoPlay:true});









