import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {
  persona = {
    genero: 'M',
    notificaciones: true
  }

  terminosCond : boolean = false;
}
