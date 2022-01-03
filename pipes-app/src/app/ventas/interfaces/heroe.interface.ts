export enum Color{
  rojo = 'rojo', azul = 'azul', verde = 'verde', amarillo = 'amarillo'
}

export interface Heroe {
  nombre : string;
  vuela : boolean;
  color : Color;
}
