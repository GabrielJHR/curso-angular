import { Component, OnInit } from '@angular/core';
import {Gif} from 'src/app/interfaces/gifs.interface';
import {GifsService} from '../services/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [
  ]
})
export class ResultsComponent {
  
  get results() : Gif[] {
    return this._gifsService.response
  }

  constructor( private _gifsService : GifsService ) {
  }

}
