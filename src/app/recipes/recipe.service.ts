import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
   

    private recipes: Recipe[] = [
        new Recipe(
            'Cartofi crocanti cu sos de usturoi',
            'Delicios si bun',
            'https://jamilacuisine.ro/wp-content/uploads/2021/04/Cartofi-crocanti-cu-sos-de-usturoi-741x486.jpg.webp',
            [
                new Ingredient('Meat',1),
                new Ingredient('French Fries',20)
            ]),
        new Recipe(
            'Fajitas de pui la cuptor', 
            'Ce sa vrei mai mult de atat?', 
            'https://jamilacuisine.ro/wp-content/uploads/2021/03/Fajitas-de-pui-la-cuptor-741x486.jpg.webp',
            [
                new Ingredient('Buns',2),
                new Ingredient('Meat',1)
            ])
      ]; 

      constructor(private slService: ShoppingListService) {}

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number){
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
         this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe){
          this.recipes[index] = newRecipe;
          this.recipesChanged.next(this.recipes.slice());
        }

        deleteRecipe(index: number){
            this.recipes.splice(index,1);
            this.recipesChanged.next(this.recipes.slice());
        }
}