var pageTemp = {
    footer: function () {
        var pageName = location.href;
        pageName = pageName.replace(/\?.*$/, '');
        pageName = pageName.replace(/^.*\//, '');
        var footerHtml = '' +
            '<div class="bottom">' +
            '<ul class="footer_1 ">' +
            '<li class="footer1">' +
            '<img src="images/back_ico.png" alt="" width="22">' +
            '</li>' +
            '<li class="footer2">' +
            '<img src="images/refurbish_ico.png" alt="" width="22">' +
            '</li>' +
            '<li class="footer3">' +
            '<img src="images/list_ico.png" alt="" width="22">' +
            '</li>' +
            '<li class="footer4">' +
            '<img src="images/home_ico.png" alt="" width="30">' +
            '</li>' +
            '<li class="footer5">' +
            '<img src="images/center_ico.png" alt="" width="22">' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '<div class="mian"></div>' +
            '<div class="footer3_1" style="display: none;">' +
            '<div class="footer3_2">' +
                //'<ul class="move_list">'+
                //'<li class="picact"></li><li></li>'+
                //'</ul>'+
                //'<div id="slider" class="swipe">'+
                //	'<div class="swipe-wrap">'+
            '<div class="footer3_3">' +
            '<div class="footer3_4">' +
            '<ul>' +
            '<li data-href="#/suqian/scenic_guide/index.html">' +
            '<div class="footer3_5">' +
            '<img src="images/menu_ico1.png" alt="" class="footer3_5_1">' +
            '</div>' +
            '</li>' +
            '<li data-href="#/suqian/restaurant/shopslist.html">' +
            '<div class="footer3_5">' +
            '<img src="images/menu_ico2.png" alt="" class="footer3_5_1">' +
            '</div>' +
            '</li>' +
            '<li data-href="#/suqian/hotel/shopslist.html">' +
            '<div class="footer3_5">' +
            '<img src="images/menu_ico3.png" alt="" class="footer3_5_1">' +
            '</div>' +
            '</li>' +
            '<li data-href="#/suqian/arder/arder.html">' +
            '<div class="footer3_5">' +
            '<img src="images/menu_ico4.png" alt="" class="footer3_5_1">' +
           '</div>' +
            '</li>' +
            '<li data-href="#/suqian/travel/shopslist.html">' +
            '<div class="footer3_5">' +
            '<img src="images/menu_ico5.png" alt="" class="footer3_5_1">' +
           '</div>' +
            '</li>' +
            '<li data-href="#/suqian/shop/list.html">' +
            '<div class="footer3_5">' +
            '<img src="images/menu_ico6.png" alt="" class="footer3_5_1">' +
           '</div>' +
            '</li>' +
            '<li data-href="#/suqian/jifen/index.html">' +
            '<div class="footer3_5">' +
            '<img src="images/menu_ico7.png" alt="" class="footer3_5_1">' +
           '</div>' +
            '</li>' +
            '<li data-href="#/suqian/routes/routes_suggest.html">' +
            '<div class="footer3_5">' +
            '<img src="images/menu_ico8.png" alt="" class="footer3_5_1">' +
            '</div>' +
            '</li>' +
            '<li data-href="#/suqian/speech/selling.html">' +
            '<div class="footer3_5">' +
            '<img src="images/menu_ico9.png" alt="" class="footer3_5_1">' +
            '</div>' +
            '</li>' +
            '<li data-href="#/suqian/personal/index.html">' +
            '<div class="footer3_5">' +
            '<img src="images/menu_ico10.png" alt="" class="footer3_5_1">' +
            '</div>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '</div>' +
                //	'</div>'+
                //'</div>'+
            '</div>' +
            '</div>';
        $("#pageFooter").html(footerHtml);
        $("#pageFooter").on("click", ".footer_1 .footer1", function () {
            history.go(-1);
        });
        $("#pageFooter").on("click", ".footer_1 .footer2", function () {
            window.location.reload();
        });
        $("#pageFooter").on("click", ".footer4", function () {
            window.location.href="#/suqian/index/index.html";
        });

        $("#pageFooter").on("click", ".footer5", function () {
            window.location.href="#/suqian/personal/index.html";
        });
        
        $("#pageFooter").on("click", "div.footer3_4 ul li", function () {
            window.location.href=$(this).attr("data-href");
        });

        $(".footer3").attr("data-statue", "true");
        $("#pageFooter").on("click", ".footer_1 .footer3", function () {
            var default_val = $(this).attr("data-statue");
            if (default_val == "true") {
                $(".mian").show();
                $(".footer3_1").show();
                $(".footer3").attr("data-statue", "false");
            } else {
                $(".mian").hide();
                $(".footer3_1").hide();
                $(".footer3").attr("data-statue", "true");
            }
            ;
            $(".mian, .z_input").on("click", function () {
                $(".mian").hide();
                $(".footer3_1").hide();
                $(".footer3").attr("data-statue", "true");
            })
        });

        //window.mySwipe = new Swipe(document.getElementById('slider'), {
        //	startSlide:0,   //起始图片切换的索引位置
        //	speed: 400,      //前进和后台的速度，单位毫秒.
        //	//auto: 3000,       //设置自动切换时间，单位毫秒
        //	continuous: true,     //无限循环的图片切换效果
        //	disableScroll: false,    //阻止由于触摸而滚动屏幕
        //	stopPropagation: false,      //停止滑动事件
        //	callback:function(pos) {
        //		$(".footer3_2 ul li").removeClass("picact");/**小圆**/
        //		$(".footer3_2 ul li:eq("+pos+")").addClass("picact");
        //	}
        //});
        //var move_1w = $(".move_list").width()/2;
        //$(".move_list").css({"margin-left":-move_1w+"px"});
        //$(".footer3_1").hide();
        //  $("#pageFooter").on("click","li",function(event){
        //  	var $liPage=$(this).attr('data-page');
        //  	location.href = "#/lottery/jiangxi/"+ $liPage+".html?voteId="+ZlyJs.getUrlParam("voteId");
        //  });
//      if (browser.versions.ios) {
//
//      } else if (browser.versions.android) {
//          $("input[type*='text'],textarea").on('click', function () {
//              $('#pageFooter .bottom').css({'position': 'static'});
//          });
//          $("input[type*='text'],textarea").on('blur', function () {
//              $('#pageFooter .bottom').css({'position': 'fixed'});
//          });
//      }
//  },
   /* footerWarp: function () {
        var copyright = '<a href="http://tujikeji.com/tj.html" style="color: #999;" >宿迁市旅游局©版权所有 | 途记科技技术支持</a>';
        $("#pageFooterWarp").append(copyright);
    },
    titleTimeLine:function(domain,title){
    	setTimeout(function(){
			ZlyJs.TimeLine(domain+"/style/drive.zlvyun.com/suqian/style/images/logo.png", window.location.href, title, "宿迁旅游");
		},800);*/
    }
};

var pageCommonFun = {
    timeSpan: function (seconds) {
        var min = Math.floor(seconds / 60),
            second = seconds % 60,
            hour, newMin, time;
        if (min > 60) {
            hour = Math.floor(min / 60);
            newMin = min % 60;
        }
        if (second < 10) {
            second = '0' + second;
        }
        if (min < 10) {
            min = '0' + min;
        }
        return time = hour ? (hour + '时' + newMin + '分' + second + '秒') : (min + '分' + second + '秒');
    },
    countDown: function (seconds, span, callback) {
        var isOK = null;
        isOK = setInterval(function () {
            --seconds;
            $("#" + span).html(pageCommonFun.timeSpan(seconds));
            if (seconds == 0) {
                clearInterval(isOK);
                if (typeof(callback) == 'function') {
                    callback.call(window);
                } else if (typeof(callback) != 'undefined') {
                    eval(callback);
                }
                return false;
            }
            ;
        }, 1000);
    }
};
