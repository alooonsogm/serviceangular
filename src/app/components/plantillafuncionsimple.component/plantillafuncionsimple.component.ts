import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SevicePlantillas } from '../../services/service.plantillas';
import { Plantilla } from '../../models/plantilla';

@Component({
  selector: 'app-plantillafuncionsimple',
  standalone: false,
  templateUrl: './plantillafuncionsimple.component.html',
  styleUrl: './plantillafuncionsimple.component.css',
})
export class PlantillafuncionsimpleComponent implements OnInit{
  public plantillas!: Array<Plantilla>;
  public funciones!: Array<string>;

  @ViewChild("cajaFuncion") cajaFuncion!: ElementRef;

  constructor(private _service: SevicePlantillas){

  }

  ngOnInit(): void {
    this._service.getFuncionesHttp().subscribe(response => {
      this.funciones = response;
    })
  }

  mostrarPlantilla(): void {
    let funcion = this.cajaFuncion.nativeElement.value;
    this._service.getPlantillas(funcion).then(response => {
      this.plantillas = response;
    })
  }
}
