import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  login(dni:string, password:string){
    let datos ={
      "dni":dni,
      "password":password
    }
    return this.http.post('http://localhost:3000/api/login', datos)
  } 

  registro(user:string, email:string, dni:string, password:string){
    let dataRegistro ={
      "user": user,
      "email": email,
      "dni": dni,
      "password": password,
      
      
    }
    return this.http.post('http://localhost:3000/api/register', dataRegistro)
  }

  registroP(direccion:string, tlf:string, sexo:string, edad:string){
    let dataRegistroP ={
      "direccion": direccion,
      "tlf": tlf,
      "sexo": sexo,
      "edad": edad,
      
      
    }
    return this.http.post('http://localhost:3000/api/registerP', dataRegistroP)
  }

  getOneUser(id:number){
    
    const header = new HttpHeaders()
    .set('Authorization', `Bearer ${localStorage.getItem('token')}`);

    return this.http.get('http://localhost:3000/api/user/'+id, { headers: header });
  }

}
