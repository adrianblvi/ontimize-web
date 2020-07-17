import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";
import { BranchesGridRoutingModule } from './branches-grid-routing.module';
import { BranchesGridHomeComponent } from './branches-grid-home/branches-grid-home.component';
import { BranchesGridDetailComponent } from './branches-grid-detail/branches-grid-detail.component';
import { BranchesGridNewComponent } from './branches-grid-new/branches-grid-new.component';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    BranchesGridRoutingModule
  ],
  declarations: [BranchesGridHomeComponent, BranchesGridDetailComponent, BranchesGridNewComponent]
})
export class BranchesGridModule { }
