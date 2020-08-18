import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

import { Convenio } from '../convenio';
import { ConvenioService } from '../convenio.service';

@Component({
  selector: 'app-convenio-list',
  templateUrl: './convenio-list.component.html',
})
export class ConvenioListComponent implements OnInit {

  convenios: Convenio[] = [];
  @Input() count: number = 0;
  filter: string = '';

  constructor(
    private router: Router,
    private convenioService: ConvenioService
  ) { }

  ngOnInit(): void {
    this.load('', 0);
  }
  load(descricao: string, page: number) {
    this.convenioService
      .list(descricao, page)
      .subscribe(convenios => {
        this.count = convenios.totalElements;
        this.convenios = convenios.content;
      });
  }

  onChangePage({ page }) {
    this.load(this.filter, page);
  }

  editar(convenio: Convenio) {
    this.router.navigateByUrl('/admin/convenio/new', { state: { convenio: convenio } });
  }

  search() {
    this.load(this.filter, 0);
  }
}