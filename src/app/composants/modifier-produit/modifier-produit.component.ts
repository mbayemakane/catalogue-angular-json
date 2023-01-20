import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.css']
})
export class ModifierProduitComponent implements OnInit {

  produitId:number;
  produitFormGroup!:FormGroup;

  constructor( private activatedRoute:ActivatedRoute, private produitsService:ProduitsService, private fb:FormBuilder) {
    this.produitId=activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.produitsService.getProduits(this.produitId).subscribe(produit=>{
      this.produitFormGroup=this.fb.group({
        id:[produit.id, Validators.required],
        designation:[produit.designation, Validators.required],
        prix:[produit.prix, Validators.required],
        quantite:[produit.quantite, Validators.required],
        selected:[produit.selected, Validators.required],
        available:[produit.available, Validators.required]

      })
    });
  }

  onEditProduit(){
    this.produitsService.getEditProduits(this.produitFormGroup.value).subscribe(data=>{
      alert("Le produit est modifier avec succè");
    })
  }

}
