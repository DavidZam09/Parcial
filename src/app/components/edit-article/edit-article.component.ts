import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articles } from 'src/app/interfaces/articles';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  id: any;
  art: Articles = {
    codigo: 0,
    modelo: '',
    precio: 0,
    talla: 0,

  };
  
  constructor(private articleDb: DbService, private router: ActivatedRoute, private redirect: Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    if (this.id) {
      this.select();
    }
  }

  select() {
    this.articleDb.seleccionar(this.id).subscribe((datos: any) => this.art = datos[0]);
  }

  alta() {
    this.articleDb.modificacion(this.art).subscribe((data: any) => {
      if (data) {
        alert('Datos Modificados')
        this.redirect.navigate(['/list-article']);
      }
    });
  }
  delete(id: any) {
    this.articleDb.baja(id).subscribe((data: any) => {
      if (data) {
        alert('Datos Eliminados')
      }
    })
  }
}
