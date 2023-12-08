import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './dashboard/pages/overview/overview.component';
import { TransactionsComponent } from './dashboard/pages/transactions/transactions.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'transactions', component: TransactionsComponent },
    ],
  },
];
