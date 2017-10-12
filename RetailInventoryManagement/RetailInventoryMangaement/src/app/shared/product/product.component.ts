import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from "../products.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() productName:string;
  @Input() cost:number;
  @Input() discount:number;
  @Input() imgSrc:string;
  @Input() id:string;
  @Input() buttonAction:string;

  @Output() addToCartEvent : EventEmitter<string>= new EventEmitter<string>();
  @Output() removeFromCartEvent : EventEmitter<string>= new EventEmitter<string>();
  constructor(private _product:ProductService){  }
  addToCartClick(id:number){
  let cartItems:any;
    cartItems = JSON.parse(localStorage.getItem("cartItems")) || {count:0, "products":{}};
     this._product.searchProductById(id).subscribe(data=>{
      let curProduct = cartItems["products"][id];
      if(!curProduct){
        cartItems["products"][id]= data[0];
        cartItems.count = cartItems.count+1;
      }else{
        alert("Already In Cart");
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      this.buttonAction = "remove"; 
      this.addToCartEvent.emit("");
    } , error=>console.log(error));


  }

  removeFromCart(id:number){
    let cartItems:any;  
    cartItems = JSON.parse(localStorage.getItem("cartItems") );
    if(cartItems){
      if(cartItems["products"][id]){
        delete cartItems["products"][id];
        cartItems.count -=1;
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
         this.buttonAction = "add"; 
         this.removeFromCartEvent.emit("");
      }else{
        alert("Nothing to remove");
      }
    }
    
  }
  
  
  ngOnInit() {
  }

}
