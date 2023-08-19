import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  //se puese iniciar asi al input 
  // @Input() product: Product = {
  //   id: 2,
  //   title: "nacho",
  //   price: 1000000000000,
  //   images: []
  // };
  //o asi:
  @Input() product!: Product;

}
