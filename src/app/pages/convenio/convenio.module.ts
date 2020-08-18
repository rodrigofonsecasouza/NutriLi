import { NgModule } from '@angular/core';
import { ConvenioListModule } from './listagem/convenio-list.module';
import { ConvenioFormModule } from './cadastro/convenio-form.module';

@NgModule({
  imports: [
    ConvenioListModule,
    ConvenioFormModule
  ]
})
export class ConvenioModule { }