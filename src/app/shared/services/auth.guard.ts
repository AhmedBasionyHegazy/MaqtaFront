import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { ProductService } from '../Product.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService,private router:Router,private service:ProductService){
    
  }
  canActivate(){
     if(this.auth.IsLoggedIn()){
       this.service.isLoggedIn.next(true);
       return true;
     }
     this.service.isLoggedIn.next(false);
     this.router.navigate(['login']);
     return false;
  }
  
}
