import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { SearchComponent } from "../shared/search/search.component";
import { AdminParentComponent } from './admin-parent/admin-parent.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'admin', component:AdminParentComponent,
      children:[
        {path:'add-product', component:ProductAddComponent},
        {path:'edit-product/:id', component:ProductAddComponent},
        {path:'products', component:ProductsComponent},
        {path:'', redirectTo:'products', pathMatch:"full"}
      ]
    }
      
    ]),
    SharedModule
  ],
  declarations: [ProductDetailsComponent, ProductAddComponent, AdminParentComponent, ProductsComponent],
  providers:[]
})
export class AdminModule { }
