import { Injectable } from '@angular/core';
import { Articulo } from 'src/app/models/articulos';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
  listArticulo:Articulo[]=[{
    nombreArticulo:'tornillo',precio:200, cantidad:23,fechaIngreso:new Date('2023-05-27')
 },
 {
  nombreArticulo:'arandela',precio:200, cantidad:30,fechaIngreso:new Date('2023-05-28')
},
{
  nombreArticulo:'Destornillador',precio:10000, cantidad:10,fechaIngreso:new Date('2023-05-29')
},
{
  nombreArticulo:'Alicate',precio:20000, cantidad:10,fechaIngreso:new Date('2023-05-30')
},
{
  nombreArticulo:'Martillo',precio:25000, cantidad:15,fechaIngreso:new Date('2023-05-30')
},
{
  nombreArticulo:'pala',precio:30000, cantidad:5,fechaIngreso:new Date('2023-05-30')
},
{
  nombreArticulo:'palustre',precio:12000, cantidad:8,fechaIngreso:new Date('2023-05-26')
},
{
  nombreArticulo:'Bombilla',precio:13000, cantidad:20,fechaIngreso:new Date('2023-05-25')
},
{
  nombreArticulo:'Toma corriente',precio:18000, cantidad:15,fechaIngreso:new Date('2023-05-23')
},
{
  nombreArticulo:'Serrucho',precio:32000, cantidad:13,fechaIngreso:new Date('2023-05-30')
},
];

  constructor() { }

  getArticulo(){
    return this.listArticulo.slice();
  }
  eliminarArticulo(index:number){
    this.listArticulo.splice(index,1);
  }
  agregarArticulo(articulo:Articulo){
    this.listArticulo.unshift(articulo);
  }
  obtenerArticulo(index:number){
    return this.listArticulo[index];
  }
  editarArticulo(articulo:Articulo,idArticulo:number){
    this.listArticulo[idArticulo].nombreArticulo=articulo.nombreArticulo;
    this.listArticulo[idArticulo].precio=articulo.precio;
    this.listArticulo[idArticulo].cantidad=articulo.cantidad;
    this.listArticulo[idArticulo].fechaIngreso=articulo.fechaIngreso;
  }
}
