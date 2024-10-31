import { Component, inject, OnInit } from '@angular/core';
import { ProductoService } from '../../core/services/producto.service';
import { Producto } from '../../core/modelo/producto';
import { CarritoService } from '../../core/services/carrito.service';


@Component({
  selector: 'app-carrito-catalogo',
  standalone: true,
  imports: [],
  templateUrl: './carrito-catalogo.component.html',
  styleUrl: './carrito-catalogo.component.css'
})
export class CarritoCatalogoComponent implements OnInit{
  private productoService = inject(ProductoService);
  private carritoService = inject(CarritoService);
  productos: Producto[] = [];
  

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this.productoService.getProducto().subscribe({
      next: (data) => {
        this.productos=data;
        console.log(this.productos);
      }, error: (e) => {
        console.error(e);
      }
    })
  }
  agregarProducto(item:Producto){
    this.carritoService.agregar(item);
  }
}
