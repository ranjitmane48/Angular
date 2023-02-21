import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
 
  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'Sample Text about recipe 1', 'https://img.freepik.com/free-photo/plate-italian-seafood-shrimp-noodles_1205-12249.jpg?w=996&t=st=1676970002~exp=1676970602~hmac=182764fdc10ae9b0a6056639b231dcec6286cf0b014ba7b4c4782d832a0ab4bb'),
    new Recipe('A Test Recipe 2', 'Sample Text about recipe 2', 'https://img.freepik.com/premium-photo/traditional-spanish-seafood-paella-fry-pan-background_222237-373.jpg?w=900')
  ];

  @Output()
  recipeWasSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
