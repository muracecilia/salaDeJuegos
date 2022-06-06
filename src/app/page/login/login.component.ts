import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/clase/usuarios';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/clase/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  miUsuario:Usuarios;
  auxNombre:string;
  auxClave:string;
  constructor(public router:Router, public miServicio:AuthService) { 
    this.miUsuario=new Usuarios();
    this.auxNombre="";
    this.auxClave="";
  }
  mostrar(){
    var listadoUsuarios=[]; //declarar matriz
    var encontrado=0;//variable
    listadoUsuarios=JSON.parse(localStorage.getItem("listado") ||"{}");//traemos lo del localStorage
  
    if(Object.entries(listadoUsuarios).length!=0){
      listadoUsuarios.forEach((element:any):void => {
                                if(element.nombre==this.auxNombre){
                                  if(element.clave==this.auxClave){
                                    encontrado=1;
                                  }
                                }
                              });
    }
    if(encontrado==1){
      this.miServicio.usuarioActual=this.auxNombre;
      this.router.navigate(["/juegos"]);
    }else{
      this.router.navigate(["/registro"]);
    }
  }

  ngOnInit(): void {
  }

}
