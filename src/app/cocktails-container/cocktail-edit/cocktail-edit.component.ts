import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktail-edit.component.html',
  styleUrls: ['./cocktail-edit.component.css']
})
export class CocktailEditComponent implements OnInit {


  public cocktailForm: FormGroup;



  constructor() { }

  ngOnInit() {
    this.cocktailForm =  new FormGroup({
      nom: new FormControl('', [Validators.required, Validators.minLength(3)]),
      ingredients: new FormArray([])
    });
  }

  ajouterIngredient() {
    this.ingredients.push(new FormControl(this.ingredients.length, [Validators.required, Validators.minLength(3)]));
    console.log(this.cocktailForm);
  }

  supprimerIngredient(index) {
    this.ingredients.removeAt(index);
  }

  get ingredients(): FormArray {
    return this.cocktailForm.get('ingredients') as FormArray;
  }

}
