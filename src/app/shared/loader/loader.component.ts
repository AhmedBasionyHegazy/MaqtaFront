import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Product.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  loader=false;
  constructor(private service:ProductService) {
    this.service.loader.subscribe(res=>{
      this.loader=res;
    })
   }

  ngOnInit(): void {
  }

}
