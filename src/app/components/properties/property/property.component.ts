import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/Product.service';
import { NgForm } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  constructor(public service:ProductService,private toast: NgToastService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form? : NgForm){
    if(form !=null)
      form.resetForm();
    this.service.formData={
      productId:0,
      name :'',
      price :Number.NaN,
      description :''
    }
  }
  onSubmit(form:NgForm){
    if(!form.value.productId)
      {
        form.value.productId=0;
        this.insertRecord(form);
      }
    else
      this.updateRecord(form); 
  }
  insertRecord(form:NgForm){
    this.service.postProperty(form.value).subscribe(res=>{
      this.toast.success({detail:"SUCCESS",summary:'Your Success Message',duration:5000});
      this.resetForm();
      this.service.refreshList();
      form.resetForm();
    });
  }

  updateRecord(form:NgForm){
      this.service.putProperty(form.value).subscribe(res=>{
      this.toast.success({detail:"SUCCESS",summary:'Your Success Message',duration:5000});
      this.resetForm();
      this.service.refreshList();
      form.resetForm();
    });
  }

}
