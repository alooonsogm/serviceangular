import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home.component/home.component";
import { CochesComponent } from "./components/coches.component/coches.component";
import { PersonasapiComponent } from "./components/personasapi.component/personasapi.component";
import { PlantillafuncionsimpleComponent } from "./components/plantillafuncionsimple.component/plantillafuncionsimple.component";
import { PlantillafuncionmultipleComponent } from "./components/plantillafuncionmultiple.component/plantillafuncionmultiple.component";

const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "coche", component: CochesComponent },
    { path: "personas", component: PersonasapiComponent },
    { path: "plantillasimple", component: PlantillafuncionsimpleComponent },
    { path: "plantillamultiple", component: PlantillafuncionmultipleComponent },
]

export const appRoutingProvider: any[] = [];
//Las propias ruta a exportar
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);