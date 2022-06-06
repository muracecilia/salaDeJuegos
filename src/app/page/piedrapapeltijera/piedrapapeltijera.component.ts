import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/clase/servicios/auth.service';
import { UsuariosPPT } from 'src/app/clase/usuarios-ppt';

@Component({
  selector: 'app-piedrapapeltijera',
  templateUrl: './piedrapapeltijera.component.html',
  styleUrls: ['./piedrapapeltijera.component.css']
})
export class PiedrapapeltijeraComponent implements OnInit {
  numeroUsuario:number;
  numeroMaquina:number;
  textUsuario:string;
  textMaquina:string;
  textGanador:string;
  verificado:string;
  nuevaJugada:string;
  puntoDelUsuario:number;
  puntoDeMaquina:number;
  miUsuarioPPT:UsuariosPPT;


  constructor(public miServicio:AuthService) { 
    this.numeroUsuario=1;
    this.numeroMaquina=0;
    this.textMaquina="";
    this.textUsuario="";
    this.textGanador="";
    this.verificado="NO";
    this.nuevaJugada="SI";
    this.puntoDelUsuario=0;
    this.puntoDeMaquina=0;
    this.miUsuarioPPT=new UsuariosPPT();
  }

  verificar(valorUsuario:number){
    this.numeroUsuario=valorUsuario;
    this.numeroMaquina=Math.floor(Math.random() * (4-1)) + 1;
    if(this.numeroUsuario<=3){
      this.textMaquina= this.opcionElegina(this.numeroMaquina);
      this.textUsuario= this.opcionElegina(this.numeroUsuario);
      this.textGanador=this.QuienGanoLaMano(this.numeroUsuario,this.numeroMaquina);
      this.quienGanoPartida();
      this.verificado="SI";
    }else{
      this.verificado="NO"
      this.textGanador="Numero no Valido";
    }
    
  }

  opcionElegina(valor:number){
    let textoRetorno: any
    
    if(valor==1){
      textoRetorno="piedra";
    }
    else if(valor==2){
      textoRetorno="Papel";
    }else{
      textoRetorno="Tijeta";
    }

    return textoRetorno;
  }

  nuevoJuego(){
    this.numeroUsuario=1;
    this.numeroMaquina=0;
    this.textMaquina="";
    this.textUsuario="";
    this.textGanador="";
    this.verificado="NO";
    this.nuevaJugada="SI";
    this.puntoDelUsuario=0;
    this.puntoDeMaquina=0;
  }

  quienGanoPartida(){
    if(this.puntoDeMaquina==3|| this.puntoDelUsuario==3){
      this.nuevaJugada="NO";
      this.AlmacenarUsuarioYPuntuacion();
    }
  }

  QuienGanoLaMano(jugador:number, maquina:number){
    let ganaJugada:string="";
    switch(jugador) {
      case 1 : 
        switch(maquina){
            case 1: 
              ganaJugada="EMPATE"; break;           
            case 2: 
              ganaJugada="GANA MAQUINA"; this.puntoDeMaquina++; break;     
            case 3: 
              ganaJugada="GANA USUARIO"; this.puntoDelUsuario++; break;     
        }
        break;
      case 2:	
        switch(maquina){
            case 1: 
              ganaJugada="GANA USUARIO"; this.puntoDelUsuario++; break;     
            case 2: 
              ganaJugada="EMPATE"; break;           
            case 3: 
              ganaJugada="GANA MAQUINA"; this.puntoDeMaquina++; break;     
        }
        break;
      case 3:
        switch(maquina){
            case 1: 
              ganaJugada="GANA MAQUINA"; this.puntoDeMaquina++; break;      
            case 2: 
              ganaJugada="GANA USUARIO"; this.puntoDelUsuario++; break;      
            case 3: 
              ganaJugada="EMPATE"; break;           
        }
        break;
    }
    return ganaJugada;
  }

  AlmacenarUsuarioYPuntuacion(){
    let encontrado = 0; //Si no existe el usuario Actual, agrego uno nuevo al JSON
    //Recupero todos los datos del localstorage
    let listadoUsuariosPPT = JSON.parse(localStorage.getItem("listadoPPT") || "{}");
    
    if(Object.entries(listadoUsuariosPPT).length!=0){
      //recorro todo el contenido de la matriz
      listadoUsuariosPPT.forEach((element: any): void => {
        //Si el nombre de usuario ingresado es igual al guardado 
        if(element.nombre==this.miServicio.usuarioActual){
            encontrado = 1;
            if(this.puntoDelUsuario>=3) element.partidosGanados++;
            if(this.puntoDeMaquina>=3) element.partidosPerdidos++;
            localStorage.setItem('listadoPPT',JSON.stringify(listadoUsuariosPPT));
        }
      });

    } 

    if (encontrado==0){
      //Agregar uno nuevo al objeto JSON
      this.miUsuarioPPT.nombre=this.miServicio.usuarioActual ;
      this.miUsuarioPPT.fecha=new Date();
      if(this.puntoDelUsuario>=3) this.miUsuarioPPT.partidosGanados=1; else this.miUsuarioPPT.partidosGanados=0;
      if(this.puntoDeMaquina>=3) this.miUsuarioPPT.partidosPerdidos=1; else this.miUsuarioPPT.partidosPerdidos=0;
      this.miUsuarioPPT.guardarPPT();
    }
  }
  ngOnInit(): void {
  }

}
