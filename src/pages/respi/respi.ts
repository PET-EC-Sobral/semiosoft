import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import{R1} from './pages/r1';
import{R2} from './pages/r2';
import{R3} from './pages/r3';
import{R4} from './pages/r4';
import{R5} from './pages/r5';
/*
  Generated class for the Respi page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-respi',
  templateUrl: 'respi.html'
})
export class Respi {

  constructor(public navCtrl: NavController) {}

  um(){
    this.navCtrl.push(R1)
  }

  dois(){
    this.navCtrl.push(R2)
  }

  tres(){
    this.navCtrl.push(R3)
  }

  quatro(){
    this.navCtrl.push(R4)
  }

  cinco(){
    this.navCtrl.push(R5)
  }

}
