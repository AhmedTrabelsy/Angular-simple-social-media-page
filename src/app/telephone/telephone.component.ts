import { Component } from '@angular/core';

@Component({
  selector: 'app-telephone',
  templateUrl: './telephone.component.html',
  styleUrls: ['./telephone.component.scss']
})
export class TelephoneComponent {
  alertDetails() {
    alert(`Téléphone ${this.telephone.marque} au prix de ${this.telephone.prix}`)
  }
  telephone = {
    marque: "Iphone",
    modele: "15",
    photo: "assets/iphone15.jpg",
    prix: 5299
  };
}
