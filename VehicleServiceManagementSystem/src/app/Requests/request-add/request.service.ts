import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { IRequest } from "../request";
@Injectable()
export class RequestAddService{
    constructor (private http:Http){}
    static incr :number =0;
    postNewRequest(request:IRequest){
        let req :any ;
        req = JSON.parse(localStorage.getItem("ServiceRequests"));
        if(!req){
            req = {};
        }
        else{
            var keys = Object.keys(req);
            var res = keys.filter(key=> req[key].vehicleRegNumber==request.vehicleRegNumber);
            if(res.length>0){
                //cannot add. Duplicate Entry   
               localStorage.setItem("error", "duplicate Entry");
                return;
            }      
        }
        RequestAddService.incr = RequestAddService.incr+1;
        var id = ""+RequestAddService.incr;
        request.requestId = id;
        req[id] = request;
        localStorage.setItem("ServiceRequests", JSON.stringify(req));

        //write undo status
        this.writeUndoStatus("add", id, request);
    }
    deleteRequest(id:string){
        let req:any;
        req = JSON.parse(localStorage.getItem("ServiceRequests"));  
        if(req[id]){
            this.writeUndoStatus("delete", id, req[id]);
            delete req[id];
            localStorage.setItem("ServiceRequests", JSON.stringify(req));
        }else{
            console.log(JSON.stringify(req));
        }
    }
    writeUndoStatus(action:string, id:string, request:IRequest):void{
        let undoStatus:any ={};
        undoStatus.count = 1;
        undoStatus.action={};
        undoStatus.action.name = action;
        undoStatus.action.id = id;
        undoStatus.action.request = request;
        localStorage.setItem("undoStatus", JSON.stringify(undoStatus));
    }
}