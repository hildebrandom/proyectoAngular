import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder, Validator } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Articulo } from 'src/app/models/articulos';
import { ArticuloService } from 'src/app/services/services/articulo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-articulos',
  templateUrl: './editar-articulos.component.html',
  styleUrls: ['./editar-articulos.component.css']
})
export class EditarArticulosComponent {

  myForm!: FormGroup;
  idArticulo: any;
  accion = "Crear";


  constructor(private fb: FormBuilder, private articuloService: ArticuloService, private route: Router,
    public snackBar: MatSnackBar,
    private aRoute: ActivatedRoute) {
    this.myForm = this.fb.group({
      nombreArticulo: ['', [Validators.required, Validators.maxLength(15)]],
      precio: ['', Validators.required],
      cantidad: ['', Validators.required],
      fechaIngreso: ['', Validators.required],
    });
    this.idArticulo = this.aRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    if (this.idArticulo != undefined) {
      this.accion = "Editar";
    }
    this.obtenerArticulo();
  }

  guardarArticulo() {
    const articulo: Articulo = {
      nombreArticulo: this.myForm.get('nombreArticulo')?.value,
      precio: this.myForm.get('precio')?.value,
      cantidad: this.myForm.get('cantidad')?.value,
      fechaIngreso: this.myForm.get('fechaIngreso')?.value,
    };
    if (this.idArticulo !== undefined) {
      this.editarArticulo(articulo);
    } else {
      this.agregarArticulo(articulo);
    }
  }

  agregarArticulo(articulo: Articulo) {
    this.articuloService.agregarArticulo(articulo);
    this.snackBar.open('El Articulo Fue Creado Exitosamente!!', '', {
      duration: 3000
    }
    );
    this.route.navigate(['/']);
  }

  editarArticulo(articulo: Articulo) {
    this.articuloService.editarArticulo(articulo, this.idArticulo);
    this.snackBar.open('El Articulo Fue Actualizado Correctamente!!', '', {
      duration: 3000
    }
    );
    this.route.navigate(['/']);
  }

  obtenerArticulo() {
    const articulo: Articulo = this.articuloService.obtenerArticulo(this.idArticulo);
    this.myForm.patchValue({
      nombreArticulo: articulo.nombreArticulo,
      precio: articulo.precio,
      cantidad: articulo.cantidad,
      fechaIngreso: articulo.fechaIngreso,
    })
  }
}
