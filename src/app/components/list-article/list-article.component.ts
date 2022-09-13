import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { Users } from 'src/app/interfaces/users';
import { UsersBDService } from 'src/app/services/users-bd.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css'],
})
export class ListArticleComponent implements OnInit {
  articulos: any;
  data: any;
  private total = 0.0;
  modelo = [
    'Ejecutivo',
    'Emperador',
    'Premier'
  ]
  seleccion: string = this.modelo[0];
  user: Users = {
    id: 0,
    name: '',
    cedula: 0,
    cant: 0,
    modelo: '',
    talla: 0,
    total: 0,
  }
  constructor(private articulosServicio: DbService, private userService: UsersBDService) { }

  ngOnInit(): void {
    this.recuperarTodos();
  }
  recuperarTodos() {
    this.articulosServicio.recuperarTodos().subscribe(result => {
      this.articulos = result;
      console.log(this.articulos);
    });
  }

  alta() {
    this.user.modelo = this.seleccion;
    this.userService.alta(this.user).subscribe((datos: any) => {
      if (datos) {
        alert('Datos Guardados');
      }
    });
  }

  operacion() {
    if (this.seleccion == 'Ejecutivo' && this.user.talla == 8) {
      this.total = this.user.cant * 345.50;
      this.user.total = this.total
      console.log(this.user.cant)
    }
    if (this.seleccion == 'Ejecutivo' && this.user.talla == 9) {
      this.total = this.user.cant * 345.50 + 10;
      console.log(this.user.talla)
    }
    if (this.seleccion == 'Ejecutivo' && this.user.talla == 10) {
      this.total = this.user.cant * 345.50 + 20;
      console.log(this.user.talla)
    }
    if (this.seleccion == 'Emperador' && this.user.talla == 8) {
      this.total = this.user.cant * 246.00;
      this.user.total = this.total
      console.log(this.user.cant)
    }
    if (this.seleccion == 'Emperador' && this.user.talla == 9) {
      this.total = this.user.cant * 246.00 + 10;
      console.log(this.user.talla)
    }
    if (this.seleccion == 'Emperador' && this.user.talla == 10) {
      this.total = this.user.cant * 246.00 + 20;
      console.log(this.user.talla)
    }
    if (this.seleccion == 'Premier' && this.user.talla == 8) {
      this.total = this.user.cant * 298.70;
      this.user.total = this.total
      console.log(this.user.cant)
    }
    if (this.seleccion == 'Premier' && this.user.talla == 9) {
      this.total = this.user.cant * 298.70 + 10;
      console.log(this.user.talla)
    }
    if (this.seleccion == 'Premier' && this.user.talla == 10) {
      this.total = this.user.cant * 298.70 + 20;
      console.log(this.user.talla)
    }
    this.user.total = this.total;
    this.alta();
    alert('El total de la compra es:' + this.total);
  }
  todoUsers() {
    this.userService.recuperarTodos().subscribe(result => {
      this.data = result;
      console.log(this.data);
    });
    console.log(this.data)
  }
  select() {
    this.userService.seleccionar(this.user.id).subscribe((res: any) => this.data = res[0]);
  }

}
