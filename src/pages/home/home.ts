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
image ="https://static.wixstatic.com/media/4f3b96f7b0f24fb5baa5997e60b27736.png/v1/crop/x_212,y_34,w_177,h_515/fill/w_177,h_515,al_c/4f3b96f7b0f24fb5baa5997e60b27736.png";
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
