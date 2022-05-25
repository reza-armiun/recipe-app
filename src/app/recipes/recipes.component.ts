import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe";
import {RecipeService} from "../services/recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe | undefined;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.itemEventClick.subscribe(recipe  => this.selectedRecipe = recipe);
  }

}
