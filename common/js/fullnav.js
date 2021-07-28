
$(document).ready(function() {
 
    //2depth 닫기 부분
    $('ul.dropdownmenu').hover(
        function() { 
            //모든 서브를 다 여는 부분
            $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();});
            $('#headerArea').animate({height:300},'fast').clearQueue();
        },function() {
            //모든 서브를 닫는 부분
            $('ul.dropdownmenu li.menu ul').hide();
            $('#headerArea').animate({height:125},'fast').clearQueue();
        });
     
    //밑에는 1depth효과
    $('ul.dropdownmenu li.menu').hover(
       function() { 
           $('.depth1', this).css('color','#ff6600');
        },function() {
            $('.depth1', this).css('color','#333');
    });

    //tab처리
    $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
        $('ul.dropdownmenu li.menu ul').fadeIn('normal');
        $('#headerArea').animate({height:300},'fast').clearQueue();
    });

    $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
        $('ul.dropdownmenu li.menu ul').hide();
        $('#headerArea').animate({height:125},'fast').clearQueue();
    });
});


//top 상단이동코드
$(document).ready(function () {      
    $('.topMove').hide();  //top button 안보임
    $(window).on('scroll',function(){  //스크롤의 위치가 바뀌면 발생하는 이벤트
        var scroll = $(window).scrollTop(); //스크롤의 상단부터의 거리
       
        //$('.text').text(scroll); //스크롤 거리를 출력해준다
        if(scroll>500){  //스크롤 탑의 거리가 500px이 넘어가면 보여진다. 
            $('.topMove').fadeIn('slow');
        }else{
            $('.topMove').fadeOut('fast');
        }
    });
 
   //탑메뉴를 클릭하면 상단 탑메뉴로 이동
    $('.topMove').click(function(e){
       e.preventDefault();

        //상단으로 스르륵 이동합니다.
       $("html,body").stop().animate({"scrollTop":0},1000);  //스크롤의 위치를 이동시킨다.
    });

    //푸터 패밀리 사이트
    $('.select .arrow').toggle(function(e){
        e.preventDefault();
		$('.select .aList').show();
        $('.select .arrow i').removeClass().addClass('fas fa-chevron-down');
	},function(e){
        e.preventDefault();
		$('.select .aList').hide();
        $('.select .arrow i').removeClass().addClass('fas fa-chevron-up');
	});

	//tab키 처리
    $('.select .arrow').on('focus', function () {        
        $('.select .aList').show();	
        $('.select .arrow i').removeClass().addClass('fas fa-chevron-down');
        });
        $('.select .aList li:last').find('a').on('blur', function () {        
        $('.select .aList').hide();
        $('.select .arrow i').removeClass().addClass('fas fa-chevron-up');
    });  

});


