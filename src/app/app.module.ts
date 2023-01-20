import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './composants/nav-bar/nav-bar.component';
import { ProduitsComponent } from './composants/produits/produits.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjoutProduitComponent } from './composants/ajout-produit/ajout-produit.component';
import { NgClass } from '@angular/common';
import { ModifierProduitComponent } from './composants/modifier-produit/modifier-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProduitsComponent,
    AccueilComponent,
    AjoutProduitComponent,
    ModifierProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgClass,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
