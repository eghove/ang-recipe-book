export class Recipe {
  // the model
  public name: string;
  public description: string;
  public imagePath: string;

  // instantiate the contructor
  constructor(name: string, desc: string, image: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = image;
  }
}