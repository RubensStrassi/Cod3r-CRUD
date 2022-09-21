import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  }

  constructor(private router: Router, private productService: ProductService ) { }

  ngOnInit(): void {
    this.productService
  }


  deletar(): void {

  }

  cancel(): void {
    this.router.navigate(['/product'])
  }
}
