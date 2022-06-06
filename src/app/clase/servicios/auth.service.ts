import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuarioActual:string;

  constructor() {
    this.usuarioActual="";
    
   }
}
