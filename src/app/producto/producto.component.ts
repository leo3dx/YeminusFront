import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
    productos = null;
    constructor(private router : Router) {
      this.getProductos();
    }
    async getProductos(){
      var result = await axios.get("http://149.56.228.41:7090/Yeminus/api/producto");
      this.productos = result.data;
      console.log(this.productos);
    }
    agregarProducto(){
      this.router.navigate(['agregarproducto'])
    }
    editarProducto(codigo : number){
      this.router.navigate(["editarProducto",codigo])
    }
}
