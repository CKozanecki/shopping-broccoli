import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs";
import {Recipe} from "../shared/recipe";
import {FormArray, FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  recipeForm: FormGroup;
  private recipeIndex: number;
  private paramsSubscription: Subscription;
  private recipe:Recipe;
  private isNew=true;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(
      (params: any) => {
        this.recipeIndex = +params['id'];
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.recipe = this.recipeService.getRecipe(this.recipeIndex);
        } else {
          this.recipe = null;
          this.isNew = true;
        }
        this.initForm();
      }
    );
  }

  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
  }

  private initForm(){
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeContent = '';
    let recipeIngredients:FormArray = new FormArray([]);

    if(!this.isNew){
      for(let i=0; i < this.recipe.ingredients.length; i++){
        recipeIngredients.push(
          new FormGroup({
            name: new FormControl(this.recipe.ingredients[i].ingredientName, Validators.required),
            amount: new FormControl(this.recipe.ingredients[i].quantity, [Validators.required, Validators.pattern("\\d+")])
          })
        );
      }
      recipeName = this.recipe.name;
      recipeImageUrl = this.recipe.imagePath;
      recipeContent = this.recipe.description;
    }

    this.recipeForm = this.formBuilder.group({
      name: [recipeName, Validators.required],
      imagePath: [recipeImageUrl, Validators.required],
      description: [recipeContent, Validators.required],
      ingredients: recipeIngredients
    });
  }
}
