/// <reference path="Employee.ts" />
declare var $: any;

class EmployeeFunctions {

    employeeCategoryNavbar: HTMLUListElement;
    employeeList: HTMLUListElement;
    employeeActionsEditButton: HTMLButtonElement;
    employeeActionsDeleteButton: HTMLButtonElement;
    newEmployeeName: HTMLInputElement;
    newEmployeeDesignation: HTMLInputElement;

    selectedEmployee: string = "1";
    constructor() {
        this.employeeCategoryNavbar = < HTMLUListElement > document.getElementById("employeeCategoryNavbar");
        this.employeeActionsEditButton = < HTMLButtonElement > document.getElementById("employeeActionsEditButton");
        this.employeeActionsDeleteButton = < HTMLButtonElement > document.getElementById("employeeActionsDeleteButton");
        var self = this;
        let typesQ = JSON.parse(localStorage.getItem("EmployeeTypesList")) || [];
        var employeeCategoryNavbar = $('#employeeCategoryNavbar');
        employeeCategoryNavbar.find("li").remove();

        for (var index = 0; index < typesQ.length; index++) {
            var element = typesQ[index];
            var li = $('<li />');
            li.attr("role", "presentation").attr("data-type", element._id);
             li.on("click", function () {
                self.editEmployee(element._id);
            });
            var a = $("<a />");
            a.attr("href", "#");
            a.html(element._name);
            if (element._id == 1) {
                li.attr("class", "active");
            }
            li.append(a);
           
            employeeCategoryNavbar.append(li);
        }

        this.employeeActionsEditButton.addEventListener("click", function () {
            self.editEmployee(self.selectedEmployee);
        });

        this.employeeActionsDeleteButton.addEventListener("click", function () {
            self.deleteEmployee(self.selectedEmployee);
        });

        this.showEmployees(1);
    }

    private showEmployees(typeid: number) {
        var self = this;
        var employeeListElement = $("#employeeList");
        employeeListElement.find("li").remove();
        let employeeList = JSON.parse(localStorage.getItem("EmployeeList")) || [];
        employeeList = employeeList.filter((emp: Employee) => emp.id == typeid);
        for (var index = 0; index < employeeList.length; index++) {
            var element = employeeList[index];
            var li = $('<li />');
            li.html(element.name);
            li.attr("class", "list-group-item");
            li.attr("data-id", element.id);
            li.on("click", function () {
                self.selectedEmployee = element.id;
            })
            employeeListElement.append(li);
        }
    }
    
    editEmployee(id: string): void {
        alert("Editted " + JSON.stringify(this));
    }

    deleteEmployee(id: string): void {
        alert("Deleted " + this)
    }
    onSelectedEmployee(): void {
        alert("selected" + this);
    }

}