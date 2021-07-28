document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    
    var to_day = new Date();
    var to_y= to_day.getFullYear();
    var to_m= to_day.getMonth()+1;
    var to_d= to_day.getDate();
      
    if(to_d<10){
       to_d='0'+to_d;
    }
    if(to_m<10){
       to_m='0'+to_m;
    }
  
    var to_full_day = to_y+'-'+to_m+'-'+to_d;   
    console.log(to_full_day);
      
    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: 'prevYear,prev,next,nextYear today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,dayGridDay'
      },
      initialDate: to_full_day,
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      dayMaxEvents: true, // allow "more" link when too many events
      events: [
        {
          title: 'Nuerburgring 24H',
          start: '2021-06-03'
        },
        {
          title: 'Radical',
          start: '2021-06-07',
        },
        {
            title: 'Supercar Challenge',
            start: '2021-06-07',
          },
        {
          title: 'British F4',
          start: '2021-06-13',
        },
        {
          title: '유럽 TCR Series',
          start: '2021-06-18',
        },
        {
          title: '현대 N 페스티벌',
          start: '2021-06-19'
        },
        {
          title: '유럽 TCR Series',
          start: '2021-06-20'
        },
        {
          title: '현대 N 페스티벌',
          start: '2021-06-20'
        },
        {
          title: 'W Series',
          start: '2021-06-26'
        },
        {
          title: 'Radical',
          start: '2021-07-03'
        },
        {
          title: '태국 슈퍼 시리즈',
          start: '2021-07-06',
          end: '2021-07-11'
        },
        {
          title: 'Supercar Challenge',
          start: '2021-07-09' ,
          end: '2021-07-12'
        },
        {
          title: '24H Series',
          start: '2021-07-16',
          end: '2021-07-19'
        },
        {
          title: '현대 N 페스티벌',
          start: '2021-07-17'
        },
        {
          title: '유럽 TCR Series',
          start: '2021-07-29',
          end: '2021-08-01'
        },
        {
          title: 'British F4',
          start: '2021-07-31'
        },
        {
          title: 'Super Taikyu Series',
          start: '2021-07-31'
        }
      ]
    });

    calendar.render();
  });