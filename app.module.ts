import { BrowserModule } from "@angular/platform-browser";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";

import { AppComponent } from "./app.component";
import { DepartmentComponent } from "./department/department.component";
import { ShowDepartmentComponent } from "./department/show-department/show-department.component";
import { AddEditDepartmentComponent } from "./department/add-edit-department/add-edit-department.component";
import { EmployeeComponent } from "./employee/employee.component";
import { AddEditEmpComponent } from "./employee/add-edit-emp/add-edit-emp.component";
import { ShowEmpComponent } from "./employee/show-emp/show-emp.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowDepartmentComponent,
    AddEditDepartmentComponent,
    EmployeeComponent,
    AddEditEmpComponent,
    ShowEmpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  entryComponents: [AddEditDepartmentComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
