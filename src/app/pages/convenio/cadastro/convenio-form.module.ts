import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvenioFormComponent } from './convenio-form.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ConvenioFormComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class ConvenioFormModule { }