var EmployeeType = (function () {
    function EmployeeType(name) {
        this.name = name;
        this.id = EmployeeType.incr + 1;
        EmployeeType.incr++;
    }
    Object.defineProperty(EmployeeType.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeType.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (v) {
            this._id = v;
        },
        enumerable: true,
        configurable: true
    });
    return EmployeeType;
}());
EmployeeType.incr = 0;
/// <reference path="EmployeeType.ts" />
var Employee = (function () {
    function Employee(name, designation, type) {
        this.name = name;
        this.designation = designation;
        this.type = type;
        this.id = Employee.incr + 1;
    }
    Object.defineProperty(Employee.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (v) {
            this._id = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "designation", {
        get: function () {
            return this._designation;
        },
        set: function (v) {
            this._designation = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (v) {
            this._type = v;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
Employee.incr = 0;
/// <reference path="Employee.ts" />
var EmployeeFunctions = (function () {
    function EmployeeFunctions() {
        this.selectedEmployee = "1";
        this.employeeCategoryNavbar = document.getElementById("employeeCategoryNavbar");
        this.employeeActionsEditButton = document.getElementById("employeeActionsEditButton");
        this.employeeActionsDeleteButton = document.getElementById("employeeActionsDeleteButton");
        var self = this;
        var typesQ = JSON.parse(localStorage.getItem("EmployeeTypesList")) || [];
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
    EmployeeFunctions.prototype.showEmployees = function (typeid) {
        var self = this;
        var employeeListElement = $("#employeeList");
        employeeListElement.find("li").remove();
        var employeeList = JSON.parse(localStorage.getItem("EmployeeList")) || [];
        employeeList = employeeList.filter(function (emp) { return emp.id == typeid; });
        for (var index = 0; index < employeeList.length; index++) {
            var element = employeeList[index];
            var li = $('<li />');
            li.html(element.name);
            li.attr("class", "list-group-item");
            li.attr("data-id", element.id);
            li.on("click", function () {
                self.selectedEmployee = element.id;
            });
            employeeListElement.append(li);
        }
    };
    EmployeeFunctions.prototype.editEmployee = function (id) {
        alert("Editted " + JSON.stringify(this));
    };
    EmployeeFunctions.prototype.deleteEmployee = function (id) {
        alert("Deleted " + this);
    };
    EmployeeFunctions.prototype.onSelectedEmployee = function () {
        alert("selected" + this);
    };
    return EmployeeFunctions;
}());
/// <reference path="EmployeeFunctions.ts" />
/// <reference path="EmployeeType.ts" />
var EmployeeTypeFunctions = (function () {
    function EmployeeTypeFunctions() {
        this.self = this;
        this.newEmployeeTypeName = document.getElementById("newEmployeeTypeName");
        this.AddEmployeeTypeButton = document.getElementById("AddEmployeeTypeButton");
        this.CancelAddEmployeeTypeButton = document.getElementById("CancelAddEmployeeTypeButton");
        this.deleteEmployeeTypeName = document.getElementById("deleteEmployeeTypeName");
        this.deleteEmployeeTypeButton = document.getElementById("deleteEmployeeTypeButton");
        this.deleteEmployeeTypeCancelButton = document.getElementById("deleteEmployeeTypeCancelButton");
        this.addEmployeeType = this.addEmployeeType.bind(this);
        this.deleteEmployeeType = this.deleteEmployeeType.bind(this);
        this.AddEmployeeTypeButton.onclick = this.addEmployeeType;
        this.CancelAddEmployeeTypeButton.addEventListener("click", this.cancelAddEmployeeFunction);
        this.deleteEmployeeTypeButton.addEventListener("click", this.deleteEmployeeType);
    }
    EmployeeTypeFunctions.prototype.addEmployeeType = function () {
        var EmployeeTypeVal = this.newEmployeeTypeName.value;
        if (EmployeeTypeVal) {
            var types = void 0;
            types = JSON.parse(localStorage.getItem("EmployeeTypesList")) || [];
            types.push(new EmployeeType(EmployeeTypeVal));
            localStorage.setItem("EmployeeTypesList", JSON.stringify(types));
        }
        else {
            alert("Type Name is required");
        }
    };
    EmployeeTypeFunctions.prototype.cancelAddEmployeeFunction = function () {
        $("#CreateEmployeeTypeFormContainer").addClass("hidden");
    };
    EmployeeTypeFunctions.prototype.cancelDeleteEmployeeFunction = function () {
        $("#DeleteEmployeeTypeFormContainer").addClass("hidden");
    };
    EmployeeTypeFunctions.prototype.deleteEmployeeType = function () {
        var types = JSON.parse(localStorage.getItem("EmployeeTypesList"));
        var value = this.deleteEmployeeTypeName.value;
        for (var index = 0; index < types.length; index++) {
            var element = types[index];
            if (element._id == value) {
                types.splice(index, 1);
                break;
            }
        }
        localStorage.setItem("EmployeeTypesList", JSON.stringify(types));
    };
    return EmployeeTypeFunctions;
}());
/// <reference path="EmployeeTypeFunctions.ts" />
var EmployeePortal = (function () {
    function EmployeePortal() {
        this.Navbar = document.getElementById("Navbar");
        this.CreateEmployeeTypeFormContainer = document.getElementById("CreateEmployeeTypeFormContainer");
        this.DeleteEmployeeTypeFormContainer = document.getElementById("DeleteEmployeeTypeFormContainer");
        this.AddEmployeeContainer = document.getElementById("AddEmployeeContainer");
        this.EmployeeListContainer = document.getElementById("EmployeeListContainer");
        var mainNavbar = $("#Navbar");
        var types = [new EmployeeType('Managers'), new EmployeeType('Developer')];
        var employees = [];
        localStorage.setItem("EmployeeTypesList", JSON.stringify(types));
        localStorage.setItem("EmployeeList", JSON.stringify(employees));
        mainNavbar.on("click", "li", function () {
            $(this).siblings().removeClass("active");
            $(this).addClass("active");
            var siblings = $(this).parent().parent().parent().siblings();
            for (var index = 0; index < siblings.length; index++) {
                var element = siblings[index];
                $(element).addClass("hidden");
            }
            var actionTarget = $(this).attr("data-action");
            if (actionTarget === "DeleteEmployeeTypeFormContainer" || actionTarget === "AddEmployeeContainer") {
                var myselect;
                if (actionTarget === "AddEmployeeContainer") {
                    myselect = $("#newEmployeeType");
                }
                else {
                    myselect = $("#deleteEmployeeTypeName");
                }
                myselect.find("option:gt(0)").remove();
                var typesQ = JSON.parse(localStorage.getItem("EmployeeTypesList")) || [];
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
    return EmployeePortal;
}());
/// <reference path="app.ts" />
$(document).ready(function () {
    new EmployeePortal();
});
//# sourceMappingURL=app.js.map