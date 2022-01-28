import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2'
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {
  miFormulario: FormGroup = this.fb.group({
    email: ['gabrieljhramos@gmail.com', [
      Validators.email,
      Validators.required
    ]],
    password: ['gabriel', [
      Validators.required,
      Validators.minLength(6)
    ]]
  })
  

  constructor(
    private fb : FormBuilder,
    private router : Router,
    private authService : AuthService
  ) { }

  public login() : void{
    const email = this.miFormulario.get('email')?.value;
    const password = this.miFormulario.get('password')?.value;
    this.authService.login(email, password)
      .subscribe(res => {
        if( res === true ){
          console.log(this.authService.usuario);
          this.router.navigateByUrl('/dashboard');
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: res
          })
        }
      })
  }

}
