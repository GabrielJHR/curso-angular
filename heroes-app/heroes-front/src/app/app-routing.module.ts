import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './auth/guards/auth.guard';
import {HomeComponent} from './heroes/pages/home/home.component';
import {ErrorPageComponent} from './shared/error-page/error-page.component';

const routes : Routes = [
  {
    path: '',
    component: ErrorPageComponent
  },
  {
    path: 'auth',
    loadChildren : () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'heroes',
    component: HomeComponent,
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
    canLoad : [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: '404',
    component : ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
