import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonSpecies } from './PokemonSpecies';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl= 'https://pokeapi.co/api/v2/pokemon-species/';

  constructor(private http: HttpClient) {

    }

  getPokemon() {
    var pokemonSpeciesObservable = this.http.get<PokemonSpecies>(this.apiUrl + '88');

    // to make sure it works

    pokemonSpeciesObservable.subscribe(pokemonValue => {
     console.log(pokemonValue.id);
    })
  }
}
