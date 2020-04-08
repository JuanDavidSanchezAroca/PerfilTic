import { Injectable } from '@angular/core';
import { RestService } from 'src/app/core/services/rest.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService extends RestService{

  constructor(protected http: HttpClient) {
    super(http);
   }

   public getUsdPrice():Observable<any> {
     const rutaCurrency = `/currency/api/live?access_key=aaed874c89ef48420c6f7a00aa3dc222&currencies=COP&source=USD&format=1`;
     return this.doGet(rutaCurrency);
   }
}
