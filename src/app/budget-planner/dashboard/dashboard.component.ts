import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { IncomeCardComponent } from '../income-card/income-card.component';
import { ExpenseCardComponent } from '../expense-card/expense-card.component';
import { TodoTransactionComponent } from '../todo-transaction/todo-transaction.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, CommonModule, IncomeCardComponent, ExpenseCardComponent, TodoTransactionComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  lastMonthIncome = ['January: ₹10,000', 'February: ₹12,000', 'March: ₹12,000']
  currentMonthIncome = '₹13,000'

  lastMonthExpense  = ['January: ₹4,000', 'February: ₹6,000', 'March: ₹7,000']
  currentMonthExpense = '₹7,000'

  transactionData = [
    'Electricity Bill',
    'House Rent',
    'Wifi Bill',
    'Water Bill'
  ]
  
}
