import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelephoneComponent } from './telephone/telephone.component';
import { PersonnagesComponent } from './personnages/personnages.component';
@NgModule({
  declarations: [
    AppComponent,
    TelephoneComponent,
    PersonnagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
