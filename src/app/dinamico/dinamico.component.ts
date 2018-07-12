import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { DemosComponent } from '../demos/demos.component';
import { CalculadoraComponent } from '../calculadora/calculadora.component';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css'],
  entryComponents: [ HomeComponent, DemosComponent, CalculadoraComponent, ],
})
export class DinamicoComponent implements OnInit {
  menu = [
    { texto: 'Inicio', componete: HomeComponent},
    { texto: 'Demos', componete: DemosComponent},
    { texto: 'Calculadora', componete: CalculadoraComponent},
  ];
  seleccionado = this.menu[0].componete;

  constructor() { }

  ngOnInit() {
  }

  seleccionar(indice: number) {
    this.seleccionado = this.menu[indice].componete;
  }
}
