import { Ingredient } from '../shared/ingredient.model'

export class Recipe {
  // the model
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  // instantiate the contructor
  constructor(name: string, desc: string, image: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = image;
    this.ingredients = ingredients;
  }
}