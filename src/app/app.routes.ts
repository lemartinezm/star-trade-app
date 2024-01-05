import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './dashboard/pages/overview/overview.component';
import { TransactionsComponent } from './dashboard/pages/transactions/transactions.component';
import { dashboardGuard } from './dashboard/dashboard.guard';
import { AccountsComponent } from './dashboard/pages/accounts/accounts.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: DashboardComponent,
    canActivateChild: [dashboardGuard],
    children: [
      { path: '', component: OverviewComponent },
      { path: 'transactions', component: TransactionsComponent },
      { path: 'accounts', component: AccountsComponent },
    ],
  },
];
