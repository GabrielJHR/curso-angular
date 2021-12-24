import { Component } from '@angular/core';
import {PaisService} from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';
import {tap} from 'rxjs';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {
  regiones : string[] = ["africa", "americas", "asia", "europe", "oceania"];
  regionActiva : string = '';
  paises : Pais[] = [];

  constructor( private paisService : PaisService) { }

  public activarRegion( region : string){
    this.regionActiva = region;
    this.paisService.porRegion(region)
      .pipe(
        tap(console.log)
      )
      .subscribe((resp : Pais[]) => {
        this.paises = resp
      })
  }

}
