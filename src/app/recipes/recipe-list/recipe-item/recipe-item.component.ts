import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from "../../recipe";
import {RecipeService} from "../../../services/recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe | undefined;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onRecipeClick(recipe: Recipe | undefined) {
    this.recipeService.itemEventClick.emit(recipe);
  }
}
