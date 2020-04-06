import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from 'src/app/core/services/rest.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListProductsService extends RestService {

  constructor(
    protected http: HttpClient) {
    super(http);
  }

  public listProducts(id:number): Observable<any> {
    const rutaPeticion = `/api/product/${id}`;
   return  this.doGet(rutaPeticion);
  }

}
