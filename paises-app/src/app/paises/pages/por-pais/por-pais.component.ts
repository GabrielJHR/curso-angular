import { Component} from '@angular/core';
import {Pais} from '../../interfaces/pais.interface';
import {PaisService} from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {
  public termino : string = "";
  haveError : boolean = false;
  result : Pais[] = [];
  sugerenciasResponse : Pais[] = [];

  constructor( private _paisService : PaisService) { }
  
  buscar( termino : string) {
    this.termino = termino;
    this.haveError = false;
    this._paisService.buscarPais(this.termino)
      .subscribe((res : Pais[])=> {
        this.result = res;
        this.sugerenciasResponse = []
      }, (err) => {
        this.haveError = true;
        this.result = [];
        console.log(err)
      })
  }

  sugerencias( event : string){
    this.haveError = false;
    this.sugerenciasResponse = [];
    if(this.sugerenciasResponse){
      this._paisService.buscarPais(event)
        .subscribe(resp => {
          this.sugerenciasResponse = resp;
          this.sugerenciasResponse = this.sugerenciasResponse.slice(0,5)
      })
    }
  }

}
