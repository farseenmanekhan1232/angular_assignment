import { Component, EventEmitter, Output, Input } from '@angular/core';
import { product } from 'src/app/app';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  @Input() currId = 0;
  @Output() updatedId = new EventEmitter();
  @Output() done = new EventEmitter();
  @Output() Product = new EventEmitter<product>();
  obj = { id: 0, title: '', price: '', description: '', thumbnail: '' };
  Done() {
    this.done.emit(true);
    this.obj.id = this.currId + 1;
    this.Product.emit(this.obj);
    this.updatedId.emit(this.currId + 1);
  }
  trackChange(v: any, name: string) {
    this.obj[name] = v.target.value;
  }
}
