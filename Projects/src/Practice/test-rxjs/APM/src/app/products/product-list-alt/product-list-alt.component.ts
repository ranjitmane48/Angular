import { Component, OnInit, OnDestroy } from '@angular/core';

import { EMPTY, Subscription, catchError } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list-alt.component.html',
})
export class ProductListAltComponent {
  pageTitle = 'Products';
  errorMessage = '';
  selectedProductId = 0;

  products$ = this.productService.products$.pipe(
    catchError((error) => {
      this.errorMessage = error;
      //return of([]);
      return EMPTY;
    })
  );

  constructor(private productService: ProductService) {}

  // ngOnInit(): void {
  //   this.productService.getProducts().subscribe({
  //     next: (products) => (this.products = products),
  //     error: (err) => (this.errorMessage = err),
  //   });
  // }

  onSelected(productId: number): void {
    console.log('Not yet implemented');
  }
}
