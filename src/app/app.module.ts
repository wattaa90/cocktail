import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CocktailsListComponent } from './cocktails-container/cocktails-list/cocktails-list.component';
import { CocktailsDetailsComponent } from './cocktails-container/cocktails-details/cocktails-details.component';
import { CocktailsContainerComponent } from './cocktails-container/cocktails-container.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailsListComponent,
    CocktailsDetailsComponent,
    CocktailsContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
