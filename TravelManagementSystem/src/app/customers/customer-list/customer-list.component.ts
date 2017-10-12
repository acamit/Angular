import {  Component,  OnInit} from '@angular/core';
import {  Router } from "@angular/router";
import {  Customer } from "../customer";
import {  CustomerService } from "../customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Array < Customer > = [];
  constructor(private _router: Router, private _customer:CustomerService) {}

  ngOnInit() {
    let customers = JSON.parse(localStorage.getItem('customers'));
    if (customers) {
      var keys = Object.keys(customers);
      this.customers = keys.map(key => customers[key]);
    }
  }
  deleteCustomer(id: string) {
    this._customer.deleteRequest(id);
    let index: number = this.customers.findIndex(x => x.id == id);
    this.customers.splice(index, 1);
  }
}
