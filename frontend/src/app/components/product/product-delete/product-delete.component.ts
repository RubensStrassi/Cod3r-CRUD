import { Router, ActivatedRoute } from '@angular/router';
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

  products: Product[] = []

  constructor(private router: Router, private productService: ProductService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }


  deletar(): void {
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage('Produto Exluido Com sucesso')
      this.cancel()
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
