import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private r:Router) { }
  senToken(token){
localStorage.setItem('userDetails',token)
  }
  isLogin(){
    return localStorage.getItem('userDetails')!==null
  }

  logout(){
    localStorage.removeItem('userDetails')
    this.r.navigate(['login'])
  }

}
