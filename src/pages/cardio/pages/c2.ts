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
      <ion-title>Percussão</ion-title>
    </ion-navbar>

  </ion-header>


  <ion-content padding>

    <div  class="image-left embed-video">
          <div class="videoWrapper">
              <iframe width="100%" height="140%" src="https://www.youtube.com/embed/cZEJpwohVDE" frameborder="0" allowfullscreen></iframe>
          </div>
    </div>

    <h5>Percussão do precórdio</h5>
  <p>
A percussão do coração é realizada nos 2, 3º, 4º e 5º espaços intercostais a partir da linha axilar anterior esquerda até a linha axilar anterior direita. A presença de macicez na região paraesternal à esquerda, deve-se à localização do coração.
A percussão da região precordial do tórax possui limitado valor semiológico, visto que ela não demonstra uma boa sensibilidade ou especificidade para estimar a área cardíaca, sendo substituída pela palpação para tal fim a. As raras informações de relevância clínica que essa técnica fornece incluem a identificação de dilatação do tronco da artéria pulmonar. Nesse caso, o som claro pulmonar, normalmente observado na região do segundo espaço intercostal na região paraesternal tanto a direita quanto a esquerda, é substituído por um som submaciço à percussão. Além disso, a presença de um som claro pulmonar na região paraesternal esquerda na altura do 3º ao 5º espaços intercostais indica a presença de ar anteriormente ao coração, sugerindo enfisema pulmonar.
</p>
  </ion-content>
`
})
export class C2 {

  constructor(public navCtrl: NavController) {}


}
