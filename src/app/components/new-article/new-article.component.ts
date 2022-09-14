import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articles } from 'src/app/interfaces/articles';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  art: Articles = {
    codigo: 0,
    modelo: '',
    precio: 0,
    talla: 0,
  }
  constructor(private articulosServicio: DbService, private redirecto: Router) { }

  ngOnInit(): void {
  }
  alta() {
    this.articulosServicio.alta(this.art).subscribe((datos: any) => {
      if (datos) {
        console.log(datos.mensaje);
        this.redirecto.navigate(['/list-articleF'])
      }
      console.log(datos)
    });
  }

}
