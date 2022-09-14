import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) { }

  getData(name: any) {
    return this.http.get(`${this.url}${name}`)
  }
  getAll() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
  }
}
