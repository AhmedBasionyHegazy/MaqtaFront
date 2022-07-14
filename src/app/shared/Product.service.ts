import { Injectable } from '@angular/core';
import { Product,ResponseDto } from './Product.model';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  formData:Product=new Product();
  list:Product[]=[];
  loader=new BehaviorSubject<boolean>(false);
  isLoggedIn=new BehaviorSubject<boolean>(false);
  constructor(private http:HttpClient) { }
  postProperty(formData:Product){
    return this.http.post('Product',formData);
  }
  refreshList(){
    this.http.get('Product').toPromise().then((res : any)=>this.list=res.result as Product[]);
  }
  putProperty(formData:Product){
    return this.http.put('Product',formData);
  }
  deleteProperty(id:number){
    return this.http.delete('Product/'+id);
  }
}
