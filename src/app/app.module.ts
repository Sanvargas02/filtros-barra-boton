import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraFiltroComponent } from './components/barra-filtro/barra-filtro.component';
import { FiltoPipe } from './pipes/filto.pipe';

import { FormsModule } from '@angular/forms';
import { BotonesFiltroPipe } from './pipes/botones-filtro.pipe';
import { BotonElementoPipe } from './pipes/boton-elemento.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BarraFiltroComponent,
    FiltoPipe,
    BotonesFiltroPipe,
    BotonElementoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
