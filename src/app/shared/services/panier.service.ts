import { Injectable } from '@angular/core';
import {Ingredient} from "../models/ingredient.model";
import {BehaviorSubject} from "rxjs/BehaviorSubject";


@Injectable()
export class PanierService {

  public  panier: BehaviorSubject<Ingredient[]> = new BehaviorSubject<Ingredient[]>(null);


  constructor() { }



  public ajouterIngredients(ingredients: Ingredient[]): void {
    const currentValue = this.panier.value;
    if (currentValue && currentValue.length) {
      this.panier.next(currentValue.concat(ingredients));
    } else {
      this.panier.next(ingredients);
    }
  }

}
