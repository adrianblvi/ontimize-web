import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";

import { AccountsGridRoutingModule } from './accounts-grid-routing.module';
import { AccountsGridHomeComponent } from './accounts-grid-home/accounts-grid-home.component';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    AccountsGridRoutingModule
  ],
  declarations: [AccountsGridHomeComponent]
})
export class AccountsGridModule { }
