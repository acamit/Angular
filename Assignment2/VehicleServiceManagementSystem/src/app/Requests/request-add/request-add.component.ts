import { Component } from "@angular/core";
import { NgModel, NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { IRequest } from "../request";
import { RequestAddService } from "./request.service";
@Component({
    moduleId:module.id,
    templateUrl:'request-add.component.html',
})
export class RequestAddComponent{
    serviceRequest:IRequest = new IRequest();
    constructor(private _postRequest : RequestAddService, private _router:Router){
    }
    
    addNewRequest(form:NgForm):void{
        this._postRequest.postNewRequest(this.serviceRequest);
        this._router.navigate(['/requests']);
    }
}