import { Component, OnInit } from '@angular/core';
import { intRateMonthlyFunction } from '../../../shared/shared.module';

@Component({
  selector: 'app-accounts-grid-home',
  templateUrl: './accounts-grid-home.component.html',
  styleUrls: ['./accounts-grid-home.component.scss']
})
export class AccountsGridHomeComponent implements OnInit {
  public intRateMonthly = intRateMonthlyFunction;
  constructor() { }

  ngOnInit() {
  }

}
