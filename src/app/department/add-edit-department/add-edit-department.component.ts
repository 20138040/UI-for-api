import { Component, Input, OnInit } from "@angular/core";
import { SharedService } from "src/app/shared.service";

@Component({
  selector: "app-add-edit-department",
  templateUrl: "./add-edit-department.component.html",
  styleUrls: ["./add-edit-department.component.css"],
})
export class AddEditDepartmentComponent implements OnInit {
  constructor(private service: SharedService) {}

  @Input() dep: any;
  DepartmentId: string;
  DepartmentName: string;

  ngOnInit(): void {
    this.DepartmentId = this.dep.departmentId;
    this.DepartmentName = this.dep.departmentName;
  }

  addDepartment() {
    var val = {
      departmentId: this.DepartmentId,
      departmentName: this.DepartmentName,
    };
    this.service.addDepartment(val).subscribe((res) => {
      alert(res.toString());
    });
  }

  updateDepartment() {
    var val = {
      departmentId: this.DepartmentId,
      departmentName: this.DepartmentName,
    };
    this.service.updateDepartment(val).subscribe((res) => {
      alert(res.toString());
    });
  }
}
