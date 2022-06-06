import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/clase/servicios/auth.service';

@Component({
  selector: 'app-pantalla-juego',
  templateUrl: './pantalla-juego.component.html',
  styleUrls: ['./pantalla-juego.component.css']
})
export class PantallaJuegoComponent implements OnInit {
  MiUsuario:string;

  constructor(public router:Router, public miServicio:AuthService) {
    this.MiUsuario=this.miServicio.usuarioActual;

    if(this.MiUsuario==""){
      this.router.navigate(["/login"]);
    }

   }

  ngOnInit(): void {
  }

}
