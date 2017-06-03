class EmployeeType{
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
   
    constructor(name:string){
        this.name = name;
        this.id = EmployeeType.incr+1;
        EmployeeType.incr++;
    }
}