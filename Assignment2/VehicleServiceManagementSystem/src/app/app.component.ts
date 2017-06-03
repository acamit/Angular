import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Vehicle Service Management System';

  constructor(private _router:Router){}

  ngOnInit(){
    var stateData = localStorage.getItem("stateData");
    console.log(stateData);
    let pathName :string = window.location.pathname;
    console.log(pathName);
    if(stateData && pathName=='/'){
        var path = JSON.parse(stateData).pathName;
        //localStorage.setItem("stateData", JSON.stringify({}));
        this._router.navigate([path]);
    }else{
    }
  }
}
