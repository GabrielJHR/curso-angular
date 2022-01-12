import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EmailValidatorService} from 'src/app/shared/validators/email-validator.service';
import {ValidatorService} from 'src/app/shared/validators/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [
      Validators.required,
      Validators.pattern(this.validators.patron)
    ]],
    email: ['', [
      Validators.required,
      Validators.pattern(this.validators.patronEmail)
    ], [
      this.emailValidator
    ]],
    username: ['', [
      Validators.required,
      this.validators.noPuedeSerStrider
    ]],
    password: ['', [
      Validators.required
    ]],
    password2: ['', [
      Validators.required
    ]],
  }, {
    validators: this.validators.camposIguales('password', 'password2')
  })

  constructor(
    private fb : FormBuilder,
    private validators : ValidatorService,
    private emailValidator : EmailValidatorService
  ) { }

  ngOnInit(): void {
  }

  get emailError() : string {
    const error = this.miFormulario.get('email')?.errors;

    if(error?.['required']){
      return 'El email es requerido.';
    }
    else if(error?.['pattern']){
      return 'Se debe ingresar un email valido.';
    }
    else if(error?.['emailOcupado']){
      return 'El email ya esta ocupado por otro usuario.';
    }
    else {
      return '';
    }
  }

  campoInvalido(campo : string){
    return this.miFormulario.controls[campo]?.errors && this.miFormulario.controls[campo]?.touched
  }

  registrarse(){
    
    this.miFormulario.reset({
      nombre: 'Gabriel Ramos',
      email: 'test1@test.com',
      username: 'test1'
    })
    this.miFormulario.markAllAsTouched()

  }

  passwordDistintas(){
    return this.miFormulario.getError('distintos')
  }

}
