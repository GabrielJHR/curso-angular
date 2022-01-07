import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {switchMap} from 'rxjs';

import { Heroe } from '../../interfaces/heroe.interface';
import {HeroesService} from '../../services/heroes.service';
import {Publisher} from '../../interfaces/heroe.interface';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmarComponent} from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
      img{
        max-width: 100%;
        height: 100%;
      }
    `
  ]
})
export class AgregarComponent implements OnInit {
  publishers = [
    {
      id : 'DC Comics',
      descripcion : 'DC - Comics'
    },
    {
      id : 'Marvel Comics',
      descripcion : 'Marvel - Comics'
    }
  ]

  heroe : Heroe = {
    publisher: Publisher.DCComics,
    first_appearance: '',
    alter_ego: '',
    superhero: '',
    characters: ''
  }

  constructor( private activatedRoute : ActivatedRoute,
                private heroesService : HeroesService,
                private router : Router,
                private _snackBar : MatSnackBar,
                private dialog : MatDialog
            ) { }

  ngOnInit(): void {
    if(!this.router.url.includes('editar')){
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.heroesService.getHeroe(id))
      ).subscribe(res => {
        this.heroe = res;
      })
  }

  openSnackBar(mensaje : string) {
    this._snackBar.open(mensaje, 'Done', {
      duration: 5000
    })
  }

  borrarFormulario() {
    this.heroe = {
      publisher: Publisher.DCComics,
      first_appearance: '',
      alter_ego: '',
      superhero: '',
      characters: ''
    }
  }

  guardar(){
    //Si se esta ingresando un nuevo heroe se va guardar en la base de datos, si el id del heroe ya esta en la base de datos se va a actualizar

    if(!this.heroe.id){
      this.heroesService.postHeroe(this.heroe)
        .subscribe( res => {
          this.heroe = res;
          this.router.navigate(['/heroes', this.heroe.id])
          this.openSnackBar('El heroe fue agregado con exito');
        }, err => {
          console.log(err);
        })
    }
    else {
      this.heroesService.putHeroe(this.heroe)
        .subscribe( res => {
          this.heroe = res;
          this.router.navigate(['/heroes/heroe', this.heroe.id])
          this.openSnackBar('El heroe fue editado con exito');
        }, err => {
          console.log(err);
        })
    }
  }

  eliminarHeroe(){
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '350px',
      data: this.heroe.superhero
    })

    dialog.beforeClosed()
      .subscribe( eliminar => {
        if(eliminar){
          this.heroesService.deleteHeroe(this.heroe)
            .subscribe(res => {
              this.router.navigate(['/heroes/listado'])
              this.openSnackBar('El heroe fue eliminado con exito');
            }, err => {
              console.log(err)
            })
        }
      })
  }

}
