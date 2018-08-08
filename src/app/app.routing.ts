import { Route, RouterModule } from '@angular/router';
import {PanierComponent} from "./panier/panier.component";
import {CocktailsContainerComponent} from "./cocktails-container/cocktails-container.component";
import {CocktailsDetailsComponent} from "./cocktails-container/cocktails-details/cocktails-details.component";

const APP_ROUTE: Route[] = [
  {path : '', redirectTo: 'cocktails', pathMatch: 'full'},
  {path : 'panier', component: PanierComponent},
  {path : 'cocktails', component: CocktailsContainerComponent, children: [
      {path: '', component: CocktailsDetailsComponent},
      {path: ':index', component: CocktailsDetailsComponent}
    ]},
];


export const AppRouting = RouterModule.forRoot(APP_ROUTE);
