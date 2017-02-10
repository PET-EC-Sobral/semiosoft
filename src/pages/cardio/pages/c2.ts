import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Cardio page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({

  template:

  `<ion-header>

    <ion-navbar color="primary">
      <ion-title>Percussão</ion-title>
    </ion-navbar>

  </ion-header>


  <ion-content padding>

    <div  class="image-left embed-video">
          <div class="videoWrapper">
              <iframe width="100%" height="140%" src="https://www.youtube.com/embed/cZEJpwohVDE" frameborder="0" allowfullscreen></iframe>
          </div>
    </div>



  </ion-content>
`
})
export class C2 {

  constructor(public navCtrl: NavController) {}


}
