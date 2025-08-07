import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CursosService } from '../../servicios/cursos.service';
import { Router } from '@angular/router';
import { Curso } from './curso';
import { CommonModule } from '@angular/common';
import { HorasPipe } from '../../pipes/horas.pipe';

@Component({
  selector: 'app-crear-curso',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, HorasPipe],
  templateUrl: './crear-curso.component.html',
  styleUrl: './crear-curso.component.css'
})
export class CrearCursoComponent {
   fb = inject(FormBuilder);
  cursosService = inject(CursosService);

  cursoForm: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required],
    duracion: [1, [Validators.required, Validators.min(1)]],
    profesor: ['', Validators.required],
    categoria: ['', Validators.required],
    fechaInicio: ['', Validators.required]
  });

  agregarCurso() {
    if (this.cursoForm.valid) {
      this.cursosService.agregarCurso(this.cursoForm.value);
      alert('Curso agregado correctamente');
      this.cursoForm.reset({ duracion: 1 });  
    } else {
      this.cursoForm.markAllAsTouched(); 
    }
  }
}