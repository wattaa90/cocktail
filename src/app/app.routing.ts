import { Route, RouterModule } from '@angular/router';
import {PanierComponent} from './features/panier/panier/panier.component';
import {LoginPageComponent} from './features/login/login-page/login-page.component';

export const APP_ROUTE: Route[] = [
  {path : '', redirectTo: 'login', pathMatch: 'full'}
];
