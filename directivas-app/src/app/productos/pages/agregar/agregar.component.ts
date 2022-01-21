import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {
  color : string = 'red';

  miFormulario : FormGroup = this.fb.group({
    nombre : ['', Validators.required]
  })

  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
  }

  campoInvalido(campo : string) : boolean{
    if(this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched){
      return true
    }else {
      return false
    }
  }

  cambiarColor(){
    this.color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }

}
