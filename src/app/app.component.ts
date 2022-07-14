import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './shared/Product.service';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  isLoggedIn=true;

  constructor(private router:Router,private auth:AuthService,private service:ProductService){
    this.service.isLoggedIn.subscribe(res=>{
      this.isLoggedIn=res;
    })
  }

  LogOut(){
    this.service.isLoggedIn.next(false);
    localStorage.removeItem('key-api');
    this.router.navigate(['login']);
  }
}
