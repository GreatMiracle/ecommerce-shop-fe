import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../common/product';
import {map} from 'rxjs/operators';
import {ProductCategory} from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8090/api/products';

  constructor(private httpClient: HttpClient) { }

  getProductList(theCategoryId: number): Observable<Product[]> {
    const productListUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;
    return this.getProducts(productListUrl);
  }

  searchProducts(theKeyword: string): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;
    return this.getProducts(searchUrl);
  }

  getProductDetails(productId: string): Observable<Product> {
    // const productDetailsUrl = `${this.baseUrl}/search/findById?id=${productId}`;
    const productDetailsUrl = `${this.baseUrl}/${productId}`;
    // return this.GetResponseProductId(productDetailsUrl);
    return this.httpClient.get<Product>(productDetailsUrl);
  }

  // tslint:disable-next-line:typedef
  private getProducts(searchUrl: string) {
    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(res => res._embedded.products)
    );
  }

  // tslint:disable-next-line:typedef
  private GetResponseProductId(productDetailsUrl: string) {
    return this.httpClient.get<GetResponseProductId>(productDetailsUrl).pipe(
      map(res => res._embedded.product)
    );
  }
}

interface GetResponse{
  _embedded: {
    products: Product[];
  };
}
interface GetResponseProductId{
  _embedded: {
    product: Product;
  };
}
