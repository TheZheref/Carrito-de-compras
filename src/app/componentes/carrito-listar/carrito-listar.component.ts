import { Component, inject, OnInit } from '@angular/core';
import { CarritoService } from '../../core/services/carrito.service';
import { Carrito } from '../../core/modelo/carrito';

@Component({
  selector: 'app-carrito-listar',
  standalone: true,
  imports: [],
  templateUrl: './carrito-listar.component.html',
  styleUrl: './carrito-listar.component.css'
})
export class CarritoListarComponent implements OnInit{
  private carritoService = inject(CarritoService);
  listCarrito: Carrito[] = [];

  ngOnInit(): void {
    this.getListCarrito();
  }

  getListCarrito(){
    this.listCarrito=this.carritoService.getCarrito();
  }
}
