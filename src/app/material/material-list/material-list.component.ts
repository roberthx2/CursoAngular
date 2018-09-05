import { Component, OnInit } from '@angular/core';
import { Estudiante } from "../../shared/model/estudiante";
import { ClassEstudiante } from "../../shared/model/class-estudiante";

@Component({
  selector: 'crs-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  estudiante1: ClassEstudiante;
  estudiante2: Estudiante;
  estudiante3: Estudiante;

  constructor() { }

  ngOnInit() {
    console.log('Iniciando');
    
    this.estudiante1 = new ClassEstudiante(1, 'Roberth Jose', 'Maracaibo');

    this.estudiante2 = {
      id: 2,
      nombre: 'Diana Gabriela',
      ciudad: 'Merida'
    }

    this.estudiante3 = {
      id: 3,
      nombre: 'Deangerling Gaby',
      ciudad: 'Coro'
    }
  }

}
