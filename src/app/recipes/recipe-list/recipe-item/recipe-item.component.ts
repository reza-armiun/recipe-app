import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from "../../recipe";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe | undefined;
  @Output() itemClicked = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeClick() {
    this.itemClicked.emit();
  }
}
