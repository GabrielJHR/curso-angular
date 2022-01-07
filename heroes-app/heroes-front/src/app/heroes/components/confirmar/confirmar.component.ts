import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: [
    `
    h2 {
      text-align : center
    }

    p {
      text-align : center;
      padding: 1.1rem;
    }
    `
  ]
})
export class ConfirmarComponent implements OnInit {

  constructor( 
              private dialogRef : MatDialogRef<ConfirmarComponent>,
              @Inject(MAT_DIALOG_DATA) public data: string
             ) { }

  ngOnInit(): void {
  }

  eliminar(){
    this.dialogRef.close(true)
  }

  cancelar(){
    this.dialogRef.close()
  }

}
