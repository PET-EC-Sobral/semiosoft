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
      <ion-title>Inspeção e Palpação</ion-title>
    </ion-navbar>

  </ion-header>


  <ion-content padding>


  <div  class="image-left embed-video">
        <div class="videoWrapper">
            <iframe width="100%" height="140%" src="https://www.youtube.com/embed/2NtkWjUHR1E" frameborder="0" allowfullscreen></iframe>
        </div>
  </div>

  <h2>Inspeção </h2>

  <p>Procura de sinais de instabilidade hemodinâmica / baixa perfusão tecidual: </p>

  <ul>
  <li>Rebaixamento do sensório</li>
  <li>Sudorese</li>
  <li>Pele fria e pegajosa</li>
  <li>Cianose</li>
  <li>Turgência jugular</li>
  </ul>

<p>Avaliar o paciente deitado confortavelmente, com a cabeça em um ângulo de 45°, para avaliar o aumento da pressão venosa (turgência jugular);
<br/>Na região torácica, avaliar a presença de deformidades e sinais de insuficiência aórtica grave (dança das artérias)
​</p>

<h2>Palpação</h2>
<p>
<b>Verificar:</b> amplitude,  freqüência e sincronia do pulso radial e a temperatura (perfusão).<br/><br/>
Tempo de enchimento capilar ao pressionar a polpa digital do paciente: ≤ 3s (normal) e > 3s (enchimento lentificado);<br/><br/>

Em idosos, não palpar pulsos carotídeos de forma simultânea, pois pode causar estenose e impedir o fluxo sanguíneo para o cérebro;<br/><br/>

Pulso pedioso é palpado lateralmente ao tendão do extensor longo do hálux, podendo apresentar variações anatômicas que dificultam sua palpação;<br/><br/>

<b>Ictus cordis:</b> localizado entre o 4° e o 5° espaços intercostais do lado E, na linha hemiclavicular. Verificar localização, caso esteja lateralizado (ventrículo esquerdo aumentado) ou anteriorizado (ventrículo direito aumentado); palpar ictus cordis com 2 polpas digitais , mais do que isso é sinal de amplitude aumentada;<br/><br/>

Os <b>sopros cardíacos</b> podem ser classificados quanto à sua intensidade em uma escala de 1+ a 6+. Acima de 3+ é possível palpar o sopro a depender do foco, denominando-se frêmito;<br/><br/>
​
O pulso alternante apresenta alternações de intensidade (forte e fraca) e é sinal de disfunção ventricular grave.<br/><br/>

No <b>pulso paradoxal</b>, a pressão sistólica cai mais de <b>10mmHg</b> durante a <b>inspiração</b>. Pode ser verificado em pacientes com pericardite constritiva, tamponamento cardíaco e cardiopatia restritiva;<br/><br/>
​
Deve-se avaliar a sincronia entre a ausculta da 1ª bulha cardíaca e a palpação do pulso carotídeo. Caso não estejam sincrônicos, suspeita-se de fibrilação atrial (arritmia mais comum).<br/><br/>
</p>

<h5> Referencial anatômico dos pulsos</h5>
<p>Sempre devemos avaliar a intensidade, a amplitude, a sincronia, o ritmo dos pulsos
É importante lembrar-se de não palpar com o polegar do examinador e de avaliar os pulsos bilateral e simultaneamente a procura de alterações, exceto na palpação do pulso carotídeo, que deve ser avaliado separadamente em ambos os lados.<br/>
</p>

<ul>
<li><b>Pulso ulnar</b>  é palpado no terço distal do antebraço anteriormente e medialmente.</li><br/>
<li><b>Pulso radial</b> é palpado no terço distal do antebraço anteriormente e lateralmente, sendo normalmente utilizado para medir a frequência e o ritmo cardíaco.</li><br/>

<li><b>Pulso braquial</b> é palpado na parte anterior do cotovelo ou no terço distal do braço, no sulco entre os músculos bíceps (anteriormente) e tríceps (medialmente).</li><br/>

<li><b>Pulso carotídeo</b> pode ser examinado de duas maneiras:<br/><br/>
<ol>
<li>Colocando-se os dedos do examinador sobre a projeção da laringe, deslizando posteriormente até sentir a artéria carótida contra os músculos paravertebrais,</li>
<li>O examinador coloca-se anterior ou posteriormente ao doente e palpa a artérias com os dedos em forma de gancho, colocados lateralmente no pescoço entre a laringe e a margem anterolateral do músculo esternocleidomastoideo.</li>
</ol>
</li><br/><br/>
<li><b>Pulso femoral</b> palpa-se no nível do trígono femoral, no ponto médio entre a sínfise púbica e a espinha-ilíaca anterossuperior.</li><br/>

<li><b>Pulso poplíteo</b> geralmente é de difícil palpação, uma vez que não é superficial nem atravessa nenhuma proeminência óssea; ele pode ser examminado de duas maneiras:<br/><br/>
<ol>
<li>Realiza-se a flexão do joelho em 90º, e o examinador coloca os dois polegares na tuberosidade tibial e os outros dedos em gancho na fossa poplítea, procurando o feixe neurovascular e pressionando-o contra a superfície posterior da tíbia.</li>
<li>Coloca-se o paciente em decúbito dorsal e com a flexão passiva do joelho em 60º, procura-se o pulso na fossa poplítea com as polpas digitais.</li>
 </ol>
 </li><br/>
<li><b>Pulso tibial posterior</b> é palpado posteriormente ao maléolo medial.</li><br/>

<li><b>Pulso dorsal do pé ou pedioso</b> é palpado lateralmente ao tendão do extensor longo do hálux, no prolongamento do pulso tibial posterior. É importante considerar que a artéria dorsal do pé tem variação anatômica e pode apresentar dificuldade na palpação do pulso.</li><br/>
</ul>




  </ion-content>
`
})
export class C1 {
  constructor(public navCtrl: NavController) {}


}
