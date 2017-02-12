import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Cardio page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'o9.html'
})
export class O9 {
  table: Array<Array<string> >;
  constructor(public navCtrl: NavController) {
  	this.populateTable();
  }
  populateTable(){
  	this.table = [
  		["Tipos de manobra", "Avaliação", "Descrição",],

  		[
  		"<b>Manobra de Jobe</b>", 
  		`Paciente com lesão do manguito rotador
	     queixa-se de dor na região anterior do ombro`,
	     `Braço em abdução de 90º graus rotaclo
	      internamente e antebraço pronado com
	      polegar para baixo. O examinador força o
	      movimento de descida dos braços contra
	      resistência do paciente.`
	      ],
	    [
	      `<b>Manobra de Yergason</b>`,
	      `Paciente com tendinite da cabeça longa do
	        bíceps apresenta dor na região anterior do
	        ombro`,
	        `Paciente com os cotovelos em flexão de 90º o
	        examinador provoca uma supinação forçada
	        contra resistência`
	    ],
	    [
	    	`<b>Arco doloroso de Simmonds</b>`,
	    	`Avalia os processos inflamatórios que afetam o
	          tendão do músculo supra-espinhal e as bolsas
	          sinoviais do ombro`,
	    	`A manobra consiste na elevação ativa do
	        ombro no plano da escápula com o membro
	        em rotação medial.A resposta e' positiva
	        quando há dor entre 70º e 120º`
	    ],
	    [
	    	`<b>Manobra de Yokum</b>`,
	    	`Avalia tanto a artrose acrômio-clavicular como
	        tendinopatia do supraespinhoso`,
	    	`O paciente apoia a mão no ombro
	        contralateral, enquanto passivamente eleva-se
	        o membro pelo cotovelo.`
	    ],
	    [
	    	`<b>Manobra de Tinnel</b>`,
	    	`Sindrome do Túnel do Carpo`,
	    	`Realiza-se a percussão da região ventral do
	        punho, quando positivo o paciente refere dor
	        e parestesia sendo transmitida ao território de
	        inervação do nervo mediano.`
	    ],
	    [
	    	`<b>Manobra de Phalen</b>`,
	    	`Síndrome do Túnel do Carpo`,
	    	`Reprodução de parestesia do primeiro até
	          metade do quarto quirodáctilo mediante a
	          flexão máxima do punho e a sua manutenção
	          pelo período de 1 minuto.`
	    ],
	    [
	    	`<b>Manobra de Finkelstein</b>`,
	    	`Tendinite de Quervain`,
	    	`Paciente com a mão fechada e o polegar
	        aduzido e fletido, realiza um desvio ulnar
	        apresenta dor na face lateral da mão e do
	        punho.`
	    ]
  	];
  }

}