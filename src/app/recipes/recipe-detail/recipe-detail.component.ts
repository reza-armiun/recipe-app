import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe";
import {Ingredient} from "../../shared/ingredient.model";
import {RecipeService} from "../../services/recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe | undefined;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  addIngredients(ingredients: Ingredient[] | undefined) {
    if(ingredients)
      this.recipeService.addIngredients(ingredients);
  }
}
