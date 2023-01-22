import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { EncriptacionComponent } from './encriptacion/encriptacion.component';
import { MenuComponent } from './menu/menu.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'productos', component: ProductoComponent},
  {path: 'encriptacion', component: EncriptacionComponent},
  {path: 'agregarproducto', component: AgregarProductoComponent},
  {path: 'editarProducto/:codigo', component: EditarProductoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
