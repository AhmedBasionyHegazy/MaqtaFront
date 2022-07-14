import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from 'src/app/shared/Product.service';
import { PropertiesComponent } from './properties.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyComponent } from './property/property.component';
import { ProductRoutingModule } from './product.router';
import { CommonModule } from '@angular/common';
import { AuthInterceptor } from 'src/app/core/interceptors/auth.interceptor';
import { LoaderInterceptorService } from 'src/app/core/interceptors/loader-interceptor.service';
import { ApiInterceptor } from 'src/app/core/interceptors/api.interceptor';

@NgModule({
  declarations: [
    PropertiesComponent,
    PropertyComponent,
    PropertyListComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    ProductRoutingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true},
    {provide:HTTP_INTERCEPTORS,useClass:LoaderInterceptorService,multi:true}
  ]
})
export class ProductModule { }
