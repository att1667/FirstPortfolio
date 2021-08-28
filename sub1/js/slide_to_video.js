$(document).ready(function () {
    $('.tabs ul .contlistarea:eq(0)').show(); 

    $('.video ul li a').click(function(){
        $("html,body").stop().animate({"scrollTop":830},1000);
        
        var ind = $('.video ul li a').index(this) + 1;

        $(".tabs ul .contlistarea").hide(); 
        $(".tabs ul .contlistarea:eq("+ind+")").fadeIn(); 

    });
});