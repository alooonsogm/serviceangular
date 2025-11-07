import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { PersonasapiComponent } from './components/personasapi.component/personasapi.component';
import { SevicePersonas } from './services/service.personas';
import { PersonasstandaloneComponent } from './components/personasstandalone.component/personasstandalone.component';

@NgModule({
  declarations: [
    App,
    PersonasapiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonasstandaloneComponent
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    SevicePersonas,
  ],
  bootstrap: [App]
})
export class AppModule { }
