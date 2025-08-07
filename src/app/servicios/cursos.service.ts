import { Injectable } from '@angular/core';
import { Curso } from '../component/crear-curso/curso';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
private cursos: Curso[] = [];

  agregarCurso(curso: Curso) {
    this.cursos.push(curso);
  }

  obtenerCursos(): Curso[] {
    return this.cursos;
  }
}
