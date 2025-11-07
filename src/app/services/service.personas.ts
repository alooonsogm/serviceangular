import { Injectable } from "@angular/core";
import { Persona } from "../models/persona";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "../Global";
import { environment } from "../../environments/environment.development";

@Injectable()
export class SevicePersonas {
    //Para poder erealizar peticiones, necesitamos el objeto HttpClient, dicho objeto debemos inyectarlo en las clases.
    constructor(private _http: HttpClient){

    }

    //Si vamos a devolver la peticion, el objeto a devolver es un Observable<any>, para poder subcribirnos
    getPersonas(): Observable<any> {
        let urlApi = environment.urlApiPersonas;
        let request = "api/personas";

        return this._http.get(urlApi + request);
    }

    getPersonasPromesa(): Promise<any> {
        let urlApi = environment.urlApiPersonas;
        let request = "api/personas";

        let promesa = new Promise((resolve) => {
            this._http.get(urlApi + request).subscribe(response => {
                resolve(response);
            })
        })
        return promesa;
    }
}