import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';

  
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {


  constructor(private categoryService:CategoryService,private productService:ProductService) {
   
    
   }
   save(product,category) {
     this.productService.create(product);
     this.categoryService.create(category);
   }
   

  ngOnInit() {
  }

}
