import { Component } from '@angular/core';
import { TotalLoansBorrowedComponent } from './total-loans-borrowed/total-loans-borrowed.component';
import { AmountBorrowedLastMonthComponent } from './amount-borrowed-last-month/amount-borrowed-last-month.component';
import { TotalProfitsComponent } from './total-profits/total-profits.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    TotalLoansBorrowedComponent,
    AmountBorrowedLastMonthComponent,
    TotalProfitsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
