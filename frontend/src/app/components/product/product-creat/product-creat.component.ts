import { Product } from './../product.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-creat',
  templateUrl: './product-creat.component.html',
  styleUrls: ['./product-creat.component.css']
})
export class ProductCreatComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  }

  constructor(private service: ProductService, private router: Router) { }

  ngOnInit(): void {
  }
  
  creatProduct(){
    this.service.creat(this.product).subscribe(() => {
      this.service.showMessage('Produto Criado');
      this.router.navigate(['products']);
    })
  }

  cancel(){
    this.router.navigate(['products'])
  }

 

}
