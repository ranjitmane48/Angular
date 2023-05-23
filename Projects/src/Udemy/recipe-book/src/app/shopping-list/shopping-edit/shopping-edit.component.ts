import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild("nameInput")
  nameInputRef: ElementRef | undefined;

  @ViewChild("amountInput")
  amountInputRef: ElementRef | undefined;

  @Output()
  ingredientAdded = new EventEmitter<{name: string, amount: number}>();

  userInputs: string[] = [];

  onAddButtonClicked() {
    const ingredientName = this.nameInputRef?.nativeElement.value;
    const ingredientAmount = this.amountInputRef?.nativeElement.value;
    const ingredient = new Ingredient(ingredientName, ingredientAmount );
    this.ingredientAdded.emit(ingredient);
  }
}
function output() {
  throw new Error('Function not implemented.');
}

