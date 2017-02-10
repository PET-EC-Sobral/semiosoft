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
      <ion-title>Motricidade e Reflexos</ion-title>
    </ion-navbar>

  </ion-header>


  <ion-content padding>

  <div class="image-left embed-video">
        <div class="videoWrapper">
            <iframe width="100%" height="110%" src="https://www.youtube.com/embed/wCm5wfOFsMs" frameborder="0" allowfullscreen></iframe>
        </div>
  </div>
<h2>Exame de Motricidade e Reflexos</h2>
  <h5> Principais Reflexos </h5>

<ul>
  <li>Reflexo Biciptal: Nervo Musculocutâneo, C5-C6</li>
  <li>Reflexo Triciptal: Nervo Radial, C7</li>
  <li>Reflexo Estilorradial ou Supinador: Nervo Radial, C5-C6</li>
  <li>Reflexo Patelar: Nervo femoral, L2-L4</li>
  <li>Reflexo Aquileu: Nervo isquiático e tibial, S1</li>
  <li>Reflexo Cutâneo-Plantar: Nervo isquiático e tibial, S1</li>
  <li>Reflexo dos flexores dos dedos/Sinal de Hoffmann: Nervos mediano e ulnar, C8-T1</li>
</ul>

<h5> Principais Dermátomos</h5>

<table style="width: 80%; text-aling:center; margin-left: auto; margin-right: auto;" border="1" cellspacing="0"><colgroup span="2" width="85"></colgroup>
<tbody>
<tr>
<td align="left" height="17">Localização</td>
<td align="center">Dermátomo</td>
</tr>

<tr>
<td align="left" height="17">Ombro</td>
<td align="center">C4</td>
</tr>
<tr>
<td align="left" height="17">Dedo m&eacute;dio</td>
<td align="center">C7</td>
</tr>
<tr>
<td align="left" height="17">Mamilo</td>
<td align="center">T4</td>
</tr>
<tr>
<td align="left" height="17">Umbigo</td>
<td align="center">T10</td>
</tr>
<tr>
<td align="left" height="17">Raiz da coxa</td>
<td align="center">L1</td>
</tr>
<tr>
<td align="left" height="17">Joelho medial</td>
<td align="center">L3</td>
</tr>
<tr>
<td align="left" height="17">H&aacute;lux</td>
<td align="center">L5</td>
</tr>
<tr>
<td align="left" height="17">Fossa popl&iacute;tea</td>
<td align="center">S2</td>
</tr>
<tr>
<td align="left" height="17">Regi&atilde;o perianal</td>
<td align="center">S4-S5</td>
</tr>
</tbody>
</table>

<h2>Exame Neurológico da Coordenação Motora</h2>

<p>A função da coordenação motoro está atribuída à integralidade do cerebelo, e sua avaliação permite definir a presença de lesões nos hemisférios cerebelares e no vérmis (central) cerebelar.</p>

<ul>
<li>Hemisférios cerebelares</li>
<ul>
<li>Coordenação no Espaço à Metria</li>
<ul>
<li>Teste do índex-nariz (MMSS)</li>
<li>Teste do índex-índex (MMSS)</li>
<li>Teste tornozelo-joelho-tíbia (MMII)</li>
</ul>
<li>Coordenação no Tempo à Diadococinesia
<li>Movimentos alternados rápidos
<li>Alterações (dismetrias ou disdiadococinesia) estão associadas a lesões IPSILATERAIS no cerebelo!
</ul>
<li>Vermis cerebelar:</li>
<ul>
<li>Estabilidade postural</li>
<li>Ortostase e marcha</li>
<ul>
<li>Lesões podem causar:</li>
<ul>
<li>Marcha atáxica (ataxia cerebelar à marcha ebriosa), independente da visão</li>
<li>Tremor cefálico</li>
<li>Base alargada</li>
<li>Dança dos tendões (paciente em ortostase)</li>
<li>Nistagmo</li>
</ul>
</ul>
</ul>
<li>Romberg negativo</li>

</ul>

<h2>Exame Neurológico da Motricidade</h2>

<p>Volume, tônus e força muscular são os componentes a serem avaliados quanto à função motora:</p>

Volume muscular:
Avalia-se através de:
Inspeção
Fita métrica
Hipertrofia
Nenhuma enfermidade causa hipertrofia, mas pode ocorrer uma “Hipertrofia relativa” – Miopatias causam atrofia proximal, provocando a impressão de que há uma hipertrofia na região distal!
Atrofia

Tônus muscular:
Avalia-se através de:
Movimentação passiva
Hipertonia – aumento do tônus:
Elástica (espástica) à Sinal do canivete (Sd. Piramidal)
Plástica à Sinal da roda denteada (Sd. de Parkinson)
Hipotonia – diminuição do tônus
Flácida à (Sd. 2º neurônio motor)

Força muscular:
Avalia-se através da:
Movimentação ativa (contra gravidade e contra resistência)
Manobras: ( manter os membros na posição por 2 min)
Mingazzini: O paciente é posto em decúbito dorsal, com as coxas e as pernas fletidas em 90º. O teste será positivo se o paciente não conseguir manter a posição, cair ou oscilar. Na perna o déficit é do quadríceps e na coxa o déficit é do psoas

Barret: semelhante à anterior, mas o paciente é mantido em decúbito ventral
Manobra dos braços estendidos: paciente é mantido com os braços estendidos

  </ion-content>
`
})
export class N3 {

  constructor(public navCtrl: NavController) {}


}
