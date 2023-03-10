import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../common/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product ;
  // product: Product = new Product();
  constructor(private productService: ProductService,
              private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(
      () => this.handleProductDetails()
    );
  }

  // tslint:disable-next-line:typedef
  private handleProductDetails() {
    const productId: string = this.router.snapshot.paramMap.get('id');
    this.productService.getProductDetails(productId).subscribe(
      data => {
        this.product = data;
      }
    );
  }
}
