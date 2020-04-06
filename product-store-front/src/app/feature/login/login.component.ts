import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { SecurityService } from 'src/app/core/services/security/security.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  message = '';
  loading = false;
  returnUrl : string;
  messageInformative = 'Input username and password';

  loginForm: FormGroup;
  constructor(
    private loginService : SecurityService) { }

  ngOnInit() {
    this.loginForm = new FormBuilder().group({
      username: new FormControl('username', [Validators.required]),
      password: new FormControl('password', [Validators.required])
    });
    this.loginForm.controls.username.setValue('');
    this.loginForm.controls.password.setValue('');
  }

  public controlHasError(controlName: string, validationType: string): boolean {
    const control = this.loginForm.controls[controlName];
    if (!control) {
      return false;
    }
    const result =
      control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }

  public login() {
    const controls = this.loginForm.controls;
    if (this.loginForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      return;
    }
    const data = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    };   
    this.loading = true;
    this.loginService.authenticate(data.username,data.password).subscribe(result => {
       localStorage.setItem('user', result.user);
       localStorage.setItem('userRol', JSON.stringify(result.userRol))
       this.loginService.isSession = true;
       location.replace('/list-category');
       
    },
    err =>{
      this.loading = false;
      const error = err as HttpErrorResponse;
      if(error.status === 403){

        this.message = 'UserName or Password Incorrect!!';
        
      }else{
        this.message = String(err.error.message);
      }
      Swal.fire('Oops',this.message,'error');
    });
  }
}
