/// <reference path="EmployeeType.ts" />

class Employee{
    static incr:number = 0;
  
    
    
    private _name : string;
    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }
    
    private _id : number;
    public get id() : number {
        return this._id;
    }
    public set id(v : number) {
        this._id = v;
    }
    
    
    private _designation : string;
    public get designation() : string {
        return this._designation;
    }
    public set designation(v : string) {
        this._designation = v;
    }
    
    
    private _type : number;
    public get type() : number {
        return this._type;
    }
    public set type(v : number) {
        this._type = v;
    }
    
    
    constructor( name:string, designation:string, type:number){
        this.name = name;
        this.designation = designation;
        this.type = type;
        this.id = Employee.incr+1;
    }
}