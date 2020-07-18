import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";

import { SharedModule } from '../../shared/shared.module';

import { AccountsGridRoutingModule } from './accounts-grid-routing.module';
import { AccountsGridHomeComponent } from './accounts-grid-home/accounts-grid-home.component';
import { AccountsGridDetailComponent } from './accounts-grid-detail/accounts-grid-detail.component';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    SharedModule,
    AccountsGridRoutingModule
  ],
  declarations: [AccountsGridHomeComponent, AccountsGridDetailComponent]
})
export class AccountsGridModule { }
