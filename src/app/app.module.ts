import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './page/bienvenida/bienvenida.component';
import { LoginComponent } from './page/login/login.component';
import { ErrorComponent } from './page/error/error.component';
import { RegistroComponent } from './page/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { PantallaJuegoComponent } from './page/pantalla-juego/pantalla-juego.component';
import { TatetiComponent } from './page/tateti/tateti.component';
import { PiedrapapeltijeraComponent } from './page/piedrapapeltijera/piedrapapeltijera.component';
import { AdivinadorComponent } from './page/adivinador/adivinador.component';
import { ListadoResultadoComponent } from './page/listado-resultado/listado-resultado.component';
import { AdivinaconListadoComponent } from './page/adivinacon-listado/adivinacon-listado.component';
import { LogoutComponent } from './page/logout/logout.component';
import { QuienSoyComponent } from './page/quien-soy/quien-soy.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    ErrorComponent,
    RegistroComponent,
    PantallaJuegoComponent,
    TatetiComponent,
    PiedrapapeltijeraComponent,
    AdivinadorComponent,
    ListadoResultadoComponent,
    AdivinaconListadoComponent,
    LogoutComponent,
    QuienSoyComponent
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
