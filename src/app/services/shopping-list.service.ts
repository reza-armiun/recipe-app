import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs";


export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
   addIngredientEvent = new Subject<void>();
   selectIngredientEvent = new Subject<number>();


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

  getIngredient(index: number){
     return this.ingredients[index];
  }

  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    console.log('new ingredients ', this.ingredients);
    this.addIngredientEvent.next();
  }


  deleteItem(selectedIndex: number) {
    console.log('deleting item ', selectedIndex);
    this.ingredients.splice(selectedIndex, 1);
    this.addIngredientEvent.next();
  }
}
