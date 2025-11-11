import { Injectable } from "@angular/core";
import { Plantilla } from "../models/plantilla";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.development";
import { Observable } from "rxjs";

@Injectable()
export class SevicePlantillas {
    constructor(private _http: HttpClient){

    }

    getFuncionesHttp(): Observable<Array<string>> {
        var urlPlantillas = environment.urlApiPlantillas;
        var request = "api/Plantilla/Funciones";

        //Detro de httpGet podemos indicar el tipo de objeto a devolver mediante <T>
        return this._http.get<Array<string>>(urlPlantillas + request);
    }

    getPlantillas(funcion: string): Promise<Array<Plantilla>> {
        var urlPlantillas = environment.urlApiPlantillas;
        var request = "api/Plantilla/PlantillaFuncion/" + funcion;

        //Extraer los datos tenemos que seguir haciendolo
        //la duferencia esta en la sintaxis.
        const plantillas = fetch(urlPlantillas + request).then(response => response.json());
        return plantillas;
    }

    getPlantillasFunciones(funciones: Array<string>): Observable<Array<Plantilla>> {
        let urlPlantillas = environment.urlApiPlantillas;
        var request = "api/Plantilla/PlantillaFunciones?";
        for(var funcion of funciones){
            request += "funcion=" +  funcion + "&";
        }
        //Eliminamos el ultimo carater (&)
        request = request.substring(0, request.length - 1);

        return this._http.get<Array<Plantilla>>(urlPlantillas + request);
    }
}