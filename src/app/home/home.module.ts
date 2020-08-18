import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CoreModule } from '../core/core.module';
import { HomeRoutingModule } from './home.routing.module';
import { ConvenioModule } from '../pages/convenio/convenio.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        CoreModule,
        HomeRoutingModule,
        ConvenioModule
    ],
    providers: []
})
export class HomeModule {

}