import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PaisService} from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';
import {switchMap, tap} from 'rxjs';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
  pais! : Pais;


  constructor( private activatedRoute : ActivatedRoute,
              private paisService : PaisService
             ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.paisService.verPais(id)),
        tap( console.log)
      ).subscribe((resp : Pais[]) => {
        this.pais = resp[0];
        console.log(this.pais);
      })
  }

}
