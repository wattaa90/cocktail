import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {PanierService} from './shared/services/panier.service';
import {CocktailModule} from './features/cocktail/cocktail.module';
import {LoginModule} from './features/login/login.module';
import {PanierModule} from './features/panier/panier.module';
import {RouterModule} from '@angular/router';
import {APP_ROUTE} from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTE),
    CocktailModule, LoginModule, PanierModule
  ],
  providers: [PanierService],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
