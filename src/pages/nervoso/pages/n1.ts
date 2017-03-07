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
      <ion-title>Exame Neurológico</ion-title>
    </ion-navbar>

  </ion-header>


  <ion-content padding>

  <div class="image-left embed-video">
        <div class="videoWrapper">
            <iframe width="100%" height="110%" src="https://www.youtube.com/embed/tD_pg6oen-M" frameborder="0" allowfullscreen></iframe>
        </div>
  </div>

<p>
O Exame Neurológico tido por muitos como um exame sofisticado e sobretudo extenso, muitas vezes é renegado pelos médicos e estudantes de medicina. No entanto,
 praticá-lo rotineiramente e de forma objetiva pode tornar a semiologia neurológica uma ferramenta clínica fundamental, podendo antecipar os resultados de exames complementares,
 acompanhar a evolução clínica do paciente ou até mesmo fornecer o diagnóstico apenas com a semiotécnica. Em função disso, ressaltamos a importância do conhecimento da semiologia
  neurológica e a apresentamos de forma sucinta nos seguintes vídeos e resumos.

</p>



  </ion-content>
`
})
export class N1 {

  constructor(public navCtrl: NavController) {}


}
