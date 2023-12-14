import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DashboardService } from './dashboard.service';

export const dashboardGuard: CanActivateFn = async (route, state) => {
  const dashboardService = inject(DashboardService);
  const router = inject(Router);

  if (typeof localStorage !== 'undefined') {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      router.navigate(['/login']);
      return false;
    }

    const verityToken = new Promise<boolean>((resolve) => {
      dashboardService.verifyToken(token).subscribe({
        next: () => {
          resolve(true);
        },
        error: () => {
          resolve(false);
        },
      });
    });

    const isTokenValid = await verityToken;

    if (!isTokenValid) {
      router.navigate(['/login']);
      return false;
    }

    return true;
  }

  return false;
};
