import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeFormComponent } from './income-form/income-form.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: 'navbar',
    component: NavbarComponent,

  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard'
  },
  {
    path: 'income',
    component: IncomeFormComponent,
    title: 'Add Income'
  },
  {
    path: 'expense',
    component: ExpenseFormComponent,
    title: 'Add Expense'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetPlannerRoutingModule { }
