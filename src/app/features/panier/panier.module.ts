import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PanierComponent} from './panier/panier.component';
import {IngredientsListComponent} from './panier/ingredients-list/ingredients-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PanierComponent,
    IngredientsListComponent
  ]
})
export class PanierModule { }
