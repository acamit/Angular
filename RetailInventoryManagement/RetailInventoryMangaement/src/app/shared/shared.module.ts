import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { ProductService } from "./products.service";
@NgModule({
  imports: [
    CommonModule,FormsModule, HttpModule, RouterModule
  ],
  declarations: [ProductComponent, SearchComponent],
  exports:[CommonModule, FormsModule, HttpModule,RouterModule, ProductComponent, SearchComponent],
  providers:[ProductService]
})
export class SharedModule { }
