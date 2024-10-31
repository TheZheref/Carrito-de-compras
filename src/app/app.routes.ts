import { Routes } from '@angular/router';
import path from 'path';
import { CarritoCatalogoComponent } from './componentes/carrito-catalogo/carrito-catalogo.component';
import { CarritoListarComponent } from './componentes/carrito-listar/carrito-listar.component';



export const routes: Routes = [
    { path: '',  component: CarritoCatalogoComponent},
    { path: 'carrito', component: CarritoListarComponent},
    { path: '**', redirectTo: '', pathMatch: 'full'}
    
];
