import { Route } from '@angular/router';

export const APP_ROUTE: Route[] = [
  {path : '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('./features/login/login.module').then((m) => m.LoginModule) },
  {path: 'cocktails', loadChildren: () => import('./features/cocktail/cocktail.module').then((m) => m.CocktailModule)},
  {path: 'panier', loadChildren: () => import('./features/panier/panier.module').then((m) => m.PanierModule)},
];

