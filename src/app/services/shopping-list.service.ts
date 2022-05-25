import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";


export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
   addIngredientEvent = new EventEmitter<void>();


  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.addIngredientEvent.emit();
  }

  addIngredients(ingredients: Ingredient []) {
    this.ingredients.push(...ingredients);
    this.addIngredientEvent.emit();
  }


}
