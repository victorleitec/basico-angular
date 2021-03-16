import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CursoAngularComponent } from './curso-angular/curso-angular.component';
import { TesteComponent } from './teste/teste.component';
import {ClientesModuleModule} from "./clientes/clientes.module";

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CursoAngularComponent,
    TesteComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ClientesModuleModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
