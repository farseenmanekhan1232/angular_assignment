import { Component , EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent {
  @Output() delete = new EventEmitter();
  v = false;
  toggle(){
    this.v = !this.v;
  }
  deleteProd(){
    this.delete.emit(true);
  }

}
