import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Convenio } from '../convenio';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ConvenioService } from '../convenio.service';
import { finalize } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-convenio-form',
    templateUrl: './convenio-form.component.html',
})
export class ConvenioFormComponent implements OnInit {

    convenio: Convenio;
    form: FormGroup;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private convenioService: ConvenioService,
        public toastr: ToastrService
    ) {
        const nav = this.router.getCurrentNavigation();
        this.convenio = nav.extras?.state?.convenio || { ativo: true };
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            id: [this.convenio.id],
            descricao: [this.convenio.descricao, Validators.required],
            ativo: [this.convenio.ativo, Validators.required]
        });
        console.log(this.convenio)
        console.log(this.form)
    }

    salvar() {
        console.log(this.form.value)
        this.convenioService
            .salvar(this.form.value)
            .pipe(finalize(() => {
                this.router.navigateByUrl('admin/convenio');
            }))
            .subscribe(
                () => this.toastr.success('Convênio salvo com sucesso!', 'Sucesso'),
                err => {
                    console.log(err);
                    this.toastr.error('Ocorreu um erro, tente novamente!', 'Erro');
                });
    }
}
