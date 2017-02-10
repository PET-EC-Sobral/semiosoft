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
      <ion-title>Estado Mental</ion-title>
    </ion-navbar>

  </ion-header>


  <ion-content padding>

  <div class="image-left embed-video">
        <div class="videoWrapper">
            <iframe width="100%" height="110%" src="https://www.youtube.com/embed/WBVjpjl_ClA" frameborder="0" allowfullscreen></iframe>
        </div>
  </div>
<h2>Exame do Estado Mental</h2>
  <h5> Mini Exame do Estado Mental (MEEM) </h5>
<p> Teste de rastreamento e avaliação rápida da função cognitiva. Apesar de avaliar vários domínios (orientação espacial, temporal, memória imediata e de evocação, cálculo, linguagem-nomeação, repetição, compreensão, escrita e cópia de desenho), não serve como teste diagnóstico, mas indica funções que precisam ser investigadas. Está validado e adaptado para a população brasileira.
 </p>

<a style="text-decoration: none; font-size:125%;" href="http://www.pet.ec.ufc.br/files_semiosoft/MEEM.pdf" download> Baixe o arquivo do MEEM </a>

<h5>Avaliação do escore obtido:</h5>
​
Pontos de corte – MEEM.  Brucki et al. (2003)
<br/>20 pontos para analfabetos
<br/>25 pontos para idosos com um a quatro anos de estudo
<br/>26,5 pontos para idosos com cinco a oito anos de estudo
<br/>28 pontos para aqueles com 9 a 11 anos de estudo
<br/>29 pontos para aqueles com mais de 11 anos de estudo.

  </ion-content>
`
})
export class N2 {

  constructor(public navCtrl: NavController) {}


}
