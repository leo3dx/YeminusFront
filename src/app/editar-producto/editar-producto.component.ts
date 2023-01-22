import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent {

  precios : number[] = [];
  precio : number;
  
  codigo : number;
  descripcion : string;
  imagen : string;
  iva : number;
  valido : boolean;
  
  constructor(private router :Router, private route : ActivatedRoute){
    this.codigo = route.snapshot.params['codigo'];
    this.getProducto();
  }

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

  async getProducto(){
    let result = await axios.get("http://149.56.228.41:7090/Yeminus/api/producto/" + this.codigo);
    this.descripcion = result.data.descripcion;
    this.imagen = result.data.imagen;
    this.iva = result.data.porcentajeIva;
    this.valido = result.data.productoParaLaVenta;
    for (let i = 0; i < result.data.listaDePrecios.length; i++) {
      this.precios.push(result.data.listaDePrecios[i].precio);
    }
  }

  async onGuardar(){
    let data = {
      descripcion: this.descripcion,
      imagen : this.imagen,
      productoParaLaVenta : this.valido,
      listaDePrecios : this.precios.length == 0 ? null:this.precios,
      porcentajeIva : this.iva,
      codigo : this.codigo
    };
    console.log(data);
    try {
      await axios.put("http://149.56.228.41:7090/Yeminus/api/producto/"+this.codigo,data);
      alert("Registro Actualizado exitosamente");
      this.router.navigate(["productos"]);
    } catch (error) {
      alert("No se pudo actualizar el registro")
    }
  }

  async eliminarProducto(){
    await axios.delete("http://149.56.228.41:7090/Yeminus/api/producto/" + this.codigo);
    this.router.navigate(["productos"]);
  }
}
