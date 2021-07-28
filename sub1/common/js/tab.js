// JavaScript Document

$(document).ready(function(){
    var cnt=3; 
    $('.contlist:eq(0)').show();
    $('.tab1').addClass('current');
    
    $('.tab').click(function(e) { 
        e.preventDefault(); 

        var ind = $(this).index('.tab'); 

        $(".contlist").hide(); 
        $(".contlist:eq("+ind+")").fadeIn('fast'); 
        $('.tab').removeClass('current'); //클릭한 해당 탭 메뉴만 활성화
        $(this).addClass('current'); //클릭한 해당 탭 메뉴만 활성화

     });
});
  
