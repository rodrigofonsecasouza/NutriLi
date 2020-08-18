import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Convenio, ConvenioPageable } from './convenio';

const API = environment.ApiUrl;

@Injectable({ providedIn: 'root' })
export class ConvenioService {
    constructor(private http: HttpClient) { }

    list(descricao: string, page: number) {
        const params = new HttpParams()
            .append('page', page.toString()).append('size', '10').append('descricao', descricao);

        return this.http
            .get<ConvenioPageable>(API + '/convenio', { params });
    }

    salvar(convenio: Convenio) {
        if (convenio.id) {
            return this.editar(convenio, convenio.id);
        }
        return this.create(convenio);
    }

    private create(convenio: Convenio) {
        return this.http.post(API + '/convenio', { ...convenio });
    }

    private editar(convenio: Convenio, id: number) {
        return this.http.put(API + '/convenio/' + id, { ...convenio });
    }
}