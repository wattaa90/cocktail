import {Routes} from '@angular/router';
import {CocktailsContainerComponent} from './cocktails-container.component';
import {CocktailEditComponent} from './cocktail-edit/cocktail-edit.component';
import {CocktailsDetailsComponent} from './cocktails-details/cocktails-details.component';

export const COCKTAILS_ROUTEs: Routes = [
  {path : 'cocktails', component: CocktailsContainerComponent, children: [
      {path: 'new', component: CocktailEditComponent},
      {path: ':index/edit', component: CocktailEditComponent},
      {path: ':index', component: CocktailsDetailsComponent},
      {path: '', component: CocktailsDetailsComponent},
    ]},
]
