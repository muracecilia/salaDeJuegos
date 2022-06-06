import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adivinador',
  templateUrl: './adivinador.component.html',
  styleUrls: ['./adivinador.component.css']
})
export class AdivinadorComponent implements OnInit {
  numero: number;
  valor:number;
  parametro=0;
  valor1=0;
  ganar=0;
  //intentos: number;
  
  //valor=1;
  
  constructor() { 
    this.numero=0;
    this.valor=0;
    //this.intentos=0;
  }

  numeroAleatorio(){
    this.numero=Math.floor(Math.random()*(100-1))+1;
    console.log("numero random: "+this.numero);
    return this.numero;
  }
    
  jugarNumero(){
    if(this.valor<this.numero){
      this.valor1=1;
      this.parametro=1;
    }else if(this.valor>this.numero){
      this.valor1=1;
      this.parametro=0;
    }else{
      this.valor1=0;
      this.ganar=1;
    }
  }


  ngOnInit(): void {
  }
}
