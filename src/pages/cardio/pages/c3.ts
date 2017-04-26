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


  <h3>Ausculta</h3>

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

<h5>Bulhas cardíacas</h5>
<b>Primeira bulha (B1):</b> <p>Fechamento das valvas mitral e tricúspide. Coincide com o ictus cordis e com o pulso carotídeo. Representada pela onomatopeia TUM.</p>

<b>Segunda bulha (B2): </b> <p>Fechamento das valvas aórtica e pulmonar. O timbre é mais agudo e a duração é menor do que a primeira bulha. Representada pela onomatopeia TÁ.</p>

<b>Terceira Bulha (B3):</b> <p>Origina-se das vibrações da parede ventricular pela corrente sanguínea durante a fase de enchimento ventricular rápido.</p>

<b>Quarta bulha (B4):</b><p> Ruído débil que ocorre no fim da diástole. Causada pelo impacto do sangue, mobilizado pela contração atrial, na parede ventricular.</p>


  <h5>Doenças relacionadas e alterações:</h5>
<p>
  <br/>Estenose Aórtica: Sopro Sistólico
  <br/>Insuficiência Aórtica: Sopro Diastólico
  <br/>Estenose Pulmonar: Sopro Sistólico
  <br/>Insuficiência Pulmonar Sopro Diastólico
  <br/>Estenose Mitral: Sopro Diastólico
  <br/>Estenose Tricúspide: Sopro Diastólico
  <br/>Insuficiência Tricúspide: Sopro Sistólico
  <br/>Insuficiência mitral: Sopro sistólico
  <br/>Pericardite fibrinosa: Atrito pericárdico

</p>

    <h5>Manobras</h5>

  <b>Rivero-Carvallo:</b> Paciente em decúbito dorsal, pede-se que faça uma inspiração profunda, buscando identificar alguma modificação na intensidade do sopro. Se não houver alteração ou redução da intensidade do sopro, a manobra é negativa e a insuficiência é mitral. Caso haja alteração, a manobra é positiva e a insuficiência é tricúspide.


  </ion-content>
`
})
export class C3 {

  constructor(public navCtrl: NavController) {}


}
