import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/interfaces/api';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  name: string = '';
  pokemon: Api = {
    name: '',
    image: '',
    ability: '',
    moves: '',
    experience: '',
  }
  todoPokemon: any;
  habilidades: any;
  mov: any;
 

  constructor(private servicio: ApiService) { }
  ngOnInit(): void {
    this.servicio.getAll().subscribe((data: any) => {
      if (data) {
        this.todoPokemon = data.results;
        console.log(this.todoPokemon)
      }
    })
  }

  select(){
    
  }
  search() {
    this.servicio.getData(this.name).subscribe((data: any) => {
      if (data) {
        this.pokemon.image = data.sprites.front_default;
        this.pokemon.name = data.forms[0].name;
        this.pokemon.moves = data.moves[0].move.name;
        this.habilidades = data.abilities[0].ability.name + ' - ' + data.abilities[1].ability.name;
        this.pokemon.experience = data.base_experience;
        this.validation();
        console.log(data);
      }

      console.log(data);
    });
  }

  validation() {
    if (this.habilidades.length == 1) {
      this.pokemon.ability = this.habilidades;
      console.log(this.habilidades)

    }
    this.pokemon.ability = this.habilidades;
    console.log(this.habilidades)
  }

}
