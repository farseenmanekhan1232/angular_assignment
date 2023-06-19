import { Component, EventEmitter, Input, Output } from '@angular/core';
import { product } from 'src/app/app';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() Product: product;

  @Output() prodId = new EventEmitter<number>();

  deleteProd(i, j) {
    this.prodId.emit(j);
    console.log(j);
  }
}
