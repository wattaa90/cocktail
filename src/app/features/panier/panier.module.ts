import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PanierComponent} from './panier/panier.component';
import {IngredientsListComponent} from './panier/ingredients-list/ingredients-list.component';
import {RouterModule} from '@angular/router';
import {PANIER_ROUTES} from './panier.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PANIER_ROUTES)
  ],
  declarations: [
    PanierComponent,
    IngredientsListComponent
  ]
})
export class PanierModule { }
