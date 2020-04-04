import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginServiceService } from 'src/app/shared/service/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private serviceLogin: LoginServiceService,
    private router: Router
  ) { }

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
    this.serviceLogin.login(data).subscribe(result => {
      if (result) {
        this.router.navigate(['/listar-productos']);
      } else {
        alert('Usuario o contraseña invalidos');
      }
    });
  }
}
