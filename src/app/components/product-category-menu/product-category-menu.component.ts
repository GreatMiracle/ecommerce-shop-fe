import {Component, OnInit} from '@angular/core';
import {ProductCategory} from '../../common/product-category';
import {ProductService} from '../../services/product.service';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrls: ['./product-category-menu.component.css']
})
export class ProductCategoryMenuComponent implements OnInit {

  productCategory: ProductCategory[];

  constructor(private categoryService: CategoryService) {
  }
  ngOnInit(): void {
    this.listProductCategories();
  }
  // tslint:disable-next-line:typedef
  listProductCategories() {
    this.categoryService.getProductCategories().subscribe(
      data => {
        console.log('Product Categories=' + JSON.stringify(data));
        this.productCategory = data;
      }
    );
  }

}
