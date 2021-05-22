import {Subject } from 'rxjs';
import { Ingredient } from "../shared/ingredient.model";


export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

      getIngredinets() {
          return this.ingredients.slice();
      }

      getIngredinet(index: number){
            return this.ingredients[index];
      }

      addIngredient(ingredinet: Ingredient){
          this.ingredients.push(ingredinet);
          this.ingredientsChanged.next(this.ingredients.slice());
      }

      addIngredients(ingredinets: Ingredient[]){
          this.ingredients.push(...ingredinets);
          this.ingredientsChanged.next(this.ingredients.slice());
      }
}