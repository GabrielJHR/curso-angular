import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {CapitalComponent} from "./paises/pages/capital/capital.component";
import {PorPaisComponent} from "./paises/pages/por-pais/por-pais.component";
import {PorRegionComponent} from "./paises/pages/por-region/por-region.component";
import {VerPaisComponent} from "./paises/pages/ver-pais/ver-pais.component";

const routes : Routes = [
  {
    path : '',
    component: PorPaisComponent,
    pathMatch: 'full'
  },
  {
    path : 'region',
    component: PorRegionComponent
  },
  {
    path : 'capital',
    component: CapitalComponent
  },
  {
    path : 'pais/:id',
    component : VerPaisComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports : [
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule{}
