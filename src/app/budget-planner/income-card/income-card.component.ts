import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

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

}
