import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../intefaces/info-pagina.interface';



@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};//el service se tiene que asignar un objeto vacio a una interfaz entonces para solucionarlo en infopagina service a todas las propiedades agregar un signo '?' para que sea opcional
  cargada = false;

  constructor(private http:HttpClient) { // lee rutas externas el http 
    // console.log("Server created successfully");
   

    //Leer el archivo json para eso en el app.,odule se crea un modulo http para el json  HttpClientModule

    this.http.get('assets/data/data-pagina.json')
    .subscribe(resp => {   // va a recibir una respuesta 
      this.cargada = true;
      this.info = resp;
      console.log(resp);
    })

   }
}
