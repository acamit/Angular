import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from './home/home.component';
import { SearchComponent } from '../shared/search/search.component';
import { CartService } from "./cart.service";
import { ParentComponent } from './parent/parent.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'user', component:ParentComponent, children:[
          {path:'', redirectTo:'home', pathMatch:"full"},
          {path:'home', component:HomeComponent},
          {path:'search/:searchText', component:SearchComponent},
          {path:'search', component:SearchComponent}
        
      ]   
},
     
    ]) ,
    SharedModule
  ],
  declarations: [HomeComponent, ParentComponent],
  providers:[CartService]
})
export class UserModule { }