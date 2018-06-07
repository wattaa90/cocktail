import {Component, OnInit} from '@angular/core';
import {Cocktail} from "../shared/models/cocktail.model";

@Component({
  selector: 'app-cocktails-container',
  templateUrl: './cocktails-container.component.html',
  styleUrls: ['./cocktails-container.component.css']
})
export class CocktailsContainerComponent implements OnInit {

  cocktails: Cocktail[] = [
    {name: "Mojito", desc : "Le mojito est un cocktail composé de rhum, de citron et de menthe fraîche. A déguster lors de vos soirées ..", img: "https://www.cocktails-faciles.fr/get/img/cocktails/218-virgin-mojito.jpg"},
    {name: "Pina Colada",desc :"La piña colada veut dire 'ananas pressé', c'est un cocktail à base de rhum, de jus d'ananas et crème de coco. Pour mettre un peu d'exotisme dans vos verres.", img :""},
    {name: "Sour",desc :"Le Pisco tient son nom de la vallée péruvienne du même nom. Le Pisco Sour se boit très frais et est un cocktail idéal l'été ...", img :""},
    {name: "Margarita",desc :"Ce cocktail est idéal l'été pour se rafraichir autour d'un verre... La margarita maison est si simple à préparer que ce serait dommage de s'en priver.  ", img :""}
  ];

  public cocktail : Cocktail;


  constructor() { }

  ngOnInit() {
    this.cocktail = new Cocktail("Mojito","Le mojito est un cocktail composé de rhum, de citron et de menthe fraîche. A déguster lors de vos soirées ..","https://www.cocktails-faciles.fr/get/img/cocktails/218-virgin-mojito.jpg");
  }

  public choisirCocktail(index) {
    console.log(index);
    this.cocktail = this.cocktails[index];
  }

}
