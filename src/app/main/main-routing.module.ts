import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ngx';

import { MainComponent } from './main.component';
import { HomeModule } from './home/home.module';
import { CustomersModule } from './customers/customers.module';
import { EmployeesModule } from './employees/employees.module';
import { BranchesModule } from './branches/branches.module';
import { AccountsModule } from './accounts/accounts.module';
import { CustomersGridModule } from "./customers-grid/customers-grid.module";
import { AccountsGridModule } from "./accounts-grid/accounts-grid.module";
import { BranchesGridModule } from "./branches-grid/branches-grid.module";
import { EmployeesGridModule } from "./employees-grid/employees-grid.module";

export function loadHomeModule() {
  return HomeModule;
}
export function loadCustomersModule() {
  return CustomersModule;
}
export function loadEmployeesModule() {
  return EmployeesModule;
}
export function loadBranchesModule() {
  return BranchesModule;
}
export function loadAccountsModule() {
  return AccountsModule;
}
export function loadCustomersGridModule(){
  return CustomersGridModule;
}
export function loadAccountsGridModule(){
  return AccountsGridModule;
}
export function loadEmployeesGridModule(){
  return EmployeesGridModule;
}
export function loadBranchesGridModule(){
  return BranchesGridModule;
}
export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: loadHomeModule
      },
      {
        path: 'customers',
        loadChildren: loadCustomersModule
      },
      {
        path: 'employees',
        loadChildren: loadEmployeesModule
      },
      {
        path: 'branches',
        loadChildren: loadBranchesModule
      },
      {
        path: 'accounts',
        loadChildren: loadAccountsModule
      },
      {
        path: 'customers-grid',
        loadChildren: loadCustomersGridModule
      },
      {
        path: 'accounts-grid',
        loadChildren: loadAccountsGridModule
      },{
        path: 'employees-grid',
        loadChildren: loadEmployeesGridModule
      },{
        path: 'branches-grid',
        loadChildren: loadBranchesGridModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
