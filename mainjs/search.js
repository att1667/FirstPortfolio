$(document).ready(function() {

    $('#list_search .list_select').click(function(e){
        e.preventDefault();
        $('#list_search .list_search_box').show();
        $('#list_search .list_select i').removeClass().addClass('fas fa-chevron-down');
    });


    $('.pro1 a').click(function(e){
        e.preventDefault();
       $('#list_search .list_select span').text('승용차별타이어'); 
       $('#list_search .list_search_box').hide();
       $('#list_search .list_select i').removeClass().addClass('fas fa-chevron-up');
       $('.search_form').attr('action','./concert/list.php?table=concert&mode=search&find=subject');
    });
    $('.pro2 a').click(function(e){
        e.preventDefault();
        $('#list_search .list_select span').text('특수타이어'); 
        $('#list_search .list_search_box').hide();
        $('#list_search .list_select i').removeClass().addClass('fas fa-chevron-up');
       $('.search_form').attr('action','./concert2/list.php?table=concert2&mode=search&find=subject');
    });
});