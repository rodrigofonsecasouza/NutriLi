import { OnInit, Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import ptBr from '@fullcalendar/core/locales/pt-br';

@Component({
    selector: 'app-agenda',
    templateUrl: './agenda.component.html',
})
export class AgendaComponent implements OnInit {

    constructor() { }

    calendarOptions: CalendarOptions = {
        initialView: 'timeGridWeek',
        locales: [ptBr],
        locale: 'pt-br',
        dayHeaderFormat: {
            weekday: 'long',
        },
        contentHeight: 550,
        navLinks: true,
        duration: '00:15:00',
        slotDuration: { minute: 15 },
        showNonCurrentDates: false,
        slotLabelFormat: {
            hour: 'numeric',
            minute: '2-digit',
            omitZeroMinute: false,
            meridiem: false
        },
        eventTimeFormat: {
            hour: '2-digit',
            minute: '2-digit',
            meridiem: false
        },
        dayHeaderClassNames: 'capitalize',
        headerToolbar: {
            left: 'prev,next,today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [
            {
                id: 'a',
                title: 'my event',
                start: '2020-08-24T08:00:00',
                end: '2020-08-24T08:15:00',
                backgroundColor: 'blue'
            },
            {
                id: 'a',
                title: 'my event',
                start: '2020-08-24 08:15:00',
                end: '2020-08-24 08:30:00'
            },
            {
                id: 'a',
                title: 'my event',
                start: '2020-08-24 08:30:00',
                end: '2020-08-24 09:00:00'
            }
        ]
    }


    ngOnInit(): void {

    }

}