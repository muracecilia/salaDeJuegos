import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {

  ttt=['-','-','-','-','-','-','-','-','-'];

Jugador:string;
hayganador:string;
elGanadorEs:string;
constructor(private miRouter:Router) {
  this.Jugador="X";
  this.hayganador="NO";
  this.elGanadorEs="";
}
botonPresionado(p:number) {
if (this.ttt[p]=='-') {
  //Asignar la letra X u O a la p y columna correspondiente
  this.ttt[p]=this.Jugador;

  if(this.verificarGanador("X")=="X") this.elGanadorEs="Jugador X";

  if(this.verificarGanador("O")=="O") this.elGanadorEs="Jugador O";

  this.cambiarJugador();
}
}
cambiarJugador(){
  if(this.Jugador=="X"){
    this.Jugador="O";
  }else{
    this.Jugador="X";
  }
} 
iniciar() {
  for(let f=0;f<9;f++)  this.ttt[f]='-';
}
verificarGanador(valor: string) {
  let valorRetorno = "";
  if (this.ttt[0]==valor && this.ttt[1]==valor && this.ttt[2]==valor ||
      this.ttt[3]==valor && this.ttt[4]==valor && this.ttt[5]==valor ||
      this.ttt[6]==valor && this.ttt[7]==valor && this.ttt[8]==valor ||
      this.ttt[0]==valor && this.ttt[3]==valor && this.ttt[6]==valor ||
      this.ttt[1]==valor && this.ttt[4]==valor && this.ttt[7]==valor ||
      this.ttt[2]==valor && this.ttt[5]==valor && this.ttt[8]==valor ||
      this.ttt[0]==valor && this.ttt[4]==valor && this.ttt[8]==valor ||
      this.ttt[2]==valor && this.ttt[4]==valor && this.ttt[6]==valor) {
        
      valorRetorno = valor;  
      this.hayganador="SI"; 
  }
  return valorRetorno;
}

  ngOnInit(): void {
  }

}
