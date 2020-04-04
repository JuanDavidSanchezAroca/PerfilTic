import { Injectable } from '@angular/core';
import { RestService } from 'src/app/core/rest.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService extends RestService {

  constructor(http: HttpClient) {
    super(http);
  }
  login(data) {
    const rutaPeticion = ``;
    return this.doPost(rutaPeticion, data);
  }
}
