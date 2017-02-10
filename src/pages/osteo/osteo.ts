import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import{O1} from './pages/o1';
import{O2} from './pages/o2';
import{O3} from './pages/o3';
import{O4} from './pages/o4';
import{O5} from './pages/o5';
import{O6} from './pages/o6';
import{O7} from './pages/o7';
import{O8} from './pages/o8';
import{O9} from './pages/o9';
/*
  Generated class for the Osteo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-osteo',
  templateUrl: 'osteo.html'
})
export class Osteo {

  constructor(public navCtrl: NavController) {}

  um(){
    this.navCtrl.push(O1)
  }

  dois(){
    this.navCtrl.push(O2)
  }

  tres(){
    this.navCtrl.push(O3)
  }

  quatro(){
    this.navCtrl.push(O4)
  }

  cinco(){
    this.navCtrl.push(O5)
  }

  seis(){
    this.navCtrl.push(O6)
  }

  sete(){
    this.navCtrl.push(O7)
  }
  oito(){
    this.navCtrl.push(O8)
  }
  nove(){
    this.navCtrl.push(O9)
  }


}
