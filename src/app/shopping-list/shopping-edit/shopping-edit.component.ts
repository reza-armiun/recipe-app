import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName') inputNameEl: ElementRef | undefined ;
  @ViewChild('inputAmount') inputAmountEl: ElementRef | undefined;
  @Output() ingredientAddEvent = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient(event: any) {
    event.preventDefault();
    const name = this.inputNameEl?.nativeElement.value;
    const amount = this.inputAmountEl?.nativeElement.value;
    const ingredient = new Ingredient(name, amount);
    this.ingredientAddEvent.emit(ingredient);
  }
}
