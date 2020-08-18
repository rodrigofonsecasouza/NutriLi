export interface Convenio {
    id: number;
    descricao: string;
    ativo: boolean
}

export interface ConvenioPageable {
    content: [Convenio];
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    //pageable: { sort: { … }, offset: 0, pageNumber: 0, pageSize: 10, unpaged: false, … };
    size: number;
    //sort: { sorted: true, unsorted: false, empty: false };
    totalElements: number;
    totalPages: number;
}