import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { GlobalErrorComponent } from '../errors/global-error/global-error.component';
import { NotFoundComponent } from '../errors/not-found/not-found.component';
import { FormsComponent } from '../pages/forms/forms.component';
import { TablesComponent } from '../pages/tables/tables.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [{
            path: '',
            component: DashboardComponent,
            data: {
                title: 'Photo upload'
            }
        },
        { path: 'forms', component: FormsComponent },
        { path: 'tables', component: TablesComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {

}