import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvenioListComponent } from './convenio-list.component';
import { PaginationModule } from 'src/app/components/pagination/pagination.module';
import { RouterModule } from '@angular/router';
import { SearchModule } from '../../../components/search/search.module';

@NgModule({
    declarations: [
        ConvenioListComponent
    ],
    imports: [
        CommonModule,
        PaginationModule,
        RouterModule,
        SearchModule
    ]
})
export class ConvenioListModule { }