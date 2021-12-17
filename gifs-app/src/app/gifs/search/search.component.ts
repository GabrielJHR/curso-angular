import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {GifsService} from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
  
  @ViewChild('txtSearch') txtSearch! : ElementRef<HTMLInputElement>;

  constructor( private gifsService : GifsService) { }

  ngOnInit(): void {
  }

  search(): void {
    this.gifsService.search(this.txtSearch.nativeElement.value)
    this.txtSearch.nativeElement.value = '';
  }

}
