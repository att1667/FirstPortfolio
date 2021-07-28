$(document).ready(function(){
    $('.navBox ul li:eq(0)').find('a').addClass('spy'); 
    
    var smb = $('.content_area').offset().top-400;
    var h1 = $('.content_area section:eq(1)').offset().top-200;
        
    
    $(window).on('scroll',function(){
        var scroll=$(window).scrollTop(); 
            
        $('.text').text(scroll);
        
        if(scroll>smb-200){
            $('#headerArea').hide();
            $('.navBox').addClass('menu_sticky');
        }else{
            $('#headerArea').show();
            $('.navBox').removeClass('menu_sticky');
        }
        
        $('.navBox ul li').find('a').removeClass('spy');
        
        if(scroll>=0 && scroll<h1){
            $('.navBox ul li:eq(0)').find('a').addClass('spy');
        }else if(scroll>=h1){
            $('.navBox ul li:eq(1)').find('a').addClass('spy');
        };
        
    });

        $('.navBox ul li a').click(function(){
           var value=0;
            
            if($(this).hasClass('link1')){
                value=$('.content_area section:eq(0)').offset().top-100;
            }else if($(this).hasClass('link2')){
                value=$('.content_area section:eq(1)').offset().top-50;
            }
            $("html,body").stop().animate({"scrollTop":value},1000);
        });
});