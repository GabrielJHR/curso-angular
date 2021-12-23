import { Component, OnInit } from '@angular/core';
import {Pais} from '../../interfaces/pais.interface';
import {PaisService} from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent {
  public termino : string = "";
  haveError : boolean = false;
  result : Pais[] = [];

  constructor( private _paisService : PaisService) { }
  
  buscar( termino : string) {
    this.termino = termino;
    this.haveError = false;
    this._paisService.buscarCapital(this.termino)
      .subscribe((res : Pais[])=> {
        this.result = res;
      }, (err) => {
        this.haveError = true;
        this.result = [];
      })
  }

  sugerencias( event : string){
    this.haveError = false;
    console.log(event)
  }
}
