import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login, LogInRes } from 'src/app/shared/login.model';
import { LoginService } from 'src/app/shared/login.service';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  formData:Login=new Login();

  constructor(
    private loginService:LoginService,
    private router:Router,
    private toast: NgToastService
    ) { }

  ngOnInit(): void { 
  }

  onSubmit(form:NgForm){
    this.loginService.logIn(form.value).subscribe(data => {
      if (data) {
          localStorage.setItem('key-api',btoa(data.token));
          this.toast.success({detail:"SUCCESS",summary:'Your Success Message',duration:5000});
          this.router.navigate(['products']);
      } 
    });
  }

}
