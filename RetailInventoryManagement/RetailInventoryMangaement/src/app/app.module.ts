import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginModule } from "./login/login.module";
import { UserModule } from "./user/user.module";
import { AdminModule } from "./admin/admin.module";
import { SharedModule } from "./shared/shared.module";
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    UserModule,
    AdminModule,
    SharedModule,
    RouterModule.forRoot([
      {path:'', redirectTo:'/login', pathMatch:'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
