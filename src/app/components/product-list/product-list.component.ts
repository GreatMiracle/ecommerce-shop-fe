import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../common/product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  // templateUrl: './product-list-table.component.html',
  // templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  currrentCategoryId: number;
  searchMode: boolean;

  constructor(private productService: ProductService,
              private router: ActivatedRoute) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.router.paramMap.subscribe((
      () => this.listProducts()
    ));
  }

  // tslint:disable-next-line:typedef
  listProducts() {
    this.searchMode = this.router.snapshot.paramMap.has('keyword');
    if (this.searchMode) {
      this.handleSearchProducts();
    } else {
      this.handleListProducts();
    }

  }

  // tslint:disable-next-line:typedef
  handleListProducts() {
    const hasCategoryId: boolean = this.router.snapshot.paramMap.has('id');
    if (hasCategoryId) {
      this.currrentCategoryId = +this.router.snapshot.paramMap.get('id');
    } else {
      this.currrentCategoryId = 1;
    }

    this.productService.getProductList(this.currrentCategoryId).subscribe(
      data => {
        this.products = data;
      }
    );
  }


  // tslint:disable-next-line:typedef
  handleSearchProducts() {
    const theKeyword: string = this.router.snapshot.paramMap.get('keyword');
    this.productService.searchProducts(theKeyword).subscribe(
      data => {
        this.products = data;
      }
    );

  }
}
