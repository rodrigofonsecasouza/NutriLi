import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { FormsComponent } from '../pages/forms/forms.component';
import { TablesComponent } from '../pages/tables/tables.component';
import { TypographyComponent } from '../pages/typography/typography.component';
import { MapsComponent } from '../pages/maps/maps.component';
import { NotificationsComponent } from '../pages/notifications/notifications.component';
import { ConvenioFormComponent } from '../pages/convenio/cadastro/convenio-form.component';
import { ConvenioListComponent } from '../pages/convenio/listagem/convenio-list.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                component: DashboardComponent,
            },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'convenio', component: ConvenioListComponent },
            { path: 'convenio/new', component: ConvenioFormComponent },
            { path: 'convenio/:id', component: ConvenioFormComponent },
            { path: 'forms', component: FormsComponent },
            { path: 'tables', component: TablesComponent },
            { path: 'typography', component: TypographyComponent },
            { path: 'maps', component: MapsComponent },
            { path: 'notifications', component: NotificationsComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {

}