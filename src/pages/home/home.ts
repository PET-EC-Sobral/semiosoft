import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import{Nervoso} from '../nervoso/nervoso';
import{Cardio} from '../cardio/cardio';
import{Respi} from '../respi/respi';
import{Osteo} from '../osteo/osteo';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
image ="../../assets/main.png";
  constructor(public navCtrl: NavController) {

  }

ner(){

  this.navCtrl.push(Nervoso)
}

car(){
  this.navCtrl.push(Cardio)
}

res(){
  this.navCtrl.push(Respi)
}

os(){
  this.navCtrl.push(Osteo)
}



}
