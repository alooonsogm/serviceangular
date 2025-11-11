import { Injectable } from "@angular/core";
import { Coche } from "../models/coche";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.development";
import { Observable } from "rxjs";

@Injectable()
export class SeviceCoches {
    constructor(private _http: HttpClient){

    }

    getCochesFetch(): Promise<any>{
        var urlCoches = environment.urlApiCoches;
        var request = "webresources/coches";

        let promise = new Promise((resolve) => {
            fetch(urlCoches+ request).then(response => {
                resolve(response.json());
            })
        })
        return promise;
    }

    getCochesHttp(): Observable<any> {
        var urlCoches = environment.urlApiCoches;
        var request = "webresources/coches";

        return this._http.get(urlCoches + request);
    }

    getCoches(): Promise<Array<Coche>> {
        var urlCoches = environment.urlApiCoches;
        var request = "webresources/coches";

        //Extraer los datos tenemos que seguir haciendolo
        //la duferencia esta en la sintaxis.
        const coches = fetch(urlCoches + request).then(response => response.json());
        return coches;
    }
}