import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
    .mapa-container{
      height: 100%;
      width: 100%;
    }

    .mapa-info{
      background: rgba(255,255,255, 0.4);
      position: fixed;
      bottom: 50px;
      padding: 10px;
      left: 50px;
      width: 300px;
      z-index: 2;
      transition: 300ms;
    }
    
    .mapa-info:hover{
      background: rgba(255,255,255, 1);
    }
    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {
  mapa! : mapboxgl.Map;
  @ViewChild('map') divMapa! : ElementRef;

  zoomLevel : number = 14;
  center : [number, number] = [-58.381506029747456, -34.603579924148356];

  constructor() { }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.center, // starting position [lng, lat]
      zoom: this.zoomLevel // starting zoom
    });

    this.mapa.on('zoomend', ( _ ) => {
      this.zoomLevel = this.mapa.getZoom();
    })

    this.mapa.on('zoomend', ( _ ) => {
      if(this.zoomLevel > 18){
        this.mapa.zoomTo(18)
      }
    })

    this.mapa.on('move', () => {
      this.center = [this.mapa.getCenter().lng, this.mapa.getCenter().lat]
    })
  }

  ngOnDestroy(){
    this.mapa.off('zoom', () => {});
    this.mapa.off('zoomend', () => {});
    this.mapa.off('move', () => {});
  }

  zoomIn(){
    this.mapa.zoomIn();
  }

  zoomOut(){
    this.mapa.zoomOut();
  }

  changeZoom( value : string){
    this.mapa.zoomTo(Number(value))
  }
}
