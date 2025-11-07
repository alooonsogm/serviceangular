import { Component, OnInit } from '@angular/core';
import { SevicePersonas } from '../../services/service.personas';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-personasstandalone',
  standalone: true,
  templateUrl: './personasstandalone.component.html',
  styleUrl: './personasstandalone.component.css',
  providers: [SevicePersonas],
})
export class PersonasstandaloneComponent implements OnInit{
  public personas!: Array<Persona>;

  constructor(private _service: SevicePersonas){

  }

  ngOnInit(): void {
    // this._service.getPersonas().subscribe(response => {
    //   console.log("Leyendo");
    //   this.personas = response;
    // })

    this._service.getPersonasPromesa().then(response => {
      console.log("Leyendo");
      this.personas = response;
    })
  }
}
