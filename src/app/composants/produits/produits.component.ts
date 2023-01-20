import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../../services/produits.service';
import { catchError, map, Observable, of, startWith } from "rxjs";
import { Produit } from '../../models/produit.model';
import { AppDataState, DataStateEnum } from 'src/app/states/produit.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})

export class ProduitsComponent implements OnInit {
  produits$:Observable<AppDataState<Produit[]>>| null=null;
  readonly DataStateEnum=DataStateEnum;

  constructor(private produitsService:ProduitsService, private route:Router) {
  }
  ngOnInit():void {
  }

  onGetAllProduit(){
    this.produits$=this.produitsService.getAllProduits().pipe(
      map((data)=>({dataState:DataStateEnum.LOADED, data:data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }

  onGetSelectedProduit(){
    this.produits$=this.produitsService.getSelectedProduits().pipe(
      map((data)=>({dataState:DataStateEnum.LOADED, data:data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }

  onGetAvailableProduit(){
    this.produits$=this.produitsService.getAvailableProduits().pipe(
      map((data)=>({dataState:DataStateEnum.LOADED, data:data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }

  onGetSearch(dataForm:any){
    this.produits$=this.produitsService.getSearchProduits(dataForm.keyword).pipe(
      map((data)=>({dataState:DataStateEnum.LOADED, data:data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }

  onSelected(p:Produit){
    this.produitsService.select(p).subscribe(data=>{
      p.selected=data.selected;
    })
  }

  onDeletProduit(p:Produit){
    let confirmation=confirm("Etes vous sûre de vouloir supprimer?");
    if(confirmation==true)
    this.produitsService.deletProduits(p).subscribe(data=>{
      this.onGetAllProduit();
    })
  }

  onGetNewProduit(){
    this.route.navigateByUrl("/nouveauProduit");
  }
  onEditProduit(p:Produit){
    this.route.navigateByUrl("/modifierProduit/"+p.id);
  }

}
