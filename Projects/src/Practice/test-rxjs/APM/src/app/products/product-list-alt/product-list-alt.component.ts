import { ChangeDetectionStrategy, Component } from '@angular/core';

import { EMPTY, Subject, catchError } from 'rxjs';

import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list-alt.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListAltComponent {
  pageTitle = 'Products';
  errorMessage = '';

  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  selectedProductId = 0;

  products$ = this.productService.productsWithCategories$.pipe(
    catchError((error) => {
      this.errorMessageSubject.next(error);
      //return of([]);
      return EMPTY;
    })
  );

  selectedProduct$ = this.productService.selectedProduct$;

  constructor(private productService: ProductService) {}

  onSelected(productId: number): void {
    this.productService.selectedProductChanged(productId);
  }
}
