import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';

export const loginGuard: CanActivateFn = async (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  if (typeof localStorage !== 'undefined') {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      router.navigate(['/login']);
      return false;
    }

    const verityToken = new Promise<boolean>((resolve) => {
      loginService.verifyToken(token).subscribe({
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
