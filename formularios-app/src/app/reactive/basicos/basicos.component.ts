import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  // miFormulario : FormGroup = new FormGroup({
    // nombre : new FormControl(''),
    // precio : new FormControl(),
    // existencias : new FormControl(),
  // });

  constructor(
   private formBuilder : FormBuilder 
  ) { }

  miFormulario : FormGroup = this.formBuilder.group({
    nombre : ['', [Validators.required, Validators.minLength(3)]],
    precio: [null ,[
      Validators.required,
      Validators.min(0)
    ]],
    existencias: [null, [
      Validators.required,
      Validators.min(0)
    ]]
  })

  campoInvalido(campo : string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    this.miFormulario.reset()
  }

}
