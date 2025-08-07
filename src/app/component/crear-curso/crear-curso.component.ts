import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CursosService } from '../../servicios/cursos.service';
import { Router } from '@angular/router';
import { Curso } from './curso';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-curso',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './crear-curso.component.html',
  styleUrl: './crear-curso.component.css'
})
export class CrearCursoComponent {
  curso: Curso = {
    nombre: '',
    descripcion: '',
    duracion: 1,
    profesor: '',
    categoria: '',
    fechaInicio: ''
  };

constructor(private cursosService: CursosService) {}

agregarCurso() {
  this.cursosService.agregarCurso({ ...this.curso });
  this.curso = {
    nombre: '',
    descripcion: '',
    duracion: 1,
    profesor: '',
    categoria: '',
    fechaInicio: ''
  };
}
}