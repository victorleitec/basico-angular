import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';


@NgModule({
    declarations: [ClientesComponent],
    exports: [
        ClientesComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ClientesModuleModule { }
