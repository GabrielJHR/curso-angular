import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Usuario} from 'src/app/auth/interfaces/usuario.interface';
import {AuthService} from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
      *{
        margin: 20px
      }
    `
  ]
})
export class DashboardComponent{

  constructor(
    private router : Router,
    private authService : AuthService
  ) { }

  get usuario() : Usuario{
    return this.authService.usuario
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth')
  }

}
