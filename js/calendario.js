function iniciarCalendarioAdm(id){
    'use strict';
    let calendarEl = document.getElementById(id);
    let calendar = new FullCalendar.Calendar(calendarEl, {
        
        initialView: 'dayGridMonth',
        headerToolbar:{
            start: 'prev,next',//,today',
            center: 'title',//,
            end: 'today'//'dayGridMonth, timeGridWeek, timeGridDay'
        },
        buttonText:{
            today:    'hoje',
            month:    'mês',
            week:     'semana',
            day:      'dia'
        },
        locale:'pt-br',
        dateClick: function(info) {
            alert('Clicked on: ' + info.dateStr);
            alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
            alert('Current view: ' + info.view.type);
            // change the day's background color just for fun
            info.dayEl.style.backgroundColor = 'red';
            
        },
        events: [
            
              {
                "id": 2,
                "title": "Long Event",
                "start": "2022-10-07",
                "end": "2022-10-10",
                "color": "red",
                "textColor": "yellow"
              },
              {
                "id": "999",
                "title": "Repeating Event",
                "start": "2022-10-09 14:00:00"
              }
        ],
        eventClick: function(info) {
          window.location.href=`https://www.sitequalquer.com.br/evento/${info.event.id}`
      }
    });
    calendar.render();
    calendarEl.classList.add('visually-hidden')
}