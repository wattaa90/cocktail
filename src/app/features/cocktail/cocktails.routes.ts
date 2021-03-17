import {Routes} from '@angular/router';
import {CocktailEditComponent} from './cocktails-container/cocktail-edit/cocktail-edit.component';
import {CocktailsContainerComponent} from './cocktails-container/cocktails-container.component';
import {CocktailsDetailsComponent} from './cocktails-container/cocktails-details/cocktails-details.component';

export const COCKTAILS_ROUTEs: Routes = [
  {path : '', component: CocktailsContainerComponent, children: [
      {path: 'new', component: CocktailEditComponent},
      {path: ':index/edit', component: CocktailEditComponent},
      {path: ':index', component: CocktailsDetailsComponent},
      {path: '', component: CocktailsDetailsComponent},
    ]},
];
