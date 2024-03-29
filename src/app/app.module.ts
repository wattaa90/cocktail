import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CocktailsListComponent } from './cocktails-container/cocktails-list/cocktails-list.component';
import { CocktailsDetailsComponent } from './cocktails-container/cocktails-details/cocktails-details.component';
import { CocktailsContainerComponent } from './cocktails-container/cocktails-container.component';
import { ActiveDirective } from './shared/directives/active.directive';
import { PanierComponent } from './panier/panier.component';
import { IngredientsListComponent } from './panier/ingredients-list/ingredients-list.component';
import {AppRouting} from './app.routing';
import {PanierService} from './shared/services/panier.service';
import { CocktailEditComponent } from './cocktails-container/cocktail-edit/cocktail-edit.component';
import { LoginPageComponent } from './login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailsListComponent,
    CocktailsDetailsComponent,
    CocktailsContainerComponent,
    ActiveDirective,
    PanierComponent,
    IngredientsListComponent,
    CocktailEditComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
