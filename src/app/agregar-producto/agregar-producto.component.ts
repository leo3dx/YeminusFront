import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {
  constructor(private router :Router){}
  precios : number[] = [];
  precio : number;
  agregarPrecio(){
    if(this.precio != null){
      console.log(this.precio);
      this.precios.push(this.precio);
      this.precio = 0;
    }
  }
  eliminarPrecio(index : number){
    this.precios.splice(index,1);
  }
  async onGuardar(f :NgForm){
    let data = {
      descripcion: f.value.descripcion,
      imagen : f.value.imagen,
      productoParaLaVenta : f.value.venta == '' ? false : f.value.venta,
      listaDePrecios : this.precios.length == 0 ? null:this.precios,
      porcentajeIva : f.value.iva,
      codigo : f.value.codigo
    };
    console.log(data);
    try {
      await axios.post("http://149.56.228.41:7090/Yeminus/api/producto",data);
      alert("Registro guardado exitosamente");
      this.router.navigate(["productos"]);
    } catch (error) {
      alert("El producto ya se encuentra registrado")
    }
  }
}
