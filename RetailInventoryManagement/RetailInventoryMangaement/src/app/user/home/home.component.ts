import { Component, OnInit } from '@angular/core';
import { Product  } from "../../shared/product/product";
import { ProductService  } from "../../shared/products.service";

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  lastSearched:Array<Product> = [];
  offerProducts:Array<Product> = [];
  searchText:string ="";
  buttonAction:string = "add";
  cartItems:any =null;
  constructor(private _product:ProductService) { }
  ngOnInit() {

    this.cartItems  = localStorage.getItem("cartItems");
    if(this.cartItems){
      this.cartItems = JSON.parse(this.cartItems);
    }
     this._product.searchProducts("").subscribe(data=>{
          return this.offerProducts=data.filter((x)=>x.InOffersList).map((x)=> this.mapToAction(x))
    } , error=>{
      alert("Some Error Occured at server");
      return console.log(error)});
    let ls:any = localStorage.getItem("lastSearched");
    if(ls){
      ls= JSON.parse(ls);
      this.lastSearched= Object.keys(ls).map((x)=>this.mapToAction(ls[x]));
    }
  }
  pageSetup():void{
    this.cartItems  = localStorage.getItem("cartItems");
    if(this.cartItems){
      this.cartItems = JSON.parse(this.cartItems);
    }
     this._product.searchProducts("").subscribe(data=>{
          return this.offerProducts=data.filter((x)=>x.InOffersList).map((x)=> this.mapToAction(x))
    } , error=>{
      alert("Some Error Occured at server");
      return console.log(error)});
    let ls:any = localStorage.getItem("lastSearched");
    if(ls){
      ls= JSON.parse(ls);
      this.lastSearched= Object.keys(ls).map((x)=>this.mapToAction(ls[x]));
    }
  }


  handleAddRemoveProduct(message:string){
    this.pageSetup();
  }
  mapToAction(x:Product){
      if(this.cartItems && this.cartItems["products"] &&this.cartItems["products"][x.Id]){
      x.buttonAction = "remove";
    }else{
      x.buttonAction = "add";
    }
        return x;
  }

}
