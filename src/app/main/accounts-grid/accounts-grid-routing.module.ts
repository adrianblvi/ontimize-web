import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsGridHomeComponent } from "./accounts-grid-home/accounts-grid-home.component";
import { AccountsGridDetailComponent } from "./accounts-grid-detail/accounts-grid-detail.component";

const routes: Routes = [{
  path: '',
  component : AccountsGridHomeComponent
},{
  path: ':ACCOUNTID',
  component: AccountsGridDetailComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsGridRoutingModule { }
