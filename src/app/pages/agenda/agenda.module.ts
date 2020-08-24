import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timegrid from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
    dayGridPlugin,
    timegrid,
    interactionPlugin
]);

@NgModule({
    declarations: [
        AgendaComponent
    ],
    imports: [
        CommonModule,
        FullCalendarModule
    ]
})
export class AgendaModule { }