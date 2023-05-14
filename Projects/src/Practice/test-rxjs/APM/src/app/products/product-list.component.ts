import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable, catchError, of, EMPTY } from 'rxjs';
import { ProductCategory } from '../product-categories/product-category';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  pageTitle = 'Product List';
  errorMessage = '';
  categories: ProductCategory[] = [];

  products$: Observable<Product[]> | undefined =
    this.productService.products$.pipe(
      catchError((error) => {
        this.errorMessage = error;
        //return of([]);
        return EMPTY;
      })
    );

  constructor(private productService: ProductService) {}

  // ngOnInit(): void {
  //   this.products$ = this.productService.getProducts().pipe(
  //     catchError((error) => {
  //       this.errorMessage = error;
  //       //return of([]);
  //       return EMPTY;
  //     })
  //   );
  //   this.productService.getProducts().subscribe({
  //     next: (products) => (this.products = products),
  //     error: (err) => (this.errorMessage = err),
  //   });
  // }

  onAdd(): void {
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string): void {
    console.log('Not yet implemented');
  }
}
