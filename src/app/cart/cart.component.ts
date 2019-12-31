import { Component, OnInit } from '@angular/core';
import { CartService } from "../api/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public items;
showCart : boolean = true;
  constructor(private cartService : CartService) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    console.log(this.items);
  }
clearCart(){
  this.cartService.clearCart();
  this.showCart= false;
}
}
