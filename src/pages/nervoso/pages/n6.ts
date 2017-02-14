import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Cardio page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
 selector: 'n6-page',
  template:

  `

  <ion-header>

    <ion-navbar color="primary">
      <ion-title>Nervos Cranianos</ion-title>
    </ion-navbar>

  </ion-header>


  <ion-content padding>
  <div class="image-left embed-video">
        <div class="videoWrapper">
            <iframe width="100%" height="110%" src="https://www.youtube.com/embed/2ge0IcIYr5Q" frameborder="0" allowfullscreen></iframe>
        </div>
  </div>
<br/>
  <table style="width: 100%; font-size:80%; text-aling:center;" border="1" cellspacing="0">
  	<tbody>
  		<tr>
  			<td >&nbsp;Nervo</td>
  			<td >Origem aparente</td>
  			<td >Territ&oacute;rio de inerva&ccedil;&atilde;o</td>
  		</tr>
  		<tr>
  			<td >Olfat&oacute;rio</td>
  			<td >Telenc&eacute;falo</td>
  			<td >&nbsp;Mucosa olfat&oacute;ria</td>
  		</tr>
  		<tr>
  			<td >&Oacute;ptico</td>
  			<td >Dienc&eacute;falo</td>
  			<td >Retina</td>
  		</tr>
  		<tr>
  			<td >Oculomotor</td>
  			<td >Mesenc&eacute;falo</td>
  			<td >
  				M&uacute;sculos elevador da p&aacute;lpebra superior, obl&iacute;quo inferior e retos superior, inferior e medial<br/>
  				M&uacute;sculo esf&iacute;ncter da pupila<br/>
  				M&uacute;sculo ciliar
  			</td>
  		</tr>
  		<tr>
  			<td >Troclear</td>
  			<td >Mesenc&eacute;falo</td>
  			<td >M&uacute;sculo obl&iacute;quo superior</td>
  		</tr>
  		<tr>
  			<td >Trig&ecirc;meo</td>
  			<td >Ponte</td>
  			<td >
  				Face e 2/3 anteriores da l&iacute;ngua (exterocep&ccedil;&atilde;o) e propriocep&ccedil;&atilde;o dos dentes, ATM e m&uacute;sculos da mastiga&ccedil;&atilde;o.<br/>
  				M&uacute;sculos da mastiga&ccedil;&atilde;o, miloio&iacute;deo, tensor do v&eacute;u do paladar, tensor do t&iacute;mpano e ventre anterior do dig&aacute;strico
  			</td>
  		</tr>
  		<tr>
  			<td >Abducente</td>
  			<td >Ponte</td>
  			<td >M&uacute;sculo reto lateral</td>
  		</tr>
  		<tr>
  			<td >Facial</td>
  			<td >Ponte</td>
  			<td >
  				2/3 anteriores da l&iacute;ngua (gusta&ccedil;&atilde;o)<br/>
  				Parte da mucosa da cavidade nasal e do palato mole<br/>
  				Parte do pavilh&atilde;o auricular e do meato ac&uacute;stico externo<br/>
  				Gl&acirc;ndula lacrimal<br/>
  				Gl&acirc;ndulas submandibular e sublingual<br/>
  				M&uacute;sculos da m&iacute;mica, estap&eacute;dio, estiloio&iacute;deo e ventre posterior do dig&aacute;strico
  			</td>
  		</tr>
  		<tr>
  			<td >Vestibulococlear</td>
  			<td >Ponte</td>
  			<td >
  				&Oacute;rg&atilde;o espiral<br/>
  				M&aacute;culas e cristas ampulares
  			</td>
  		</tr>
  		<tr>
  			<td >Glossofar&iacute;ngeo</td>
  			<td >Bulbo</td>
  			<td >
      Parte do pavilh&atilde;o auricular e do meato ac&uacute;stico externo<br/>
      1/3 posterior da l&iacute;ngua (gusta&ccedil;&atilde;o)<br/>
      1/3 posterior da l&iacute;ngua, faringe, &uacute;vula, tonsilas, tuba auditiva, seio e corpo carot&iacute;deos<br/>
      Gl&acirc;ndula par&oacute;tida<br/>
      M&uacute;sculo estilofar&iacute;ngico
  			</td>
  		</tr>
  		<tr>
  			<td >Vago</td>
  			<td >Bulbo</td>
  			<td >
  				Epiglote (gusta&ccedil;&atilde;o)<br/>
  				Faringe, laringe, traqueia, es&ocirc;fago e v&iacute;sceras tor&aacute;cicas e abdominais (andar supramesoc&oacute;lico e compartimento direito do andar inframesoc&oacute;lico)<br/>
  				Parte do pavih&atilde;o auricular e do meato ac&uacute;stico externo<br/>
  				M&uacute;sculos da faringe (exceto o estilofar&iacute;ngico) e da laringe
  			</td>
  		</tr>
  		<tr>
  			<td >Acess&oacute;rio</td>
  			<td >Bulbo
  			<td >
  				M&uacute;sculos da laringe<br/>
  				M&uacute;sculos trap&eacute;zio e estemocleidomast&oacute;ideo<br/>
  				V&iacute;sceras tor&aacute;cicas
  			</td>
  		</tr>
  		<tr>
  			<td >Hipoglosso</td>
  			<td >Bulbo</td>
  			<td > M&uacute;sculos intr&iacute;nsecos e extr&iacute;nsecos da l&iacute;ngua</td>
  		</tr>
  	</tbody>
  </table>
  <!-- DivTable.com -->
  <p>&nbsp;</p>


  </ion-content>
`
})
export class N6 {

  constructor(public navCtrl: NavController) {}


}
