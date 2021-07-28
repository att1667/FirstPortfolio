// JavaScript Document

$(document).ready(function() {
    var timeonoff;   //타이머 처리
    var imageCount=3;   //이미지개수
    var cnt=1;   //이미지 순서
    var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
    
    $('.btn1').css('border','#fff');
    $('.btn1').css('width','40');
    $('.gallery .link1').fadeIn('slow'); //첫번째 이미지
 
    function moveg(){
	  if(cnt==imageCount+1)cnt=1;
	  if(cnt==imageCount)cnt=0;  //카운트 초기화
		
      cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  
     for(var i=1;i<=imageCount;i++){
            $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
     }
     $('.gallery .link'+cnt).fadeIn('slow'); //자신이미지가 
	 		                    
     for(var i=1;i<=imageCount;i++){
          $('.btn'+i).css('background','#fff');
          $('.btn'+i).css('width','16');  //버튼불다꺼!!
      }
      $('.btn'+cnt).css('background','#fff');
      $('.btn'+cnt).css('width','40');//자신만 불켜                 
       if(cnt==imageCount)cnt=0;
     }
    timeonoff= setInterval( moveg , 5000);// 타이머를 동작 1~5이미지를 순서대로 자동 처리

   $('.mbutton').click(function(event){  //각각의 버튼 클릭시
	     var $target=$(event.target); //클릭한 버튼 $target
         clearInterval(timeonoff); //타이머 중지     
	 
	     for(var i=1;i<=imageCount;i++){
	         $('.gallery .link'+i).hide(); //모든 이미지 안보인다.
         } 
	 
		  if($target.is('.btn1')){
				 cnt=1;
		  }else if($target.is('.btn2')){
				 cnt=2; 
		  }else if($target.is('.btn3')){ 
				 cnt=3; 
		  }else if($target.is('.btn4')){
				 cnt=4; 
		  }else if($target.is('.btn5')){
				 cnt=5; 
		  } 
		  $('.gallery .link'+cnt).fadeIn('slow');  //자기 자신만 이미지가 보인다
		  
		  for(var i=1;i<=imageCount;i++){
			  $('.btn'+i).css('background','#fff');
        $('.btn'+i).css('width','16'); //버튼 모두불꺼
		  }
          $('.btn'+cnt).css('background','#fff');
          $('.btn'+cnt).css('width','40');//자신 버튼만 불켜 
          if(cnt==imageCount)cnt=0;  //카운트 초기화
          timeonoff= setInterval( moveg , 5000); //타이머
          
          if(onoff==false){
		   onoff=true;
		   $('.ps').css('background','url(images/stop_icon.png) center no-repeat');
	     }
    });
	
	 //stop/play 버튼 클릭시 타이머 동작/중지
  $('.ps').click(function(){ 
       if(onoff==true){
	       clearInterval(timeonoff);   // stop버튼 클릭시
		   $(this).css('background','url(images/stop_icon.png) center no-repeat');
           onoff=false;   
	   }else{
		  timeonoff= setInterval( moveg , 5000); //play버튼 클릭시
		   $(this).css('background','url(images/play_icon.png) center no-repeat');
		   onoff=true; 
	   }
  });
	
  //왼쪽/오른쪽 버튼 처리
  $('.visual .btn').click(function(){

      clearInterval(timeonoff); 

      if($(this).is('.btnRight')){
          if(cnt==imageCount)cnt=0;  //카운트가 마지막 번호(5)라면 초기화 0
          if(cnt==imageCount+1)cnt=1;  
          cnt++; //카운트 1씩증가
      }else if($(this).is('.btnLeft')){
          if(cnt==1)cnt=imageCount+1;
          if(cnt==0)cnt=imageCount;
          cnt--; //카운트 감소
      }

   for(var i=1;i<=imageCount;i++){
        $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
   }
   $('.gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
                         
    for(var i=1;i<=imageCount;i++){
        $('.btn'+i).css('background','#fff');
        $('.btn'+i).css('width','16'); //버튼불다꺼!!
    }
    $('.btn'+cnt).css('background','#fff');
    $('.btn'+cnt).css('width','40');//자신만 불켜  
  
    if($(this).is('.btnRight')){
      if(cnt==imageCount)cnt=0;
    }else if($(this).is('.btnLeft')){
      if(cnt==1)cnt=imageCount+1;
    }
    
    timeonoff= setInterval( moveg , 5000);
  
   if(onoff==false){
      onoff=true;
      $('.ps').css('background','url(images/stop_icon.png) center no-repeat');
    }
  });
  
  $(function () {
    $('.responsiveGallery-wrapper').responsiveGallery({
        animatDuration: 400, //动画时长 单位 ms
        $btn_prev: $('.responsiveGallery-btn_prev'),
        $btn_next: $('.responsiveGallery-btn_next')
    });
  });
          
});



