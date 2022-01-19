import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {switchMap, tap} from 'rxjs';
import {Pais} from '../../interfaces/pais.interface';
import {PaisesService} from '../../services/paises.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {
  miFormulario : FormGroup = this.fb.group({
    continente: ['', Validators.required],
    pais: ['', Validators.required],
    paisLimitrofe: ['', Validators.required]
  })

  private _regiones: string[] = ["africa", "americas", "asia", "europe", "oceania"];
  paises: Pais[] = [];
  fronteras : string[] = [];

  constructor(
    private fb : FormBuilder,
    private paisesService : PaisesService
  ) { }

  ngOnInit(): void {
    this.miFormulario.get('continente')?.valueChanges
      .pipe(
        tap(( _ ) => this.miFormulario.get('pais')?.reset('')),
        switchMap(region => this.paisesService.porRegion(region))
      ).subscribe((paises : Pais[]) => {
        this.paises = paises;
      })

    this.miFormulario.get('pais')?.valueChanges
      .pipe(
        tap(( _ ) => {
          this.fronteras = []
          this.miFormulario.get('fronteras')?.reset()
        }),
        switchMap(code => this.paisesService.infoPais(code))
      )
      .subscribe((pais : Pais | null) => {
        pais?.borders?.map((item) => {
          this.paisesService.infoPaisSmall(item)
            .subscribe((pais : Pais) => this.fronteras.push(pais?.name.common))
        })
      })

  }
  
  get regiones(){
    return [...this._regiones]
  }

  enviar(){
    return true
  }

  // regionSeleccionada(){
    // const region = this.miFormulario.get('continente')?.value;
    // this.miFormulario.get('pais')?.reset('');
    // this.paises = [];

    // this.paisesService.porRegion(region)
      // .subscribe((paises : Pais[]) => this.paises = paises)
  // }

  // paisSeleccionado(){
    // this.fronteras = [];
    // const paisSeleccionado = this.miFormulario.get('pais')?.value;

    // this.paisesService.infoPais(paisSeleccionado)
      // .subscribe( pais  => this.fronteras = pais.borders || [])
  // }

}
