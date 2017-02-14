import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Cardio page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'r2.html',
})

export class R2 {
  legendA: Array<string>;
  legendB: Array<string>;
  legendC: Array<string>;
  inspectionList: Array<string>;

  constructor(public navCtrl: NavController) {
    this.populateLegends();

    this.inspectionList = [
      "Frequência respiratória (bradipneia: <16 irpm; taquipneia: > 25 irpm)",
      "Uso de musculatura acessória",
      "Tiragem intercostal",
      "Padrões respiratórios (Biot, Cheyne-Stoke e Kussmaul)"
    ];
  }

  populateLegends(){
    this.legendA = [
      "Região Supraclavicular", "Região Clavicular", "Região Infraclavicular",
      "Região Mamária", "Região Inframamária", "Região Supraesternal",
      "Região Esternal Superior", "Região Esternal Inferior"      
    ];

    this.legendB = [
      "Região Supraescapular", "Região Supraespinhosa",
      "Região Infraespinhosa", "Região Interescapulovertebral",
      "Região Infraescapular"
    ];

    this.legendC = [
      "Região Axilar", "Região Infraxilar"
    ];
  }
}
