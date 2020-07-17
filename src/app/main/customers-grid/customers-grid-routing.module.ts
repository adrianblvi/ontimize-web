import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersGridHomeComponent } from "./customers-grid-home/customers-grid-home.component";
import { CustomersGridDetailComponent } from "./customers-grid-detail/customers-grid-detail.component";
import { CustomersGridNewComponent} from "./customers-grid-new/customers-grid-new.component";

const routes: Routes = [{
  path: '',
  component: CustomersGridHomeComponent
},
{
  path: "new",
  component: CustomersGridNewComponent
},
{
  path: ":CUSTOMERID",
  component: CustomersGridDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersGridRoutingModule { }
