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
      <ion-title>Coordenação e Marcha</ion-title>
    </ion-navbar>

  </ion-header>


  <ion-content padding>
  <div class="image-left embed-video">
        <div class="videoWrapper">
            <iframe width="100%" height="110%" src="https://www.youtube.com/embed/Li4btqRlsuo" frameborder="0" allowfullscreen></iframe>
        </div>
  </div>
<br/>
  <table style="width: 100%; font-size:90%; text-aling:center !important;" border="1" cellspacing="0">
  	<tbody>
  		<tr style="height: 23px;">
  			<td style="height: 23px;">Tipos de marcha&nbsp;</td>
  			<td style="height: 23px;">&nbsp;Descri&ccedil;&atilde;o</td>
  			<td style="height: 23px;">&nbsp;Causas</td>
  		</tr>
  		<tr style="height: 23px; ">
  			<td style="height: 23px; text-align: center;">&nbsp;Marcha escarvante "steppage"</td>
  			<td style="height: 23px;">
  				<p>Acrescenta o p&eacute; ca&iacute;do por fraqueza ou paralisia na musculatura respons&aacute;vel pela dorsiflex&atilde;o do p&eacute;;</p>
  				<p>Eleva&ccedil;&atilde;o exagerada do p&eacute; afetado;</p>
  				<p>Maior flex&atilde;o do quadril e do joelho;</p>
  			</td>
  			<td style="height: 23px;">
  				<p style="text-align: center;">Les&atilde;o no nervo fibular comum</p>
  				<p style="text-align: center;">Radiculopatia lombossacra</p>
  				<p style="text-align: center;">Polineuropatias</p>
  				<p style="text-align: center;">Les&otilde;es da cauda equina</p>
  			</td>
  		</tr>
  		<tr style="height: 23px;">
  			<td style="height: 23px;text-align: center;">Marcha parkinsoniana</td>
  			<td style="height: 23px;">
  				<p>Rigidez, bradicinesia e falta de movimentos associados</p>
  				<p>Locomove-se em passos curtos e r&aacute;pidos</p>
  				<p>Movimenta-se em bloco e com o corpo inclinado pra frente</p>
  			</td>
  			<td style="height: 23px;text-align: center;">&nbsp;Doen&ccedil;a de Parkinson</td>
  		</tr>
  		<tr style="height: 23px;">
  			<td style="height: 23px;text-align: center;">Marcha anserina</td>
  			<td style="height: 23px;">
  				<p>Rota&ccedil;&atilde;o exagerada da pelve</p>
  				<p>Acentua&ccedil;&atilde;o da lordose lombar</p>
  			</td>
  			<td style="height: 23px;text-align: center;">Miopatias e distrofias musculares</td>
  		</tr>
  		<tr style="height: 23px;">
  			<td style="height: 23px;text-align: center;">Marcha esp&aacute;stica hemipar&eacute;tica</td>
  			<td style="height: 23px;">
  				<p>&nbsp;Paresia na flex&atilde;o com acentua&ccedil;&atilde;o na extens&atilde;o</p>
  				<p>Arrasta p&eacute;s e dedos no ch&atilde;o</p>
  				<p>Movimentos de circunda&ccedil;&atilde;o: pelve &eacute; colcoada para cima e a perna para fora, formando um semic&iacute;rculo</p>
  			</td>
  			<td style="height: 23px;text-align: center;">Les&atilde;o do neur&ocirc;nio motor superior</td>
  		</tr>
  		<tr style="height: 23px;">
  			<td style="height: 23px;text-align: center;">&nbsp;Marcha ceifante ou hemipl&eacute;gica</td>
  			<td style="height: 23px;">
  				<p>Membro superior fletido em 90&ordm; com a m&atilde;o fechada em leve prona&ccedil;&atilde;o</p>
  				<p>O membro inferior do mesmo lado &eacute; esp&aacute;stico e o joelho n&atilde;o flexiona</p>
  				<p>A perna arrasta descrevendo um semic&iacute;rculo</p>
  			</td>
  			<td style="height: 23px;">
  				<p style="text-align: center;">AVE</p>
  			</td>
  		</tr>
  		<tr style="height: 23px;">
  			<td style="height: 23px;text-align: center;">&nbsp;Marcha at&aacute;xica frontal</td>
  			<td style="height: 23px;">
  				<p style="text-align: center;">Dificuldade em iniciar e finalizar a marcha</p>
  				<p style="text-align: center;">Flex&atilde;o do tronco e da cabe&ccedil;a</p>
  				<p style="text-align: center;">Desequil&iacute;brio com a mudan&ccedil;a de dire&ccedil;&atilde;o</p>
  				<p style="text-align: center;">P&eacute;s colados ao ch&atilde;o em pequenos passos</p>
  			</td>
  			<td style="height: 23px;text-align: center;">
  				<p>Infartos subcorticais frontais m&uacute;ltiplos</p>
  				<p>Tumores frontais</p>
  				<p>Hematomas subdurais</p>
  			</td>
  		</tr>
  		<tr style="height: 23px;">
  			<td style="height: 23px;text-align: center;">Marcha at&aacute;xica vestibular</td>
  			<td style="height: 23px;">
  				<p>Apresenta desvios na dire&ccedil;&atilde;o da marcha com os olhos fechados</p>
  				<p>Sinal de Romberg</p>
  				<p>Tend&ecirc;ncia &agrave; lateriza&ccedil;&atilde;o da queda</p>
  			</td>
  			<td style="height: 23px;text-align: center;">Les&otilde;es vestibulares</td>
  		</tr>
  		<tr style="height: 23px;">
  			<td style="height: 23px;text-align: center;">Marcha at&aacute;xica sensitiva</td>
  			<td style="height: 23px;">
  				<p>Marcha talonante: apresenta base alargada, olhar fixo nos p&eacute;s e movimentos abruptos do calcanhar no ch&atilde;o</p>
  				<p>Sinal de Romberg</p>
  			</td>
  			<td style="height: 23px;text-align: center;">Perda de sensibilidade proprioceptiva por les&atilde;o do cord&atilde;o posterior da medula (tabes dorsalis - neuross&iacute;filis)</td>
  		</tr>
  		<tr style="height: 23px;">
  			<td style="height: 23px;text-align: center;">Marcha at&aacute;xica cerebelar</td>
  			<td style="height: 23px;">Marcha ebriosa: inst&aacute;vel, cambaleante e oscilante;</td>
  			<td style="height: 23px;text-align: center;">Intoxica&ccedil;&atilde;o por etanol, infec&ccedil;&atilde;o, trauma, hemorragia cerebral.</td>
  		</tr>
  	</tbody>
  </table>
  <!-- DivTable.com -->
  <p>&nbsp;</p>


  </ion-content>
`
})
export class N4 {

  constructor(public navCtrl: NavController) {}


}
