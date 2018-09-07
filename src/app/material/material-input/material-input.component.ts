import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crs-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.css']
})
export class MaterialInputComponent implements OnInit {

  usuario = {
    nombre: 'Roberth'
  }

  constructor() { }

  ngOnInit() {
  }

  onKeyUp($event) {
    console.log($event)
  }

  onBlur($event) {
    console.log($event)
  }
}
