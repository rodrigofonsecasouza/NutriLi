import { Component } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
    templateUrl: './home.component.html',
})
export class HomeComponent {
    constructor(private appService: AppService) { }
    getClasses() {
        const classes = {
            'pinned-sidebar': this.appService.getSidebarStat().isSidebarPinned,
            'toggeled-sidebar': this.appService.getSidebarStat().isSidebarToggeled
        }
        return classes;
    }
    toggleSidebar() {
        this.appService.toggleSidebar();
    }
}