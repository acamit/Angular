import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'login', component:LoginComponent},
      {path:'logout', component:LogoutComponent}
    ]),
    SharedModule
  ],
  declarations: [LoginComponent, LogoutComponent]
})
export class LoginModule { }
