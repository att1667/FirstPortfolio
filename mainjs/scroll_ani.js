$(document).ready(function () {
    var h1= $('#content section:eq(1)').offset().top-1000 ;
    var h2= $('#content section:eq(2)').offset().top-1000 ;
    var h3= $('#content section:eq(3)').offset().top-1000 ;
    var h4= $('#content section:eq(4)').offset().top-1000 ;
    
    //스크롤의 좌표가 변하면.. 스크롤 이벤트
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();

        $('.text').text(scroll);
      
        if(scroll>=550 && scroll<900){
            $('#content section:eq(0)').addClass('boxMoveBot');
        }else if(scroll>=900 && scroll<2000){
             $('#content section:eq(1)').addClass('boxMoveBot');
        }else if(scroll>=2000 && scroll<3000){
             $('#content section:eq(2)').addClass('boxMove');
        }else if(scroll>=3000 && scroll<3100){
             $('#content section:eq(3)').addClass('boxMoveBot');
        }else if(scroll>=2600){
             $('#content section:eq(4)').addClass('boxMove');
        }
    });
});