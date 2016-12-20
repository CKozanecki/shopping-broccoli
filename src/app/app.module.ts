import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import {DropdownDirective} from "./dropdown.directive";
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {RecipeService} from "./recipes/recipe.service";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {AppRouting} from "./app.routing";
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRouting,
    ShoppingListModule
  ],
  providers: [RecipeService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
