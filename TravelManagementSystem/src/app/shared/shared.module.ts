import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path:'error', component:ErrorComponent },
    ])
  ],
  declarations: [ErrorComponent],
  exports:[CommonModule, FormsModule, HttpModule ]
})
export class SharedModule { }
