import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared/shared.module";
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerService } from './customer.service';
import { CustomerAddComponent } from './customer-add/customer-add.component';
@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'customers/add', component:CustomerAddComponent},
      {path:'customers/update/:id', component:CustomerAddComponent},
      {path:'customers/details/:id', component:CustomerDetailComponent},
      {path:'customers', component:CustomerListComponent},
      
    ]),
    SharedModule,
  ],
  declarations: [CustomerListComponent, CustomerDetailComponent, CustomerAddComponent],
  providers:[CustomerService]
})
export class CustomersModule { }
