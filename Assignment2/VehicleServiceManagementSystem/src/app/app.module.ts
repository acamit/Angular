import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//Third Party modules
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//Own Modules
import { RequestModule } from "./Requests/request.module";
import { SharedModule } from "./Shared/shared.module";

//Components
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RequestModule,
    SharedModule,
    RouterModule.forRoot([
        {
          path:'', redirectTo:'/requests', pathMatch:'full'
        }/*,
        {
          path:"**", redirectTo:'/error'
        }*/
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
