import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent {
  miFormulario: FormGroup = this.fb.group({
    nombre : ['Gabriel Ramos', [
      Validators.required,
      Validators.minLength(4)
    ]],
    email: ['gabriel@gmail.com', [
      Validators.email,
      Validators.required
    ]],
    password: ['123456', [
      Validators.required,
      Validators.minLength(6)
    ]]
  })
  

  constructor(
    private fb : FormBuilder,
    private router : Router,
    private authService : AuthService
  ) { }

  public registrarse() : void{
    const {email, name, password} = this.miFormulario.value;
    this.authService.registro(name, email, password)
      .subscribe(res => {
        if( res === true ){
          this.router.navigateByUrl('/dashboard');
          Swal.fire({
            icon: 'success',
            title: 'Usuario creado',
            text: 'Usuario creado satisfactoriamente'
          })
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
