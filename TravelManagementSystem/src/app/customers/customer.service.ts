import {
  Injectable
} from '@angular/core';
import {
  Http
} from "@angular/http";
import {
  Customer
} from "./customer";

@Injectable()
export class CustomerService {
  static incr: number = 0;
  constructor(private http: Http) {}
  
  postNewRequest(customer: Customer, curId: number) {
    let cust: any;
    cust = JSON.parse(localStorage.getItem("customers"));
    if (!cust) {
      cust = {};
    } else {
      // var keys = Object.keys(cust);
      // var res = keys.filter(key=> cust[key].vehicleRegNumber==customer.vehicleRegNumber);
      // if(res.length>0){
      //     //cannot add. Duplicate Entry   
      //    localStorage.setItem("error", "duplicate Entry");
      //     return;
      // }      
    }
    let id: string;
    console.log("curId" + curId);
    if (curId == -1) {
      CustomerService.incr = CustomerService.incr + 1;
      id = "" + CustomerService.incr;
      customer.id = id;
    } else {
      id = "" + curId;
    }
    console.log(id);
    cust[id] = customer;
    localStorage.setItem("customers", JSON.stringify(cust));
  }

  deleteRequest(id: string) {
    let cust: any;
    cust = JSON.parse(localStorage.getItem("customers"));
    console.log(cust);
    if (cust[id]) {
      delete cust[id];
      console.log(cust);
      localStorage.setItem("customers", JSON.stringify(cust));
    } else {
      console.log("No such Customer");
    }
  }
}
