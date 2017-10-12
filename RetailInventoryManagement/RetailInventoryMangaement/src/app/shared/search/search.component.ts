import {  Component,   OnInit } from '@angular/core';
import {  NgModel,   NgForm } from "@angular/forms";
import {  ActivatedRoute } from "@angular/router";
import {   ProductComponent } from "../product/product.component";
import {  Product } from "../product/product";
import {  ProductService } from "../products.service";
import {  CartService } from "../../user/cart.service";
import {  Observable } from "rxjs/Observable";
import {  Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResults: Product[] = [];
  searchText:string;
  private searchTerms = new Subject < string > ();
  buttonAction: string = "add";
  cartItems: any = null;
  constructor(private _product: ProductService, private _router: ActivatedRoute) {}

  ngOnInit() {
    let searchTerm = this._router.snapshot.params["searchText"];
    if(searchTerm){
      this.searchText = searchTerm;
      this.searchProducts(searchTerm);
    }
  }
  //push the search term into observable stream
  searchProducts(term: string): void {
    this._product.searchProducts(term).subscribe(data => {
      this.searchResults = data.map((x) => this.mapToAction(x));
      this.addToLastSearched(data);
      return this.searchResults;
    }, error => console.log(error));
  }

  addToLastSearched(data) {
    let lastSearched: any = localStorage.getItem("lastSearched");
    if (lastSearched) {
      lastSearched = JSON.parse(lastSearched);
      //unique elements logic pending
    } else {
      lastSearched = {};
    }
    data.forEach((x, i, arr) => {
      if (!lastSearched[x.Id]) {
        lastSearched[x.Id] = x;
      }
    })
    localStorage.setItem("lastSearched", JSON.stringify(lastSearched));
  }

  //Assign actions- add to cart , remove form cart, 
  mapToAction(x: Product) {
    let role = localStorage.getItem("role");
    if (role == "admin") {
      x.buttonAction = "edit";
    } else {
        this.cartItems = JSON.parse(localStorage.getItem("cartItems"));
        if (this.cartItems && this.cartItems["products"] && this.cartItems["products"][x.Id]) {
          x.buttonAction = "remove";
        } else {
          x.buttonAction = "add";
        }
    }
    return x;
  }
  productMap(item) {

    let pr: Product = new Product();
    pr.Cost = item.Cost;
    pr.Discount = item.Discount;
    pr.Id = item.Id;
    pr.ImageSrc = item.ImageSrc;
    pr.Name = item.Name;
    pr.Type = item.Type;
    pr.InOffersList = item.InOffersList;
    pr.buttonAction = item.buttonAction;
    return pr;
  }

  updateProduct(id: string) {

  }

}
