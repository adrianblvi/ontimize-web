import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule  } from "ontimize-web-ngx";

import { EmployeesGridRoutingModule } from './employees-grid-routing.module';
import { EmployeesGridHomeComponent } from './employees-grid-home/employees-grid-home.component';
import { EmployeesGridDetailComponent } from './employees-grid-detail/employees-grid-detail.component';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    EmployeesGridRoutingModule
  ],
  declarations: [EmployeesGridHomeComponent, EmployeesGridDetailComponent]
})
export class EmployeesGridModule { }
