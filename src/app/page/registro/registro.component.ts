import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/clase/servicios/auth.service';
import { Usuarios } from 'src/app/clase/usuarios';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  auxNombre: string;
  auxClave1: string;
  auxClave2: string;

  
  miUsuario:Usuarios;

  constructor(public router:Router, public miServicio:AuthService) {
    this.miUsuario= new Usuarios();
    this.auxNombre="";
    this.auxClave1="";
    this.auxClave2="";
   }

  registrar(){
    if(this.auxClave1==this.auxClave2){
      this.miUsuario.nombre=this.auxNombre;
      this.miUsuario.clave=this.auxClave1;
      this.miUsuario.guardar();
      this.miServicio.usuarioActual=this.auxNombre;
      this.router.navigate(["/juegos"]);
    }
    else{
      alert("Las claves son diferentes... vuelva a intentarlo")
    }
  }
  ngOnInit(): void {
  }
}
