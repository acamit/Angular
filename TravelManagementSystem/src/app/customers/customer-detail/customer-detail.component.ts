import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm , NgModel} from "@angular/forms";
import { Customer } from "../customer";
@Component({
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customer:Customer = new Customer();
   constructor(private _route:ActivatedRoute, private _router:Router){}
  ngOnInit() {
    let id = this._route.snapshot.params['id'];
    let customers = JSON.parse(localStorage.getItem('customers'));
    if(customers[id]){
      this.customer = customers[id];
      
    }else{
      this._router.navigate(['/error']);
    }
   
  }
 
}
