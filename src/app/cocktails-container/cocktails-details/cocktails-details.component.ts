import {Component, Input, OnInit} from '@angular/core';
import {Cocktail} from "../../shared/models/cocktail.model";

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.css']
})
export class CocktailsDetailsComponent implements OnInit {

  @Input() public cocktail: Cocktail;
  constructor() { }

  ngOnInit() {
  }

}
