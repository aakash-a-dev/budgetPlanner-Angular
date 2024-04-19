import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-expense-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expense-card.component.html',
  styleUrl: './expense-card.component.css'
})
export class ExpenseCardComponent {
  @Input() lastMonthExpense: string[] = [];
  @Input() currentMonthExpense: string = '';

    constructor(private router: Router) { };
    navigateToOtherPage(): void {
    this.router.navigate(['/expense']); 
  }

}
