import { Component, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

/*
  Generated class for the Cardio page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'video-section',
  templateUrl: 'video-section.html'
})

export class VideoSection {
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
