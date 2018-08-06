import { Injectable } from '@angular/core';
import {Cocktail} from "../models/cocktail.model";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import { Ingredient } from '../models/ingredient.model';

@Injectable()
export class CocktailService {



  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject ([



    new Cocktail("Mojito", "Le mojito est un cocktail composé de rhum, de citron et de menthe fraîche. A déguster lors de vos soirées ..", "https://www.cocktails-faciles.fr/get/img/cocktails/218-virgin-mojito.jpg",
    [new Ingredient('perrier', 2),
                new Ingredient('citron', 1),
                new Ingredient( 'sucre', 1)]),
    new Cocktail( "Pina Colada", "La piña colada veut dire 'ananas pressé', c'est un cocktail à base de rhum, de jus d'ananas et crème de coco. Pour mettre un peu d'exotisme dans vos verres.", "https://www.cocktails-faciles.fr/get/img/cocktails/124-pina-colada.jpg",
      [new Ingredient('Ananas', 3),
                  new Ingredient('Lait de coco', 1),
                  new Ingredient( 'Rhum', 1)]),
    new Cocktail( "Sour", "Le Pisco tient son nom de la vallée péruvienne du même nom. Le Pisco Sour se boit très frais et est un cocktail idéal l'été ...", "https://www.cocktails-faciles.fr/get/img/cocktails/194-christmas-sour.jpg",
      [new Ingredient('perrier', 2),
      new Ingredient('citron', 1),
      new Ingredient( 'sucre', 1)]
    ),
    new Cocktail( "Margarita","Ce cocktail est idéal l'été pour se rafraichir autour d'un verre... La margarita maison est si simple à préparer que ce serait dommage de s'en priver.  ", "https://www.cocktails-faciles.fr/get/img/cocktails/72-margarita.jpg",
      [new Ingredient('perrier', 2),
        new Ingredient('citron', 1),
        new Ingredient( 'sucre', 1)])
  ]);

  public cocktail : BehaviorSubject<Cocktail> = new BehaviorSubject<Cocktail>(this.cocktails.value[0]);

  constructor() {}


  public selectCocktail(index : number) : void {
    this.cocktail.next(this.cocktails.value[index]);
  }

  getCocktail(index: number) :Cocktail {
    return this.cocktails.value[index];
  }

}
