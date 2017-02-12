import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import{ Nervoso } from '../pages/nervoso/nervoso';
import{Cardio} from '../pages/cardio/cardio';
import{Respi} from '../pages/respi/respi';
import{Osteo} from '../pages/osteo/osteo';

//cardio
import{C1} from '../pages/cardio/pages/c1';
import{C2} from '../pages/cardio/pages/c2';
import{C3} from '../pages/cardio/pages/c3';

//nervoso
import{N1} from '../pages/nervoso/pages/n1';
import{N2} from '../pages/nervoso/pages/n2';
import{N3} from '../pages/nervoso/pages/n3';
import{N4} from '../pages/nervoso/pages/n4';
import{N5} from '../pages/nervoso/pages/n5';
import{N6} from '../pages/nervoso/pages/n6';

//respiratorio
import{R1} from '../pages/respi/pages/r1';
import{R2} from '../pages/respi/pages/r2';
import{R3} from '../pages/respi/pages/r3';
import{R4} from '../pages/respi/pages/r4';
import{R5} from '../pages/respi/pages/r5';

//respiratorio
import {VideoSection} from '../pages/components/video-section';
import {ExplanationTextTitled} from '../pages/components/explanation-text-titled';
import{O1} from '../pages/osteo/pages/o1';
import{O2} from '../pages/osteo/pages/o2';
import{O3} from '../pages/osteo/pages/o3';
import{O4} from '../pages/osteo/pages/o4';
import{O5} from '../pages/osteo/pages/o5';
import{O6} from '../pages/osteo/pages/o6';
import{O7} from '../pages/osteo/pages/o7';
import{O8} from '../pages/osteo/pages/o8';
import{O9} from '../pages/osteo/pages/o9';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Nervoso, N1,N2,N3,N4,N5,N6,
    Cardio, C1,C2,C3,
    Respi,R1,R2,R3,R4,R5,
    Osteo, VideoSection, ExplanationTextTitled, O1,O2,O3,O4,O5,O6,O7,O8,O9

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Nervoso, N1,N2,N3,N4,N5,N6,
    Cardio, C1,C2,C3,
    Respi,R1,R2,R3,R4,R5,
    Osteo, VideoSection, ExplanationTextTitled, O1,O2,O3,O4,O5,O6,O7,O8,O9

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
