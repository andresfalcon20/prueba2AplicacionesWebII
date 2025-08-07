import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
const router = inject(Router);
  const usuario = localStorage.getItem('user');
  if (usuario) {
    return true;
  } else {
    alert('Debes iniciar sesión');
    router.navigate(['/login']);
    return false;
  }
};
  