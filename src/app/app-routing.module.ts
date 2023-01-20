import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProduitsComponent} from './composants/produits/produits.component';
import {AccueilComponent} from './composants/accueil/accueil.component';
import { AjoutProduitComponent } from './composants/ajout-produit/ajout-produit.component';
import { ModifierProduitComponent } from './composants/modifier-produit/modifier-produit.component';

const routes: Routes = [
  { path: "", component:AccueilComponent },
  { path: "produits", component:ProduitsComponent },
  { path: "nouveauProduit", component:AjoutProduitComponent },
  { path: "modifierProduit/:id", component:ModifierProduitComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
