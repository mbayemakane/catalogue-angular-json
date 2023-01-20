//import {Injectable} from '@angular/core';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Produit } from '../models/produit.model';
import { Observable } from "rxjs";

@Injectable({providedIn:"root"})
export class ProduitsService {
  constructor(private http:HttpClient){
  }

  getAllProduits():Observable<Produit[]>{
  return this.http.get<Produit[]>("http://localhost:3000/produits");
  }

  getSelectedProduits():Observable<Produit[]>{
    return this.http.get<Produit[]>("http://localhost:3000/produits?selected=true");
  }

  getAvailableProduits():Observable<Produit[]>{
      return this.http.get<Produit[]>("http://localhost:3000/produits?available=true");
  }

  getSearchProduits(keyword:string):Observable<Produit[]>{
    return this.http.get<Produit[]>("http://localhost:3000/produits?designation_like="+keyword);
  } 

  select(produit:Produit):Observable<Produit>{
    produit.selected=!produit.selected;
    return this.http.put<Produit>("http://localhost:3000/produits/"+produit.id,produit);
  }

  deletProduits(produit:Produit):Observable<void>{
    produit.selected=!produit.selected;
    return this.http.delete<void>("http://localhost:3000/produits/"+produit.id);
  }

  saveProduit(produit:Produit):Observable<Produit>{
    return this.http.post<Produit>("http://localhost:3000/produits/",produit);
  }

  getProduits(id:number):Observable<Produit>{
    return this.http.get<Produit>("http://localhost:3000/produits/"+id);
  }

  getEditProduits(produit:Produit):Observable<Produit>{
    return this.http.put<Produit>("http://localhost:3000/produits/"+produit.id,produit);
  }

}
