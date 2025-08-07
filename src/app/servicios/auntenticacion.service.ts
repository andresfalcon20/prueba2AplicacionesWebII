import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Usuario } from '../component/registro-usuario/usuarios';

@Injectable({
  providedIn: 'root'
})
export class AuntenticacionService {

  private apiUrl = 'http://localhost:3000/usuarios'; 

  constructor(private router: Router, private http: HttpClient) { }

  login(usuario: string, password: string): Observable<boolean> {
    return this.http.get<Usuario[]>(this.apiUrl).pipe(
      map(usuarios => {
        const encontrado = usuarios.find(u => u.nombre === usuario && u.password === password);
        if (encontrado) {
          localStorage.setItem('user', JSON.stringify(encontrado));
          return true;
        } else {
          return false;
        }
      })
    );
  }

  sesionIniciada(): boolean {
    return localStorage.getItem('user') !== null;
  }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}

