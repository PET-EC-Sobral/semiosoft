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
<ul>
<li>I par - Nervo olfatório:</li>
<ol>
<li> Testa-se a olfação, isoladamente em cada narina (ocluindo a outra), usando aromas conhecidos, como café, tabaco e erva-doce</li>
<li> Alterações:</li>
<ul>
<li>Anosmia</li>
<li>Hiposmia</li>
<li>Parosmia</li>
</ul>
</ol>
<li>II par - Nervo óptico:</li>

 Quesitos a serem avaliados:
<ol>
<li>Acuidade visual:</li>
<ul>
<li >Testa a capacidade do paciente de enxergar: Mostra dedos e pergunta: “quantos dedos tem?”, por exemplo...</li>
<li > Tabela de Snellen</li>
</ul>

<li>Campo visual:</li>
<ul>
<li>Teste por confrontação – Paciente e examinador ficam a distância de 1m e então compara-se a visão do examinador com a do examinado, nos quatro quadrantes, com os braços estendidos a meia distância entre eles!</li>
</ul>
<li>Fundoscopia:</li>
<ul>
<li> Avaliar a presença de edema de papila (sugestivo de hipertensão intracraniana)</li>
</ul>
<li>Reflexos pupilares (aferência pelo II par):</li>
<ul>
<li> Reflexo fotomotor:</li>
<ul>
<li>- Direto</li>
<li>- Consensual</li>
</ul>

<li> Reflexo de convergência e acomodação das pupilas</li>
</ul>
</ol>
<li>III par - Oculomotor:</li>
<ul>
<li>EFERÊNCIA dos reflexos pupilares (aferência pelo II par)</li>
<li>Motricidade extrínseca do globo ocular (juntamente com o IV e VI pares cranianos):</li>
<ul>
<li>Inerva o reto medial, reto superior, reto inferior e oblíquo inferior (reto lateral e oblíquo superior são inervados pelo abducente e troclear, respectivamente)</li>
</ul>
<li>Elevação da pálpebra superior</li>
<ul>

<li>Síndrome do III par (lesão completa do Oculomotor):</li>
<ul>
<li>Midríase</li>
<li>Estrabismo divergente e diplopia</li>
<li>Ptose palpebral</li>
</ul>
</ul>
</ul>
<li>IV par - Nervo troclear:</li>
<ul>
<li>Motricidade extrínseca do globo ocular  Inerva o oblíquo superior (“olhar para a ponta do nariz”)</li>
</ul>
<li>V par - Trigêmeo:</li>
<ul>
<li>Principal nervo sensitivo da face</li>
<li>Não é exclusivamente sensitivo (possui a função motora da mastigação)</li>
<li>Aferência do reflexo córneo-palpebral (eferência pelo VII par): testa-se com um chumaço de algodão encostando na córnea do paciente, provocando o piscar)</li>
<li>Tem três ramificações (devem ser testadas uma a uma):</li>
<ul>
<li>Ramo oftálmico</li>
<li>Ramo maxilar</li>
<li>Ramo mandibular</li>
</ul>
</ul>
<li>VI par - Nervo abducente:</li>
<ul>
<li>Motricidade ocular extrínseca  Inerva reto lateral (responsável pelo movimento de abdução)</li>
</ul>
<li>VII par - Nervo facial:</li>
<ul>
<li>Mímica facial</li>
<li>Não é unicamente motor possui também função sensitiva: Gustação nos 2/3 anteriores da língua</li>
</ul>
<li>VIII par - Nervo vestíbulo-coclear: possui o componente vestibular e o componente coclear</li>
<ul>
<li>Nervo vestibular - Função do equilíbrio (noção da posição da cabeça no espaço)</li>
<ul>
<li>Avaliar a presença de nistagmo espontâneo</li>
<li>Nistagmo provocado (provas calóricas sob o conduto auditivo ou rotatórias principalmente da posição da cabeça do paciente), com o objetivo de avaliar a interação entre o labirinto e o movimento ocular!</li>
</ul>
<li>Nervo coclear - Audição (acuidade auditiva)</li>
<ul>
<li>Estímulos sonoros junto ao ouvido externo com oclusão do lado não examinado</li>
<li>Teste de Rinne: aplica-se o diapasão na região mastoide. Quando o paciente deixa de ouvir a vibração, coloca-se o aparelho próximo ao conduto auditivo. Em condições normais, o paciente acusa a percepção do som (Rinne positivo). Transmissão óssea mais prolongada que a aérea (Rinne negativo) significa deficiência auditiva de condução.</li>
<li>Teste de Weber: o diapasão é batido e o tronco do bastão é colocado no topo do crânio do paciente - em igual distância das orelhas do paciente. O paciente então é questionado a dizer em qual orelha o som é escutado com mais intensidade.</li>
</ul>
</ul>
<li>IX e X par - Glossofaríngeo e Vago:</li>
<ul>
<li>São explorados juntos porque, com frequência, inervam as mesmas regiões</li>

<li>Glossofaríngeo:</li>
<ul>
<li>Função sensitiva da faringe e gustação no terço posterior da língua</li>
</ul>
<li>Vago:</li>
<ul>
<li>Nervo essencialmente motor (visceral) responsável principalmente pela deglutição e fonação</li>
<li>Pesquisar disfonias, disfagias, disartrias...</li>
<li>Avaliar qualidade da voz (rouquidão?)</li>
<li>Elevação do palato (assimetria?): “Diga Ahhh!”</li>
<li>Lesão unilateral no nervo vago  lado lesado fica baixo e lado bom sobe = “sinal da cortina de Vernet”</li>
<li>Desvio da úvula para lado oposto</li>
</ul>
<li>Reflexo Nauseoso ou reflexo do vômito (testa os dois)</li>
<ul>
<li>Aferência pelo glossofaríngeo (IX) e eferência pelo Vago (X)</li>
</ul>
</ul>
<li>XI par - Nervo Acessório:</li>
<ul>
<li>Duas funções:</li>
<ul>
<li>Elevação do ombro (através do trapézio)</li>
<li>Virar cabeça de um lado para outro (através do esternocleidomastóideo)</li>
</ul>
<li>Testa-se:</li>
<ul>
<li>Pedir para paciente elevar os ombros, enquanto se aplica uma resistência</li>
<li>Pedir paciente para virar a cabeça, também fazendo resistência ao movimento!</li>
</ul>
</ul>
<li>XII para - Nervo hipoglosso:</li>
<ul>
<li>Essencialmente motor!</li>
<li>Movimentos da língua</li>
<li>Avaliar desvios da língua (desvia para lado lesado  paralisia unilateral do hipoglosso)</li>
<li>Verificar atrofia ou </li>
</ul>
</ul>

  </ion-content>
`
})
export class N6 {

  constructor(public navCtrl: NavController) {}


}
