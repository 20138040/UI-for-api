import { Component, Input, OnInit } from "@angular/core";
import { SharedService } from "src/app/shared.service";

@Component({
  selector: "app-add-edit-emp",
  templateUrl: "./add-edit-emp.component.html",
  styleUrls: ["./add-edit-emp.component.css"],
})
export class AddEditEmpComponent implements OnInit {
  constructor(private service: SharedService) {}

  @Input() emp: any;
  EmployeeId: string;
  EmployeeName: string;
  Department: string;
  DateOfJoining: string;
  PhotoFileName: string;
  PhotoFilePath: string;

  DepartmentsList: any = [];

  ngOnInit(): void {
    this.loadDepartmentList();
  }

  loadDepartmentList() {
    this.service.getDepartment().subscribe((data: any) => {
      this.DepartmentsList = data;

      this.EmployeeId = this.emp.employeeId;
      this.EmployeeName = this.emp.employeeName;
      this.Department = this.emp.department;
      this.DateOfJoining = this.emp.dateOfJoining;
      this.PhotoFileName = this.emp.filePath;
      // this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
    });
  }

  addEmployee() {
    var val = {
      employeeId: this.EmployeeId,
      employeeName: this.EmployeeName,
      department: this.Department,
      dateOfJoining: this.DateOfJoining,
      filePath: this.PhotoFileName,
    };

    this.service.addEmployee(val).subscribe((res) => {
      alert(res.toString());
    });
  }

  updateEmployee() {
    var val = {
      employeeId: this.EmployeeId,
      employeeName: this.EmployeeName,
      department: this.Department,
      dateOfJoining: this.DateOfJoining,
      filePath: this.PhotoFileName,
    };

    this.service.updateEmployee(val).subscribe((res) => {
      alert(res.toString());
    });
  }

  // uploadPhoto(event) {
  //   var file = event.target.files[0];
  //   const formData: FormData = new FormData();
  //   formData.append("uploadedFile", file, file.name);

  //   this.service.UploadPhoto(formData).subscribe((data: any) => {
  //     this.PhotoFileName = data.toString();
  //     this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
  //   });
  // }
}
