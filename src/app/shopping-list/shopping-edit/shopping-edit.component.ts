import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../../services/shopping-list.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f')form: NgForm | undefined;
  editMode = false;
  selectedIndex: number | undefined;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.shoppingListService.selectIngredientEvent.subscribe(index => {
      this.selectedIndex = +index;
      this.editMode = true;
      const ingredient = this.shoppingListService.getIngredient(index);
      this.form?.setValue({ name: ingredient.name , amount: ingredient.amount});
    })
  }

  onSubmit() {
    const value  =this.form?.value;
    const ingredient = new Ingredient(value.name, value.amount);
    if(this.editMode) {
      if(this.selectedIndex !== undefined ) {
        this.updateIngredient(this.selectedIndex, ingredient);
      }
    }
    else this.shoppingListService.addIngredient(ingredient);
    this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.form?.reset();

  }

  updateIngredient( index:number, ingredient: Ingredient ) {
    this.shoppingListService.updateIngredient(index, ingredient);
  }

  onDelete() {
    if(this.selectedIndex === undefined) return;
    this.shoppingListService.deleteItem(this.selectedIndex);
    this.onClear();
  }
}
