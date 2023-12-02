import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ArticuloService } from 'src/app/services/services/articulo.service';
import { Articulo } from 'src/app/models/articulos';
import { MatDialog } from '@angular/material/dialog';
import { MensajeConfirmacionComponent } from '../shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReporteService } from 'src/app/services/reporte.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-list-articulos',
  templateUrl: './list-articulos.component.html',
  styleUrls: ['./list-articulos.component.css']
})
export class ListArticulosComponent {
  displayedColumns: string[] = ['nombreArticulo', 'precio', 'cantidad', 'fechaIngreso', 'acciones'];
  dataSource = new MatTableDataSource<Articulo>();

  listArticulo: Articulo[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private articuloService: ArticuloService, public dialog: MatDialog,
    public snackBar: MatSnackBar, private reporteServices:ReporteService) {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit() {
    this.cargarArticulo();
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  cargarArticulo() {
    this.listArticulo = this.articuloService.getArticulo();
    this.dataSource = new MatTableDataSource(this.listArticulo);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  eliminarArticulo(index: number): void {
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: '350px',
      data: { mensaje: '¿Esta Seguro de Eliminar Este Articulo?' },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result==="aceptar") {
        this.articuloService.eliminarArticulo(index);
        this.cargarArticulo();
        this.snackBar.open('El Articulo Fue Elimindado Exitosamente!!','', {
          duration:3000
        })
      }
    });

  }
  generarPDF(){
    this.reporteServices.generarPDF();
  }
}
