import { Component, OnInit } from '@angular/core';

interface MenuItem{
  etiqueta: string;
  link: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
      li{
        cursor: pointer
      }
    `
  ]
})
export class SidemenuComponent {
  menuTemplate : MenuItem[] = [
    {
      etiqueta: 'Basicos',
      link: '/templates/basicos'
    },
    {
      etiqueta: 'Dinamicos',
      link: '/templates/dinamicos'
    },
    {
      etiqueta: 'Switches',
      link: '/templates/switches'
    }  
  ]

  menuReactive : MenuItem[] = [
    {
      etiqueta: 'Basicos',
      link: '/reactivos/basicos'
    },
    {
      etiqueta: 'Dinamicos',
      link: '/reactivos/dinamicos'
    },
    {
      etiqueta: 'Switches',
      link: '/reactivos/switches'
    }  
  ]

}
