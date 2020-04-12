import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { finalize } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})

export class SecurityService{

    private autheticate = false;

    public isSession : boolean;
    public isLogout : false;


    constructor(private http: HttpClient){
        this.isSession = localStorage.getItem('userName') != null;
    }

    authenticate(nameUser: string , passwordUser: string) :Observable<any> {
        const body = {
            user: nameUser,
            password:passwordUser
        };

        const header = new HttpHeaders().set('Content-type','application/json')
        .set('Authorization','basic');
        const rutaPeticion = `/api/login`;
        return this.http.post(rutaPeticion,body,{
            headers : header,
            responseType: 'json',
            observe:'body'
        });
    }

    logout(){
        localStorage.clear();
        location.replace('/');
        this.isSession= false;
        this.http.post('/api/logout',{}).pipe(
            finalize(() => {})
        ).subscribe();
    }

}