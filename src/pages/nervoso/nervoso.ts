import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import{N1} from './pages/n1';
import{N2} from './pages/n2';
import{N3} from './pages/n3';
import{N4} from './pages/n4';
import{N5} from './pages/n5';
import{N6} from './pages/n6';

/*
  Generated class for the Nervoso page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-nervoso',
  templateUrl: 'nervoso.html'
})
export class Nervoso {

  constructor(public navCtrl: NavController) {}
  um(){
    this.navCtrl.push(N1)
  }

  dois(){
    this.navCtrl.push(N2)
  }

  tres(){
    this.navCtrl.push(N3)
  }

  quatro(){
    this.navCtrl.push(N4)
  }

  cinco(){
    this.navCtrl.push(N5)
  }

  seis(){
    this.navCtrl.push(N6)
  }


}
