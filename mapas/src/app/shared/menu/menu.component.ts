import { Component } from '@angular/core';

interface MenuItem{
  nombre: string;
  link: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class MenuComponent{

  menu : MenuItem[] = [
    {nombre: 'Fullscreen', link: '/mapas/fullscreen'},
    {nombre: 'Zoom Range', link: '/mapas/zoom-range'},
    {nombre: 'Marcadores', link: '/mapas/marcadores'},
    {nombre: 'Propiedades', link: '/mapas/propiedades'}
  ]

  constructor() { }

}
