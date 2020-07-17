import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchesGridHomeComponent } from "./branches-grid-home/branches-grid-home.component";
import { BranchesGridDetailComponent } from "./branches-grid-detail/branches-grid-detail.component";
import { BranchesGridNewComponent } from "./branches-grid-new/branches-grid-new.component";
const routes: Routes = [
  {
    path: '',
    component: BranchesGridHomeComponent
  },
  {
    path: 'new',
    component: BranchesGridNewComponent
  }, {
    path: ':OFFICEID',
    component: BranchesGridDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchesGridRoutingModule { }
