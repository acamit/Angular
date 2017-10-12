import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

//OwnModules
import { SharedModule } from "../Shared/shared.module";
//Components
import { RequestListComponent } from "./request-list/requests-list.component";
import { RequestAddComponent } from "./request-add/request-add.component";
import { RequestDetailComponent } from "./request-detail/request-detail.component";

//services
import { RequestAddService } from "./request-add/request.service";

@NgModule({
    imports:[
        SharedModule,
        RouterModule.forChild([
            {
                path:'requests',component:RequestListComponent
            }, {
                path:'request/add' , component:RequestAddComponent
            },
            {
                path:'request/:id', component:RequestDetailComponent
            }
        ]),
    ],
    declarations:[RequestListComponent, RequestAddComponent,RequestDetailComponent],
    providers:[RequestAddService],
    exports:[]
})
export class RequestModule{}