import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/Product.service';
import { Product } from 'src/app/shared/Product.model';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor(public service:ProductService,private toast:NgToastService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(product:Product){
    this.service.formData=Object.assign({},product);
  }

  onDelete(id:number){
    this.service.deleteProperty(id).subscribe(res=>{
      this.toast.success({detail:"SUCCESS",summary:'Your Success Message',duration:5000});
      this.service.refreshList();
    })
  }

}
