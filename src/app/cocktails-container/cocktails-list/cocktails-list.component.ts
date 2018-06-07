import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cocktail} from "../../shared/models/cocktail.model";

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {

  @Input() public cocktails : Cocktail[];
  @Output() public choisir: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  public choisirCocktail(index: number): void {
    console.log(index);
    this.choisir.emit(index);
  }

  ngOnInit() {
  }

}
