import { Component } from '@angular/core';


export const PAGES = {
  RECIPE: 'RECIPE',
  SHOPPING_LIST: 'SHOPPING_LIST'
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-sample';
  page: String = PAGES.RECIPE;


}
