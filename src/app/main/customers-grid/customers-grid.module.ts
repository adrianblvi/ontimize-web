import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";

import { CustomersGridRoutingModule } from './customers-grid-routing.module';
import { CustomersGridHomeComponent } from './customers-grid-home/customers-grid-home.component';
import { CustomersGridDetailComponent } from './customers-grid-detail/customers-grid-detail.component';
import { CustomersGridNewComponent } from './customers-grid-new/customers-grid-new.component';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    CustomersGridRoutingModule
  ],
  declarations: [CustomersGridHomeComponent, CustomersGridDetailComponent, CustomersGridNewComponent]
})
export class CustomersGridModule { }
