import { Component, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

/*
  Generated class for the Cardio page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'osteo-sub-page',
  templateUrl: 'osteo.html'
})

export class OsteoSubPage {
	sanitizer: DomSanitizer;

	@Input() title;
	@Input() videoLink;

  constructor(sanitizer: DomSanitizer) {
  	this.sanitizer = sanitizer;
  }

  safeURL(url) {
  	return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
