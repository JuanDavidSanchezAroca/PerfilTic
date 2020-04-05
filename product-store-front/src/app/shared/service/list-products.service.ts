import { Injectable } from '@angular/core';
import { Product } from '../../shared/model/product';
import { from } from 'rxjs';
import { RestService } from 'src/app/core/services/rest.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListProductsService extends RestService {

  constructor(http: HttpClient) {
    super(http);
  }

  public listProducts() {
    const rutaPeticion = ``;
    this.doGet(rutaPeticion);
  }

}
