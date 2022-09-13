import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Articles } from '../interfaces/articles';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  url = environment.baseUrl

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}recuperartodos.php`);
  }
  recuperar() {
    const answer = this.http.get(`${this.url}recuperartodos.php`, { responseType: 'text' })
    return answer;
  }
  alta(articulo: Articles) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(articulo), { responseType: 'text' });
  }

  baja(codigo: number) {
    return this.http.get(`${this.url}baja.php?codigo=${codigo}`);
  }

  seleccionar(codigo: number) {
    return this.http.get(`${this.url}seleccionar.php?codigo=${codigo}`);
  }

  modificacion(articulo: Articles) {
    return this.http.post(`${this.url}modificacion.php`, JSON.stringify(articulo));
  }
}
