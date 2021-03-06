import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Usuario} from '../../interfaces/usuario.interface';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(
    private router : Router,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
  }
  
  ingresar(){
    this.authService.login()
      .subscribe((res : Usuario) => {
        if(res.id){
          this.router.navigate(['/heroes']);
        }
      })
  }
}
