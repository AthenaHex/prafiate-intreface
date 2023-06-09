import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { FormPageComponent } from './form-page/form-page.component';
import { AccueilPageComponent } from './accueil-page/accueil-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BurgerMenuComponent,
    FormPageComponent,
    AccueilPageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
