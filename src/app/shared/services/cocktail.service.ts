import { Injectable } from '@angular/core';
import {Cocktail} from "../models/cocktail.model";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class CocktailService {



  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject ([
    {name: "Mojito", desc : "Le mojito est un cocktail composé de rhum, de citron et de menthe fraîche. A déguster lors de vos soirées ..", img: "https://www.cocktails-faciles.fr/get/img/cocktails/218-virgin-mojito.jpg"},
    {name: "Pina Colada",desc :"La piña colada veut dire 'ananas pressé', c'est un cocktail à base de rhum, de jus d'ananas et crème de coco. Pour mettre un peu d'exotisme dans vos verres.", img :"https://www.cocktails-faciles.fr/get/img/cocktails/124-pina-colada.jpg"},
    {name: "Sour",desc :"Le Pisco tient son nom de la vallée péruvienne du même nom. Le Pisco Sour se boit très frais et est un cocktail idéal l'été ...", img :"https://www.cocktails-faciles.fr/get/img/cocktails/194-christmas-sour.jpg"},
    {name: "Margarita",desc :"Ce cocktail est idéal l'été pour se rafraichir autour d'un verre... La margarita maison est si simple à préparer que ce serait dommage de s'en priver.  ", img :"https://www.cocktails-faciles.fr/get/img/cocktails/72-margarita.jpg"}
  ]);

  public cocktail : BehaviorSubject<Cocktail> = new BehaviorSubject<Cocktail>(this.cocktails.value[0]);

  constructor() {}


  public selectCocktail(index : number) : void {
    this.cocktail.next(this.cocktails.value[index]);
  }

}
