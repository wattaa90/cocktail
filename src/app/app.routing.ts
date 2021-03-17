import { Route, RouterModule } from '@angular/router';
import {CocktailsContainerComponent} from './features/cocktail/cocktails-container/cocktails-container.component';
import {PanierComponent} from './features/panier/panier/panier.component';
import {LoginPageComponent} from './features/login/login-page/login-page.component';
import {CocktailEditComponent} from './features/cocktail/cocktails-container/cocktail-edit/cocktail-edit.component';
import {CocktailsDetailsComponent} from './features/cocktail/cocktails-container/cocktails-details/cocktails-details.component';

const APP_ROUTE: Route[] = [
  {path : '', redirectTo: 'login', pathMatch: 'full'},
  {path : 'login', component: LoginPageComponent},
  {path : 'panier', component: PanierComponent},
  {path : 'cocktails', component: CocktailsContainerComponent, children: [
      {path: 'new', component: CocktailEditComponent},
      {path: ':index/edit', component: CocktailEditComponent},
      {path: ':index', component: CocktailsDetailsComponent},
      {path: '', component: CocktailsDetailsComponent},
    ]},
];


export const AppRouting = RouterModule.forRoot(APP_ROUTE);
