import { RestService } from "src/app/core/services/rest.service";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ListCategoryService extends RestService {

    constructor(
        protected http: HttpClient) {
        super(http);
    }

    public listCategories(): Observable<any>{
        const pathService = "/api/category";
        return this.doGet(pathService);
    }
}
