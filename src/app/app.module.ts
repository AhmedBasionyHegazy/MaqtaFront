import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgToastModule } from 'ng-angular-popup'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoaderInterceptorService } from './core/interceptors/loader-interceptor.service';
import { LogInComponent } from './components/log-in/log-in.component';
import { ApiInterceptor } from './core/interceptors/api.interceptor';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true},
    {provide:HTTP_INTERCEPTORS,useClass:LoaderInterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
