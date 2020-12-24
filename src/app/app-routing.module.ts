import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DepartmentComponent } from "./department/department.component";
import { EmployeeComponent } from "./employee/employee.component";

const routes: Routes = [
  { path: "department", component: DepartmentComponent },
  { path: "employee", component: EmployeeComponent },
  //   //   { path: "", pathMatch: "full", redirectTo: "contacts" },
  //   { path: "", component: NavtestComponent },
  //   { path: "**", component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
