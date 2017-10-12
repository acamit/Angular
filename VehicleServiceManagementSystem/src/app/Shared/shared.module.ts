import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ErrorComponent } from "./Error/error.component";

@NgModule({
  imports: [ CommonModule,
        RouterModule.forChild([
           {
             path:"error", component:ErrorComponent
           }
        ])
    ],
  declarations: [ ErrorComponent ],
  exports:[
      CommonModule,
      FormsModule,
      ErrorComponent
  ],
  
})

export class SharedModule { }
