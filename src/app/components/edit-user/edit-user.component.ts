import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/interfaces/users';
import { UsersBDService } from 'src/app/services/users-bd.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: Users = {
    id: 0,
    name: '',
    cedula: 0,
    cant: 0,
    modelo: '',
    talla: 0,
    total: 0,

  }
  private total = 0.0;
  modelo = [
    'Ejecutivo',
    'Emperador',
    'Premier'
  ]
  seleccion: string = this.modelo[0];
  id: any;
  constructor(private userDB: UsersBDService, private router: ActivatedRoute, private redirecto: Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    if (this.id) {
      this.select();
    }
  }
  select() {
    this.userDB.seleccionar(this.id).subscribe((datos: any) => this.user = datos[0]);
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
    this.update();
  }

  update() {
    this.user.modelo = this.seleccion;
    this.userDB.modificacion(this.user).subscribe((data: any) => {
      if (data) {
        alert('Datos modificados')
        this.redirecto.navigate(['/list-users'])
      }
    })
  }

  delete(id: any) {
    this.userDB.baja(id).subscribe((data: any) => {
      if (data) {
        alert('Datos Eliminados')
        this.redirecto.navigate(['/list-users'])
      }
    })
  }
}
