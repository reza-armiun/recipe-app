import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs";


export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
   addIngredientEvent = new Subject<void>();


  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.addIngredientEvent.next();
  }

  addIngredients(ingredients: Ingredient []) {
    this.ingredients.push(...ingredients);
    this.addIngredientEvent.next();
  }


}
