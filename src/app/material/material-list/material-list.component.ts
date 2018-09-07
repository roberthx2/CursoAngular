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

  listaEstudiantes: Estudiante[];

  constructor() { }

  ngOnInit() {
    console.log('Iniciando');
    
    this.estudiante1 = new ClassEstudiante(1, 'Roberth Jose', 'Maracaibo');

    this.estudiante2 = {
      id: 2,
      nombre: 'Diana Gabriela',
      ciudad: 'Merida',
      fotoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn0eGio4sxHEy2TLAS8wZ-XybCt5fDQuQunJN9-rDaB19Nq0Ug'
    }

    this.estudiante3 = {
      id: 3,
      nombre: 'Deangerling Gaby',
      ciudad: 'Coro',
      fotoURL: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/main_element/public/media/image/2017/09/dragon-ball-xenoverse-2.jpg?itok=ZZt5BgWy'
    }

    this.listaEstudiantes = [
      this.estudiante1,
      this.estudiante2,
      this.estudiante3
    ];
  }

  onMouseClick($event: Estudiante) {
    console.log('Click: ', $event);
    console.log('Nombre:', $event.nombre);
  }

}
