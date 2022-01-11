import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario! : NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  validarPrecio() : boolean {
    return this.miFormulario?.controls['precio'].touched
            && this.miFormulario?.value['precio'] < 0
  }

  validarNombre() : boolean {
    return this.miFormulario?.controls['producto'].invalid && this.miFormulario?.controls['producto'].touched;
  }

  guardar(){
    console.log(this.miFormulario.value);
    this.miFormulario.resetForm();
  }

}
