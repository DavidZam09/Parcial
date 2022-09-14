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
  constructor(private servicio: ApiService) { }
  ngOnInit(): void {

  }
  search() {
    this.servicio.getData(this.name).subscribe((data: any) => {
      this.pokemon.image = data.sprites.front_default;
      this.pokemon.name = data.forms[0].name;
      this.pokemon.ability = data.abilities[0].ability.name + ' - ' + data.abilities[1].ability.name;
      this.pokemon.moves = data.moves[0].move.name;
      this.pokemon.experience = data.base_experience;
      console.log(data);
    });
  }
}
