import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  textoLowercase : string = 'texto lowercase';
  textoUppercase : string = 'texto uppercase';
  textoNoCapitalizado : string = 'TexTo no CaPitAlizado';

  fecha : Date = new Date();


  

}
