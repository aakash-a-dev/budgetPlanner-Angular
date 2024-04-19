import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-income-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './income-card.component.html',
  styleUrl: './income-card.component.css'
})
export class IncomeCardComponent {
  @Input() lastMonthIncome: string[] = [];
  @Input() currentMonthIncome: string = '';

  constructor(private router: Router) { };
    navigateToOtherPage(): void {
    this.router.navigate(['/income']); 
  }

}
