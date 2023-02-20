import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../common/product';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  product: Product[];
  constructor(private prod: ProductService) { }

  ngOnInit(): void {
    // this.lsprod();
  }

  // tslint:disable-next-line:typedef
  // lsprod(){
  //   this.prod.getProductList().subscribe(
  //     lsdata  => {
  //       this.product = lsdata;
  //     }
  //   );
  // }
}
