import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {

  produitFormGroup!:FormGroup;
  //submitted:boolean=false;

  constructor(private fb:FormBuilder, private produitsService:ProduitsService){
  }
  ngOnInit(): void {
    this.produitFormGroup=this.fb.group({
      designation: [" ", Validators.required],
      prix: [0, Validators.required],
      quantite: [0, Validators.required],
      selected: [true, Validators.required],
      available: [true, Validators.required]
    });
  }

  onSaveProduit(){
    //this.submitted=true;
    //if(this.produitFormGroup.invalid) return;
    this.produitsService.saveProduit(this.produitFormGroup.value).subscribe(data=>{
      alert("Enregistrement réussi");
    });
  }

}
