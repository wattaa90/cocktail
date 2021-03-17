import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ActiveDirective } from './shared/directives/active.directive';

import {AppRouting} from './app.routing';
import {PanierService} from './shared/services/panier.service';
import {CocktailModule} from './features/cocktail/cocktail.module';
import {LoginModule} from './features/login/login.module';
import {PanierModule} from './features/panier/panier.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    CocktailModule, LoginModule, PanierModule
  ],
  providers: [PanierService],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
