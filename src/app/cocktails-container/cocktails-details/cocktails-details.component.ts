import {Component, Input, OnInit} from '@angular/core';
import {Cocktail} from "../../shared/models/cocktail.model";
import {CocktailService} from "../../shared/services/cocktail.service";
import {Ingredient} from "../../shared/models/ingredient.model";
import {PanierService} from "../../shared/services/panier.service";
import {ActivatedRoute, Params} from "@angular/router";
import index from "@angular/cli/lib/cli";

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.css']
})
export class CocktailsDetailsComponent implements OnInit {

  public cocktail: Cocktail;
  constructor(private cocktailService : CocktailService,
              private panierService: PanierService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.cocktailService.getCocktail(params.index);
    })
  }

  ajouterAuPanier(ingredients: Ingredient[]) : void {
    this.panierService.ajouterIngredients(ingredients);
  }

}
