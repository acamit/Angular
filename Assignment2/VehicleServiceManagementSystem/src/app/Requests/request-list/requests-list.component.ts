import {  Component,  OnInit } from "@angular/core";
import {  IRequest } from "../request";
import {  RequestAddService } from "../request-add/request.service";

@Component({
  moduleId: module.id,
  templateUrl: 'requests-list.component.html',
  styleUrls: ['requests-list.component.css']
})
export class RequestListComponent implements OnInit {
  errorMessage: string="";
  constructor(private _request: RequestAddService) {}
  serviceRequests: Array < IRequest > = [];
  ngOnInit() {

    var req = JSON.parse(localStorage.getItem("ServiceRequests"));
    if (req) {
      this.serviceRequests = req;
      this.serviceRequests = Object.keys(req).map((key: string) => req[key]);

    }
  }

  deleteRequest(id: string): void {
    this._request.deleteRequest(id);
    let index: number = this.serviceRequests.findIndex(x => x.requestId == id);
    this.serviceRequests.splice(index, 1);

  }

  undoLastAction() {
    let undo = JSON.parse(localStorage.getItem("undoStatus"));
    if (undo) {
      let count: number = parseInt(undo['count']);
      if (count == 0) {
        this.errorMessage = "Cannot undo more";
      } else {
        let action: any = undo['action'];
        if (action.name === "add") {
          this.deleteRequest(action.id);
        } else {
          this._request.postNewRequest(action.request);
          this.serviceRequests.push(action.request);
        }
        let undoStatus:any ={};
        undoStatus.count = 0;
        undoStatus.action={};
        localStorage.setItem("undoStatus", JSON.stringify(undoStatus));

      }
    }
  }


}
