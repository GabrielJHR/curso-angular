import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .container{
        padding : 2em
      }

      mat-sidenav{
        width: 90%;
        max-width : 300px;
      }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor(
    private router : Router,
    private authService : AuthService
  ) { }

  get auth() {
    return this.authService.auth
  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.setItem('token', '');
    this.router.navigate(['/auth/login']);
  }

}
