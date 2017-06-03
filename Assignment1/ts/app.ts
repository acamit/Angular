/// <reference path="EmployeeTypeFunctions.ts" />
declare var $: any;

class EmployeePortal {
    //Dom elements
    Navbar: HTMLUListElement;
    CreateEmployeeTypeFormContainer: HTMLDivElement;
    DeleteEmployeeTypeFormContainer: HTMLDivElement;
    EmployeeListContainer: HTMLDivElement;
    AddEmployeeContainer: HTMLDivElement;
    constructor() {
        this.Navbar = < HTMLUListElement > document.getElementById("Navbar");
        this.CreateEmployeeTypeFormContainer = < HTMLDivElement > document.getElementById("CreateEmployeeTypeFormContainer");
        this.DeleteEmployeeTypeFormContainer = < HTMLDivElement > document.getElementById("DeleteEmployeeTypeFormContainer");
        this.AddEmployeeContainer = < HTMLDivElement > document.getElementById("AddEmployeeContainer");
        this.EmployeeListContainer = < HTMLDivElement > document.getElementById("EmployeeListContainer");
        let mainNavbar = $("#Navbar");

        let types: Array < EmployeeType > = [new EmployeeType('Managers'), new EmployeeType('Developer')];
        let employees: Array < Employee > = [];

        localStorage.setItem("EmployeeTypesList", JSON.stringify(types));
        localStorage.setItem("EmployeeList", JSON.stringify(employees));

        mainNavbar.on("click", "li", function () {
            $(this).siblings().removeClass("active");
            $(this).addClass("active");
            let siblings = $(this).parent().parent().parent().siblings();
            for (var index = 0; index < siblings.length; index++) {
                var element = siblings[index];
                $(element).addClass("hidden");
            }

            let actionTarget: string = $(this).attr("data-action");
            if (actionTarget === "DeleteEmployeeTypeFormContainer" || actionTarget==="AddEmployeeContainer") {
                var myselect ;
                if(actionTarget==="AddEmployeeContainer"){
                    myselect = $("#newEmployeeType");
                }else{
                myselect = $("#deleteEmployeeTypeName");                    
                }
                myselect.find("option:gt(0)").remove();
                let typesQ = JSON.parse(localStorage.getItem("EmployeeTypesList")) || [];
                for (var index = 0; index < typesQ.length; index++) {
                    var type = typesQ[index];
                    myselect.append($('<option>', {
                            value: type._id
                        })
                        .text(type._name));
                    // console.log(opt);
                    // console.log(myselect);
                }
            }
            $("#" + actionTarget).removeClass("hidden");
        });



        new EmployeeTypeFunctions();
        new EmployeeFunctions();
    }

}