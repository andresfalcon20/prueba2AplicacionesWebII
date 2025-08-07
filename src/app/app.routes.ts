  import { Routes } from '@angular/router';
  import { LoginComponent } from './component/login/login.component';
  import { CursosComponent } from './component/cursos/cursos.component';
  import { authGuard } from './guards/auth.guard';
  import { CrearCursoComponent } from './component/crear-curso/crear-curso.component';
  import { RegistroUsuarioComponent } from './component/registro-usuario/registro-usuario.component';

  export const routes: Routes = [
      { path: 'login', component: LoginComponent },
      { path: 'registro', component: RegistroUsuarioComponent },
    { path: 'cursos', component: CursosComponent, canActivate: [authGuard] },
    { path: 'crear-curso', component: CrearCursoComponent, canActivate: [authGuard] },
    { path: '**', redirectTo: 'login' }
  ];
