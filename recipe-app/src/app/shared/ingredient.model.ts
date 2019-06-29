// export class Ingredient {
//   public name: string;
//   public quantity: number;

//   constructor(name: string, quantity: number) {
//     this.name = name;
//     this.quantity = quantity;
//   }
// }
// The above is the same as the typescript shortcut below
export class Ingredient {
  constructor(public name: string, public quantity: number) {};
}