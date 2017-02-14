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
      <ion-title>Sistema Sensitivo</ion-title>
    </ion-navbar>

  </ion-header>


  <ion-content padding>
  <div class="image-left embed-video">
        <div class="videoWrapper">
            <iframe width="100%" height="110%" src="https://www.youtube.com/embed/Bw4_87jSX6s" frameborder="0" allowfullscreen></iframe>
        </div>
  </div>

  <p>Existem dois tipos de sensibilidade a serem avaliados no exame neurológico:<p>
<ul>
<li>Superficial</li>
<li>Profunda</li>
<li>Sensibilidade superficial (transmitida pelo trato espino-talâmico lateral)</li>
<ul>
<li>Dor</li>
<ul>
<li>Alfinete ou outro instrumento pontiagudo</li>
</ul>
<li>Temperatura</li>
<ul>
<li>Tubo de ensaio com água quente/fria</li>
</ul>
<li>Tato leve</li>
<ul>
<li>Algodão, estesiômetro</li>
</ul>
</ul>
<li>Sensibilidade profunda (propriocepção consciente) à Transmitida através do funículo posterior da medula (fascículos grácil e cuneiforme)</li>
<ul>
<li>Vibração (palestesia):</li>
<ul>
<li>Diapasão nas proeminências ósseas</li>
</ul>
<ul>
<li>Posição (cinético-postural):</li>
<li>Mover articulações e questionar a posição ao paciente (“para cima ou para baixo?”)</li>
<li>Romberg (A alteração da sensibilidade cinético-postural leva a uma ataxia sensitiva, mas o paciente compensa o desequilíbrio com a visão. Ao fechar os olhos, essa compensação é perdida e o paciente cai, sem preferência de lado)</li>
</ul>
</ul>
</ul>
  </ion-content>
`
})
export class N5 {

  constructor(public navCtrl: NavController) {}


}
