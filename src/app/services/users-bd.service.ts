import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersBDService {
  url = environment.baseUrlUsers;

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}recuperartodos.php`);
  }
  recuperar() {
    const answer = this.http.get(`${this.url}recuperartodos.php`, { responseType: 'text' })
    return answer;
  }
  alta(user: Users) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(user), { responseType: 'text' });
  }

  baja(id: number) {
    return this.http.get(`${this.url}baja.php?id=${id}`);
  }

  seleccionar(id: number) {
    return this.http.get(`${this.url}seleccionar.php?id=${id}`);
  }

  modificacion(user: Users) {
    return this.http.post(`${this.url}modificacion.php`, JSON.stringify(user));
  }
}
