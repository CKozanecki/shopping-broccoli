import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from "./shared/recipe";

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {

  @Input() selectedRecipe:Recipe;

  constructor() { }

  ngOnInit() {
  }

}
