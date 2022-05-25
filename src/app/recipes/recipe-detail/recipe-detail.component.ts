import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe";
import {Ingredient} from "../../shared/ingredient.model";
import {RecipeService} from "../../services/recipe.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe | undefined;
  constructor(private recipeService: RecipeService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id =  +params['id'];
      this.recipe = this.recipeService.getRecipeById(id);
    });
  }

  addIngredients(ingredients: Ingredient[] | undefined) {
    if(ingredients)
      this.recipeService.addIngredients(ingredients);
  }
}
