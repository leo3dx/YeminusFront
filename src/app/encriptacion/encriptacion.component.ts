import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-encriptacion',
  templateUrl: './encriptacion.component.html',
  styleUrls: ['./encriptacion.component.css']
})
export class EncriptacionComponent {

  claveEncriptar:number;
  fraseEncriptar:string;

  claveDesencriptar:number;
  fraseDesencriptar:string;

  fraseEncriptada:string;
  fraseDesencriptada:string;


  async encriptarFrase(){
    let result =  await axios.post("http://149.56.228.41:7090/Yeminus/api/encriptacion",{
      clave : this.claveEncriptar,
      palabra : this.fraseEncriptar
    });
    this.fraseEncriptada = result.data;
  }
  async desencriptarFrase(){
    let result =  await axios.post("http://149.56.228.41:7090/Yeminus/api/encriptacion/desencriptar",{
      clave : this.claveDesencriptar,
      palabra : this.fraseDesencriptar
    });
    this.fraseDesencriptada = result.data;
  }
}
