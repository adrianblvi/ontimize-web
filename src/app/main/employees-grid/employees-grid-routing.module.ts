import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesGridHomeComponent } from "./employees-grid-home/employees-grid-home.component";
import { EmployeesGridDetailComponent } from "./employees-grid-detail/employees-grid-detail.component";

const routes: Routes = [{
  path: '',
  component: EmployeesGridHomeComponent
}, {
  path: ':EMPLOYEEID',
  component: EmployeesGridDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesGridRoutingModule { }
