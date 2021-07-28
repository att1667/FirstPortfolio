$(document).ready(function () {
   $('.slideMenu a').click(function(e){
      e.preventDefault();
      var value=0;

      if($(this).hasClass('link1')){ 
         value= $('.slide_con:eq(0)').offset().top - 120;
      }else if($(this).hasClass('link2')){
         value= $('.slide_con:eq(1)').offset().top - 120; 
      }
      
      $("html,body").stop().animate({"scrollTop":value},1000);
   });
});
