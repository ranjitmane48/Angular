import { ChangeDetectionStrategy, Component } from '@angular/core';

import { catchError, EMPTY, combineLatest, map, BehaviorSubject } from 'rxjs';

import { ProductService } from './product.service';
import { ProductCategoryService } from '../product-categories/product-category.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  pageTitle = 'Product List';
  errorMessage = '';
  //selectedCategory = 1;

  private categorySelectedSubject = new BehaviorSubject<number>(0);
  //create observable from the subject
  categorySelectedAction$ = this.categorySelectedSubject.asObservable();

  productCategories$ = this.productCategoryService.productCategories$.pipe(
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  // productsSelectedCategory$ = this.productService.productsWithCategories$.pipe(
  //   map((products) =>
  //     products.filter((product) =>
  //       this.selectedCategory
  //         ? product.categoryId === this.selectedCategory
  //         : true
  //     )
  //   )
  // );

  products$ = combineLatest([
    this.productService.productsWithCategories$,
    this.categorySelectedAction$,
    //this.categorySelectedAction$.pipe(startWith(0)),
  ]).pipe(
    map(([products, selectedCategoryId]) =>
      products.filter((product) =>
        selectedCategoryId ? product.categoryId === selectedCategoryId : true
      )
    ),
    catchError((error) => {
      this.errorMessage = error;
      return EMPTY;
    })
  );

  // products$: Observable<Product[]> | undefined =
  //   this.productService.productsWithCategories$.pipe(
  //     catchError((error) => {
  //       this.errorMessage = error;
  //       //return of([]);
  //       return EMPTY;
  //     })
  //   );

  constructor(
    private productService: ProductService,
    private productCategoryService: ProductCategoryService
  ) {}

  onAdd(): void {
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string): void {
    this.categorySelectedSubject.next(+categoryId);
  }
}
