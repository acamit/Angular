import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IRequest } from "../request";

@Component({
    moduleId:module.id,
    templateUrl:'request-detail.component.html',
})
export class RequestDetailComponent implements OnInit{
    serviceRequest :IRequest = new IRequest() ;
    requestId:string;
    constructor(private _route:ActivatedRoute){

    }
    ngOnInit():void{
        let id = this._route.snapshot.params['id'];
        var req = JSON.parse(localStorage.getItem("ServiceRequests"));
        if(req){
        this.serviceRequest = req[id];
        }
    }
}