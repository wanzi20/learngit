//放大镜
$(function(){
      //获取大，中，小图片
	   var $middleimg=$('.middle-good img');
	   var $bigimg=$('.big-good img');
	   var $smallimg=$('.small-good li img');
	   $smallimg.mouseover(function(){//鼠标移入事件

	   	   $middleimg.attr("src", $(this).attr('src'));
	   	   $bigimg.attr("src", $(this).attr('src'));
	   })

	   $(".middle-good").mouseleave(function(){//上面的图片的鼠标移出事件
	   	   $('.big-good').css('display','none');
	   	   $('.zoomarea').css('display','none');
	   })
	   $(".middle-good").mouseenter(function(){
	   	   $('.zoomarea').css('display','block');
	   	   $('.big-good').css('display','block');
	   })


	   $(".middle-good").mousemove(function(e){//鼠标进入移动事件

   	var
   		xmax=$(".middle-good").width()-$(".zoomarea").width(),
 		ymax=$(".middle-good").height()-$(".zoomarea").height(),
   		l = e.pageX-$(this).offset().left-$(".zoomarea").width()/2,
   		t = e.pageY-$(this).offset().top-$(".zoomarea").height()/2,
   		rata = $('.big-good img').width()/$middleimg.width();

	if(l<0){
		l=0;
	}else if(l>xmax){
		l=xmax;
	}
	if(t<0){
		t=0;
	}else if(t>ymax)
	{
		t=ymax;
	}
	$(".zoomarea").css({
		left:l,
		top:t
	});
	$('.big-good img').css({
		top:-parseInt($(".zoomarea").css('top'))*rata+'px',
		left:-parseInt($(".zoomarea").css('left'))*rata/2+'px'
	});
});
});

//弹出框
// $(function(){
// 	$(".add-cat").click(function(){
// 		$(".alert-box").css('display','block');
// 	});
// 	$(".go").click(function(){
// 		$(".alert-box").css('display','none');
// 	});
// });

//返回顶部
			  $(window).on('scroll',function(){
			  		 var $stop=$(window).scrollTop();
			  		  if ($stop>100) {
			  		    	$('.return').css('display','block');
			  		    }else{
			  		    	$('.return').css('display','none');
			  		    }
			  		  $('.return').on('click', function(){
						    $(window).scrollTop(0);
						  });
			});




//购物车

$(function(){
	var addCar=$('.add-cat'),
		carImg=$('.car-img'),
		carTitle=$('.car-title');
		carPrice=$('.car-price');
		carNum=$('.car-num');
	var aImg=[],aName=[],aNum=[],aPrice=[];
	if($.cookie('name')){//读取已经加入购物车里的产品
		if(aName.length==1){
			aImg=$.cookie('img').split('');
			aName=$.cookie('name').split('');
			aNum=$.cookie('num').split('');
			aPrice=$.cookie('price').split('');
		}else{
			aImg=$.cookie('img').split(',');
			aName=$.cookie('name').split(',');
			aNum=$.cookie('num').split(',');
			aPrice=$.cookie('price').split(',');
		}
	}
	addCar.click(function(){//添加购物车
		if(aName.length==0){
			aImg.push(carImg.attr('src').toString());
			aName.push(carTitle.text());
			aPrice.push(carPrice.text());
			aNum.push(carNum.val());
		}else{//如果有重复产品，就num+1

			for(var i=0;i<aName.length;i++){
				if (aName[i].indexOf(carTitle.text()) > -1) {
					aNum[i]=parseInt(aNum[i])+parseInt(carNum.val());
				}else{
					aImg.push(carImg.attr('src').toString());
					aName.push(carTitle.text());
					aPrice.push(carPrice.text());
					aNum.push(carNum.val());
				}
			}
		}
		//设置cookie
		$.cookie('img',aImg,{path: '/' });
		$.cookie('name',aName,{path: '/' });
		$.cookie('price',aPrice,{path: '/' });
		$.cookie('num',aNum,{path: '/' });
		$(".alert-box").css('display','block');
	});
});


