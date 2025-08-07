import { Component, Input, OnInit } from '@angular/core';
import { CursosService } from '../../servicios/cursos.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Curso } from '../crear-curso/curso';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit {
cursos: Curso[] = [];

constructor(private cursosService: CursosService) {}

ngOnInit() {
  this.cursos = this.cursosService.obtenerCursos();
}}