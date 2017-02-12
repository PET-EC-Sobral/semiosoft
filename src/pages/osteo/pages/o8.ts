import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Cardio page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'o8.html'
})
export class O8 {
	table: Array<Array<string> >;

	constructor(public navCtrl: NavController) {
		this.populateTable();
	}

	populateTable(){
	  	this.table = [
	  		["Manobras", "Avaliação", "Descrição",],
	  		[
	  			`<b>Tinel</b>`,
	  			`Síndrome do Túnel do Tarso`,
	  			`Percussão na região posterior ao maléolo medial com
	  			reprodução de dor e parestesia para os primeiros pododáctilos`
	  		],
	  		[
	  			`<b>Thompson</b>`,
	  			`Integridade do tendão de Aquiles`,
	  			`Paciente em decúbito ventral na mesa de exames com os pés para fora. O examinador realiza a
		          compressão da panturrilha levando uma discreta flexão plantar.`
	  		]
	  	];
  }


}