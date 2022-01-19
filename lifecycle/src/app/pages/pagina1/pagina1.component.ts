import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component 
  implements 
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy{

  public segundos = 0;
  private _timerSuscription! : Subscription;

  constructor() { }
  ngOnDestroy(): void {
    console.log('onDestroy');
    this._timerSuscription.unsubscribe();
    
  }
  ngAfterViewInit(): void {
    console.log('afterView');
  }
  ngAfterViewChecked(): void {
    console.log('afterViewChecked');
  }
  ngAfterContentChecked(): void {
    console.log('afterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('afterContentInit');
  }
  ngDoCheck(): void {
    console.log('doCheck');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges');
  }

  ngOnInit(): void {
    this._timerSuscription = interval(1000)
      .subscribe(i => this.segundos = i)
  }

}
