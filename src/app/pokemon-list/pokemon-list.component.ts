import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit {

  pokemons = ['Bulbasaur', 'Ivysaur', 'Venosaur', 'Charmander'];


  constructor(){
  }

  ngOnInit(): void{

  }

}
