import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ToastController} from 'ionic-angular';

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
  constructor(private toastCtrl: ToastController,public navCtrl: NavController) {
      this.presentToast();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Click nos ícones para ver o conteúdo.',
      duration: 4000,
      position: 'middle',
      showCloseButton: true,
      closeButtonText: 'OK'
    });


    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
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
