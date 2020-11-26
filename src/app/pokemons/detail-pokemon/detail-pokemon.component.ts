import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
    selector: 'detail-pokemon',
    templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {
    pokemon: Pokemon = null;

    constructor(
        private route: ActivatedRoute, 
        private router: Router,
        private _pokemonService: PokemonService
        ) { }

    ngOnInit() {
        this._pokemonService.getPokemon(+this.route.snapshot.paramMap.get('id')).subscribe(data => this.pokemon = data);
    }

    goEdit(pokemon: Pokemon) {
        let link = ['/pokemon/edit', pokemon.id];
        this.router.navigate(link);
    }

    deletePokemon(pokemon: Pokemon) {
        this._pokemonService.deletePokemon(pokemon).subscribe(() => {
            this.router.navigate(['/pokemon/all']);
        });
    }
}