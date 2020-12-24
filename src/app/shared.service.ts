import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SharedService {
  private url = "https://localhost:5001/api/";
  constructor(private https: HttpClient) {}

  public getDepartment() {
    return this.https.get(this.url + "department/GetAllDepartments");
  }

  public addDepartment(value: any) {
    return this.https.post(this.url + "department/AddDepartment", value);
  }

  public updateDepartment(value: any) {
    return this.https.put(this.url + "department/UpdateDepartmentName", value);
  }

  public deleteDepartment(value: any) {
    const params = new HttpParams().set("departmentName", value);
    return this.https.delete(this.url + "department/DeleteDepartment", {
      params,
    });
  }

  public getAllEmployees() {
    return this.https.get(this.url + "employee/GetAllEmployees");
  }

  public addEmployee(value: any) {
    return this.https.post(this.url + "employee/AddEmployee", value);
  }

  public updateEmployee(value: any) {
    return this.https.put(this.url + "employee/UpdateEmployeeDetail", value);
  }

  public deleteEmployee(value: any) {
    const params = new HttpParams().set("name", value);
    return this.https.delete(this.url + "employee/DeleteEmployee", {
      params,
    });
  }
}
