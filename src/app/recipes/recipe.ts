import {Ingredient} from "../shared/ingredient.model";

export class Recipe {

  constructor(private _id: number, private _name: string
              , private _description: string
              , private _imagePath: string, private _ingredients: Ingredient[]) {
  }


  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get imagePath(): string {
    return this._imagePath;
  }


  get ingredients(): Ingredient[] {
    return this._ingredients;
  }
}
