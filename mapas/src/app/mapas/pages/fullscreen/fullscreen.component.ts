import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.component.html',
  styles: [
    `
    #map{
      height: 100%;
      width: 100%;
    }
    `
  ]
})
export class FullscreenComponent implements OnInit{
  constructor() { }

  ngOnInit(){
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-58.381506029747456, -34.603579924148356], // starting position [lng, lat]
      zoom: 14 // starting zoom
    });
  }

}
