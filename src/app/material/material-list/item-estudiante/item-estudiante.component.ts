import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Estudiante } from '../../../shared/model/estudiante';

@Component({
  selector: 'crs-item-estudiante',
  templateUrl: './item-estudiante.component.html',
  styleUrls: ['./item-estudiante.component.css']
})
export class ItemEstudianteComponent implements OnInit {

  readonly DEFAULT_PICTURE = 'https://images.vexels.com/media/users/3/140748/isolated/preview/5b078a59390bb4666df98b49f1cdedd0-perfil-avatar-masculino-by-vexels.png';

  @Input()
  estudiante: Estudiante;

  @Output()
  onMouseClick = new EventEmitter<Estudiante>()

  constructor() { }

  ngOnInit() {
  }

  onClick(e: Estudiante) {
    this.onMouseClick.emit(e);
  }

}
