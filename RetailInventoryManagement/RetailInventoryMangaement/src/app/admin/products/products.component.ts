import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {  Observable } from "rxjs/Observable";
import {  Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


import {  ProductService } from "../../shared/products.service";
import { Product } from "../../shared/product/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Array<Product> = new Array<Product>();
  searchText:string;
  visibleProducts:Array<Product> = [];
  constructor(private _product: ProductService, private _router: ActivatedRoute) {

  }
  ngOnInit() {
    this.searchProducts("");
  }

  
 searchProducts(term: string): void {
    this._product.searchProducts(term).subscribe(data => {
      this.products = data.map((x) => this.mapToAction(x));
      this.visibleProducts = this.products.filter((p)=>this.searchText?p.Name.includes(this.searchText):p);
      return this.products;
    }, error => console.log(error));
  }

  filterProducts(){
      this.visibleProducts = this.products.filter((p)=>this.searchText?p.Name.includes(this.searchText):p);
  }

  mapToAction(x: Product) {
      x.buttonAction = "edit";
      return x;
  }
}
