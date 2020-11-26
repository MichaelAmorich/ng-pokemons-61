import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.scss']
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon;

  constructor(private route: ActivatedRoute, private _pokemonService: PokemonService) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this._pokemonService.getPokemon(id).subscribe(data => this.pokemon = data);
  }
}
