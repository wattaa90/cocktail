import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CocktailsListComponent} from './cocktails-container/cocktails-list/cocktails-list.component';
import {CocktailsDetailsComponent} from './cocktails-container/cocktails-details/cocktails-details.component';
import {CocktailsContainerComponent} from './cocktails-container/cocktails-container.component';
import {CocktailEditComponent} from './cocktails-container/cocktail-edit/cocktail-edit.component';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './cocktails-container/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CocktailsListComponent,
    CocktailsDetailsComponent,
    CocktailsContainerComponent,
    CocktailEditComponent,
    HeaderComponent
  ]
})
export class CocktailModule { }
