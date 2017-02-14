import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{C1} from './pages/c1';
import{C2} from './pages/c2';
import{C3} from './pages/c3';


/*
  Generated class for the Cardio page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cardio',
  templateUrl: 'cardio.html'
})
export class Cardio {



  constructor(public navCtrl: NavController) {}

  um(){
    this.navCtrl.push(C1)
  }

  dois(){
    this.navCtrl.push(C2)
  }

  tres(){
    this.navCtrl.push(C3)
  }



}
