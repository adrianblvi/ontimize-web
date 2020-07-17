import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountsGridHomeComponent } from "./accounts-grid-home/accounts-grid-home.component";

const routes: Routes = [{
  path: '',
  component : AccountsGridHomeComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsGridRoutingModule { }
