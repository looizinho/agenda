document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    locale: 'pt-BR',
    initialView: 'dayGridMonth',
    // height: 'auto',
    // aspectRatio: 2.5,
    // themeSystem: 'bootstrap5',
    // headerToolbar: {
    //   end: 'today,next',
    //   center: 'title',
    //   start: 'dayGridWeek,dayGridMonth', //,listMonth'
    // },
    headerToolbar: {
      end: 'dayGridWeek,dayGridMonth',
      start: 'title'
    },
    validRange: {
      start: '2023-04-01', // set the start date to the beginning of the year
      end: '2023-06-31' // set the end date to the end of the year
    },
    titleRangeSeparator: '..',
    buttonText: {
      week: 'semana',
      month: 'mês',
      list: 'lista',
      today: 'hoje'
    },
    eventColor: 'rgba(0,0,0,0)',
    eventBackgroundColor: 'red',
    eventBorderColor: '#714fac',
    
    events: [
      {
        title: 'estudando',
        start: '2023-04-02',
      },

      {
        title: '',
        start: '2023-04-04',
        display: 'background'
      },
      {
        title: 'em evento',
        start: '2023-04-04',
      },
      
      {
        title: 'indisponível',
        start: '2023-04-07',
        end: '2023-04-10',
        // url: '//sidekick.tec.br'
      },

      {
        title: '',
        start: '2023-04-12',
        end: '2023-04-16',
        display: 'background'
      },
      {
        title: 'em evento',
        start: '2023-04-12',
        end: '2023-04-16',
        // url: '//sidekick.tec.br'
      }
    ]
  });

  calendar.render();
});