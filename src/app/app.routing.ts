import {Routes} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RECIPE_ROUTES} from "./recipes/recipes.routes";

export const APP_ROUTES: Routes = [
  { path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTES},
  { path: 'shopping-list', component:ShoppingListComponent},
  { path: '', redirectTo: '/recipes', pathMatch:'full'}
];
