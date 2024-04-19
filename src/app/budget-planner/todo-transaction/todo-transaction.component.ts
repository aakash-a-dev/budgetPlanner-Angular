import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-transaction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-transaction.component.html',
  styleUrl: './todo-transaction.component.css'
})
export class TodoTransactionComponent {
  @Input() transactionData: string[] = [];
}
