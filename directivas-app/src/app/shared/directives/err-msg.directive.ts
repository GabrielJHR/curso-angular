import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective implements OnInit {
  private _color : string = 'red';
  private _mensaje : string = 'Este campo es requerido';

  @Input() set color( value : string){
    this._color = value;
    this.setColor();
  }
  @Input() set mensaje( value : string){
    this._mensaje = value;
    this.setMensaje();
  }

  @Input() set mostrar( value : boolean){
    this.el.nativeElement.hidden = !value;
  }

  constructor(
    private el : ElementRef<HTMLElement>
  ) {
  }

  ngOnInit(){
    this.setColor();
    this.setClases();
    this.setMensaje();
  }

  setColor(): void{
    this.el.nativeElement.style.color = this._color;
  }

  setMensaje() : void {
    this.el.nativeElement.innerText = this._mensaje;
  }

  setClases() : void{
    this.el.nativeElement.classList.add('form-text');
  }

}
