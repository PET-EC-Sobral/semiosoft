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
<p>  O exame da função sensitiva é parte essencial do exame neurológico, pois permite somente com esse recurso localizar lesões que podem indicar padrões de doenças específicas (p. ex., polineuropatias com padrão “bota e luva”). Para isso é essencial que o examinador conheça os dermátomos.
</p>

  <p>Existem dois tipos de sensibilidade a serem avaliados no exame neurológico:<p>
<ul>
<li>Superficial</li>
<li>Profunda</li>
</ul>
<ul>
<li>Sensibilidade superficial é transmitida pelo trato espino-talâmico lateral)</li>
<ul>
<li>Dor</li>
<ul>
<li>Por meio de um alfinete ou outro instrumento pontiagudo</li>
</ul>
<li>Temperatura</li>
<ul>
<li>Preencher um tubo de ensaio com água quente/fria e tocando-o nos diversos dermátomos.</li>
</ul>
<li>Tato leve</li>
<ul>
<li>Toque leve do algodão ou por meio de um instrumento especial chamado estesiômetro</li>
</ul>
</ul>
<li>Sensibilidade profunda permite avaliar a propriocepção consciente a qual é transmitida por meio do funículo posterior da medula (fascículos grácil e cuneiforme)</li>
<ul>
<li>Vibração (palestesia):</li>
<ul>
<li>Tocar o diapasão nas proeminências ósseas intercalando momentos de vibração com não-vibração</li>
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
