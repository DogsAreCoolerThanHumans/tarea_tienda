import { Injectable } from '@angular/core';
import { Producto } from './Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productos: Producto[] = [
    new Producto(1, 'Surface pro 3', 'microsoft', 'laptop', 12345, 69),
    new Producto(2, 'Alienware 17', 'alienware', 'laptop', 5999, 12),
    new Producto(3, 'ROG', 'asus', 'laptop', 1499, 5),
    new Producto(4, 'Pixel 3', 'google', 'phone', 999, 8),
    new Producto(5, 'Hydrogen One', 'red', 'phone', 6969, 69),
    new Producto(6, 'Poco F1', 'pocophone', 'phone', 299, 13),
    new Producto(7, 'Mi Note 9', 'xioami', 'phone', 199, 40),
    new Producto(8, 'Galaxy S10 Plus', 'Samsung', 'phone', 1199, 8),
    new Producto(9, '3310', 'nokia', 'phone', 59, 1),
    new Producto(10, 'iMac', 'apple', 'desktop', 4999, 8),
    new Producto(11, 'Surface Studio', 'microsoft', 'desktop', 3999, 1),
    new Producto(12, 'Blade Pro', 'razer', 'laptop', 1299, 1),
  ];

  private carrito: Producto[] = [];

  constructor() { }

  getProductos(): Producto[] {
    return this.productos.slice();
  }

  getCarrito(): Producto[] {
    return this.carrito.slice();
  }

  setCarrito(selProd: Producto[]) {
    this.carrito = selProd;
  }

  getTotalCarrito() {
    let total = 0;
    this.carrito.forEach(item => total += item.precio);

    return total;
  }
}
