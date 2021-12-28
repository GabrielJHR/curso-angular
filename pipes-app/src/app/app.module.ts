import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {BrowserModule} from '@angular/platform-browser';

import {AppRouterModule} from './app-router.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {VentasModule} from './ventas/ventas.module';

// cambiar el local de la app
import {registerLocaleData} from '@angular/common';
import localEs from '@angular/common/locales/es-AR';
import localFr from '@angular/common/locales/fr';

registerLocaleData(localEs);
registerLocaleData(localFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-AR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
