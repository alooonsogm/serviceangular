import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Plantilla } from '../../models/plantilla';
import { SevicePlantillas } from '../../services/service.plantillas';

@Component({
  selector: 'app-plantillafuncionmultiple',
  standalone: false,
  templateUrl: './plantillafuncionmultiple.component.html',
  styleUrl: './plantillafuncionmultiple.component.css',
})
export class PlantillafuncionmultipleComponent implements OnInit{
  public plantillas: Array<Plantilla>;
  public funciones!: Array<string>;
  @ViewChild("selectFunciones") selectFunciones!: ElementRef;

  constructor(private _service: SevicePlantillas){
    this.plantillas = new Array<Plantilla>();
  }

  ngOnInit(): void {
    this._service.getFuncionesHttp().subscribe(response => {
      this.funciones = response;
    })
  }

  mostrarPlantilla(): void {
    let aux = new Array<string>();
    for(var option of this.selectFunciones.nativeElement.options){
      if(option.selected == true){
        aux.push(option.value);
      }
    }
    this._service.getPlantillasFunciones(aux).subscribe(response => {
      this.plantillas = response;
    })
  }
}
