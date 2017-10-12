import { Component, OnInit } from '@angular/core';
import { NgForm , NgModel} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { Customer } from "../customer";
import { CustomerService } from "../customer.service";

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  customer:Customer = new Customer();
  update:boolean = false;
  id:string;
  buttonText:string ="Add new customer";


  constructor(private _postRequest:CustomerService,  private _router:Router, private _path:ActivatedRoute) { }
  ngOnInit() {
    var pathName = window.location.pathname;
    if(pathName.includes('update') && !pathName.includes('add')){
      this.update = true;
      this.buttonText = "Update Customer Details";
      let id = this._path.snapshot.params['id'];
      var customers = JSON.parse(localStorage.getItem('customers'));
      if(customers){
        this.customer = customers[id];
        this.id = id;
      }else{
        this._router.navigate(['/error']);
      }
    }
  }
   addNewcustomer(customer:NgForm){
     console.log(this.customer.loyalProgramSubscribed);
     if(this.customer.type=='regular'){
       if(this.customer.loyalProgramSubscribed){
         this.customer.discount = 5;
       }else{
         this.customer.discount =0;
       }
     }else{
       if(this.customer.numberOfEmployees>10){
         this.customer.discount = 15;
       }else{
         this.customer.discount = 10;         
       }
     }
     var grossCharges = (this.customer.charges * this.customer.distanceTravelled);
     this.customer.totalCharges = grossCharges - ( (this.customer.discount/100)* grossCharges  );
      if(this.update){
         this._postRequest.postNewRequest(this.customer, parseInt(this.id)); 
      }else{
         this._postRequest.postNewRequest(this.customer, -1);
      }
      this._router.navigate(['/customers']);
  }
}
