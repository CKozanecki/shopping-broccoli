import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {ShoppingListAddComponent} from "./shopping-list-add.component";
import {ShoppingListComponent} from "./shopping-list.component";
import {ShoppingListRouting} from "./shopping-list.routing";

@NgModule({
  declarations: [ ShoppingListComponent, ShoppingListAddComponent ],
  imports: [ FormsModule, CommonModule, ShoppingListRouting]
})
export class ShoppingListModule{}
