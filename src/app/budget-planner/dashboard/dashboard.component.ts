import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { IncomeCardComponent } from '../income-card/income-card.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, CommonModule, IncomeCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  lastMonthIncome = ['January: ₹10,000', 'February: ₹12,000', 'March: ₹12,000']
  currentMonthIncome = '₹13,000'
  
}
