import { routing, appRoutingProvider } from './app.routing';

import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { PersonasapiComponent } from './components/personasapi.component/personasapi.component';
import { SevicePersonas } from './services/service.personas';
import { PersonasstandaloneComponent } from './components/personasstandalone.component/personasstandalone.component';
import { SeviceCoches } from './services/service.coches';
import { CochesComponent } from './components/coches.component/coches.component';
import { HomeComponent } from './components/home.component/home.component';
import { PlantillafuncionsimpleComponent } from './components/plantillafuncionsimple.component/plantillafuncionsimple.component';
import { MenuComponent } from './components/menu.component/menu.component';
import { SevicePlantillas } from './services/service.plantillas';
import { FormsModule } from '@angular/forms';
import { PlantillafuncionmultipleComponent } from './components/plantillafuncionmultiple.component/plantillafuncionmultiple.component';

@NgModule({
  declarations: [
    App,
    PersonasapiComponent,
    CochesComponent,
    HomeComponent,
    PlantillafuncionsimpleComponent,
    MenuComponent,
    PlantillafuncionmultipleComponent,
  ],
  imports: [
    BrowserModule,
    PersonasstandaloneComponent,
    routing,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    SevicePersonas,
    SeviceCoches,
    SevicePlantillas,
    appRoutingProvider
  ],
  bootstrap: [App]
})
export class AppModule { }
