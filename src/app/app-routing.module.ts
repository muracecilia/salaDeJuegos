import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdivinaconListadoComponent } from './page/adivinacon-listado/adivinacon-listado.component';
import { AdivinadorComponent } from './page/adivinador/adivinador.component';
import { BienvenidaComponent } from './page/bienvenida/bienvenida.component';
import { ErrorComponent } from './page/error/error.component';
import { ListadoResultadoComponent } from './page/listado-resultado/listado-resultado.component';
import { LoginComponent } from './page/login/login.component';
import { LogoutComponent } from './page/logout/logout.component';
import { PantallaJuegoComponent } from './page/pantalla-juego/pantalla-juego.component';
import { PiedrapapeltijeraComponent } from './page/piedrapapeltijera/piedrapapeltijera.component';
import { QuienSoyComponent } from './page/quien-soy/quien-soy.component';
import { RegistroComponent } from './page/registro/registro.component';
import { TatetiComponent } from './page/tateti/tateti.component';

const routes: Routes = [
  {path:"inicio", component:BienvenidaComponent},// path ruta que me lleva  esa pagina
  {path:"login", component:LoginComponent},
  {path:"registro", component:RegistroComponent},
  {path:"logout", component:LogoutComponent},
  {path:"quienSoy", component:QuienSoyComponent},

  {path:"juegos", component:PantallaJuegoComponent,
    children: [               // children agrega la navegacion en la misma pantalla
        {path:"tateti", component:TatetiComponent},
        {path:"ppt", component:PiedrapapeltijeraComponent},
        {path:"adivinador", component:AdivinadorComponent},
        {path:"listadoResultados", component:ListadoResultadoComponent},
        {path:"adivinaconListado", component:AdivinaconListadoComponent},
    ]
  },   
  {path:"", component:BienvenidaComponent},
  {path:"**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
