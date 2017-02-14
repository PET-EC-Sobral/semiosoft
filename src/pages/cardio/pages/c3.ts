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
      <ion-title>Ausculta</ion-title>
    </ion-navbar>

  </ion-header>


  <ion-content padding>
  <div  class="image-left embed-video">
        <div class="videoWrapper">
            <iframe width="100%" height="140%" src="https://www.youtube.com/embed/Fz8UeB4pLwU" frameborder="0" allowfullscreen></iframe>
        </div>
  </div>


  <h2>Ausculta</h2>

  <h5>Focos de ausculta:</h5>
<p>
  <b>Foco Aórtico</b> (valva aórtica): segundo espaço intercostal na linha paraesternal direita.<br/><br/>

  <b>Foco Pulmonar</b> (valva pulmonar): segundo espaço intercostal na linha paraesternal esquerda.<br/><br/>

  <b>Foco aórtico acessório</b> (melhor local para ausculta da Insuficiência Aórtica): terceiro espaço intercostal na linha paraesternal esquerda.<br/><br/>

  <b>Foco tricúspide</b> (valva tricúspide): borda esternal esquerda inferior<br/><br/>

  <b>Foco mitral</b> (valva mitral): quinto espaço intercostal na linha hemiclavicular esquerda.<br/><br/>

</p>

  <h5>Metodologia do exame</h5>
<p>
  O examinador deve-se perguntar:
  <ol>
  <li>O ritmo é regular ? </li>
  <li>Como estão as Bulhas ? Hiper ou Hipofonéticas ? Desdobradas ? Apresenta B3 ou B4 ?</li>
  <li>Como está a sístole ? Tem Sopro ? Click ? Atrito ?</li>
  <li>Como está a diástole ? Tem Sopro ? Estalido ? Atrito ?</li>
</ol>
<p>

  <h5>Doenças relacionadas e alterações:</h5>
<p>
  Estenose Aórtica: Sopro Sistólico
  <br/>Insuficiência Aórtica: Sopro Diastólico
  <br/>Estenose Pulmonar: Sopro Sistólico
  <br/>Insuficiência Pulmonar Sopro Diastólico
  <br/>Estenose Mitral: Sopro Diastólico
  <br/>Estenose Tricúspide: Sopro Diastólico
  <br/>Insuficiência Tricúspide: Sopro Sistólico
</p>

  </ion-content>
`
})
export class C3 {

  constructor(public navCtrl: NavController) {}


}
