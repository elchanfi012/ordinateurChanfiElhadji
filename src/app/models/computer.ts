export class Computer {
    id: number;
    modele: string;
    marque: string;
    type: string;
    categorie: string;
    prixAchat: number;
    prixVente: number;
    dateEntryStock: Date
    constructor(id=null, modele=null, marque=null, type=null, categorie=null, prixAchat=null, prixVente=null, dateEntryStock=null) {
      this.id = id;
      this.modele = modele;
      this.marque = marque;
      this.type = type;
      this.categorie = categorie;
      this.prixAchat = prixAchat;
      this.prixVente = prixVente;
      this.dateEntryStock = dateEntryStock;
    }
}
