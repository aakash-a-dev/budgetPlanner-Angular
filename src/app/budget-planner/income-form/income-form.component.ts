import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-income-form',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './income-form.component.html',
  styleUrl: './income-form.component.css'
})
export class IncomeFormComponent {
  incomeForm: any;
  selectedMonth: any;

  monthSelected: boolean = false;

  januaryIncomes: any[] = [
{ source: 'Salary', amount: 5000, investments: '401(k)' },
{ source: 'Freelancing', amount: 1000, investments: 'Stocks' },
  ]
februaryIncomes: any[] = [
{ source: 'Salary', amount: 5500, investments: '401(k)' },
{ source: "Rental Income", amount: 700, investments: 'Real Estate'}
]
marchIncomes: any[] = [
{ source: 'Salary', amount: 5200, investments: '401(k)' },
{ source: "Freelancing", amount: 1200, investments: 'Stocks' },
{ source: "Rental Income", amount: 600, investments: "Real Estate"},
  ]
  
  aprilIncomes: any[] = [
{ source: 'Salary', amount: 8500, investments: '401(k)' },
{ source: "Rental Income", amount: 100, investments: 'Real Estate'}
]
  constructor(public fb: FormBuilder, public router: Router) { 
    const currentDate = new Date();
    this.selectedMonth = currentDate.toLocaleDateString('default', { month: 'long' });
  };

  ngOnInit(): void{
    this.incomeForm = this.fb.group({
      month: ['', Validators.required],
      source: ['', Validators.required],
      amount: ['', Validators.required],
      investment: [''],

    })
  }

  getFilteredIncomes() {
    let filteredIncomes: any[] = [];

    switch (this.selectedMonth) {
      case 'January':
        filteredIncomes = [...this.januaryIncomes];
        break;
         case 'February':
        filteredIncomes = [...this.februaryIncomes];
        break;
         case 'March':
        filteredIncomes = [...this.marchIncomes];
        break;
       case 'April':
        filteredIncomes = [...this.aprilIncomes];
        break;
      default:
        break;
    }
    return filteredIncomes;
  }
onSubmit() {
  if (this.incomeForm.valid) {
    const newIncome = this.incomeForm.value;
    switch (this.selectedMonth) {
      case 'January':
        this.januaryIncomes.push(newIncome);
        break;
      case 'February':
        this.februaryIncomes.push(newIncome);
        break;
      case 'March':
        this.marchIncomes.push(newIncome);
        break;
      case 'April':
        this.aprilIncomes.push(newIncome);
        break;
      default:
        break;
    }
    // Recalculate total income
    this.calculateTotalIncome(this.selectedMonth);
    console.log("New income added. Total income recalculated.");
  } else {
    console.log("Form is invalid. Income not added.");
  }
  this.incomeForm.reset();
  this.incomeForm.patchValue({ month: '', source: '', amount: '', investments: '' });
}

  
  onChange(event: any) {
    this.selectedMonth = event.target.value;

    this.getFilteredIncomes();
  }

  getIncomesForMonth(month: string) {
    switch (month) {
      case 'January':
        return this.januaryIncomes;
      case 'February':
        return this.februaryIncomes;
      case 'March':
        return this.marchIncomes;
      case 'April':
        return this.aprilIncomes;
      default:
        return [];
    }
  }

  calculateTotalIncome(month: string) {
    let totalIncome = 0;
    for (const income of this.getIncomesForMonth(month)) {
      totalIncome += income.amount;
    }
    return totalIncome
  }

  
  saveForm() {
    console.log("Form saved!");
  }

  onBack() {
    this.router.navigate(['/budget-planner/dashboard']);
  }
}
