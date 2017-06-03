/// <reference path="EmployeeFunctions.ts" />
/// <reference path="EmployeeType.ts" />
class EmployeeTypeFunctions {
    self = this;
    newEmployeeTypeName: HTMLInputElement;
    AddEmployeeTypeButton: HTMLButtonElement;
    CancelAddEmployeeTypeButton: HTMLButtonElement;

    deleteEmployeeTypeName: HTMLSelectElement;
    deleteEmployeeTypeButton: HTMLButtonElement;
    deleteEmployeeTypeCancelButton: HTMLButtonElement;

    constructor() {
        this.newEmployeeTypeName = < HTMLInputElement > document.getElementById("newEmployeeTypeName");
        this.AddEmployeeTypeButton = < HTMLButtonElement > document.getElementById("AddEmployeeTypeButton");
        this.CancelAddEmployeeTypeButton = < HTMLButtonElement > document.getElementById("CancelAddEmployeeTypeButton");

        this.deleteEmployeeTypeName = < HTMLSelectElement > document.getElementById("deleteEmployeeTypeName");
        this.deleteEmployeeTypeButton = < HTMLButtonElement > document.getElementById("deleteEmployeeTypeButton");
        this.deleteEmployeeTypeCancelButton = < HTMLButtonElement > document.getElementById("deleteEmployeeTypeCancelButton");

        this.addEmployeeType = this.addEmployeeType.bind(this);
        this.deleteEmployeeType = this.deleteEmployeeType.bind(this);

        this.AddEmployeeTypeButton.onclick = this.addEmployeeType
        this.CancelAddEmployeeTypeButton.addEventListener("click", this.cancelAddEmployeeFunction);
        this.deleteEmployeeTypeButton.addEventListener("click", this.deleteEmployeeType);
    }
    addEmployeeType(): void {
        var EmployeeTypeVal = this.newEmployeeTypeName.value;
        if (EmployeeTypeVal) {
            let types: EmployeeType[];
            types = JSON.parse(localStorage.getItem("EmployeeTypesList")) || [];
            types.push(new EmployeeType(EmployeeTypeVal));
            localStorage.setItem("EmployeeTypesList", JSON.stringify(types));
            
        } else {
            alert("Type Name is required");
        }
    }

    cancelAddEmployeeFunction(): void {
        $("#CreateEmployeeTypeFormContainer").addClass("hidden");
    }
    cancelDeleteEmployeeFunction(): void {
        $("#DeleteEmployeeTypeFormContainer").addClass("hidden");
    }

    deleteEmployeeType(): void {
        var types = JSON.parse(localStorage.getItem("EmployeeTypesList"));
        var value = this.deleteEmployeeTypeName.value;
        for (var index = 0; index < types.length; index++) {
            var element = types[index];
            if (element._id == value) {
                types.splice(index, 1) ;
                break;
            }
        }
        localStorage.setItem("EmployeeTypesList", JSON.stringify(types));
    }

}