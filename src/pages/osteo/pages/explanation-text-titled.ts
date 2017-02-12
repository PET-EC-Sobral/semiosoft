import { Component, Input } from '@angular/core';

@Component({
  selector: 'explanation-text-titled',
  templateUrl: 'explanation-text-titled.html'
})

export class ExplanationTextTitled {
	@Input() title;

  constructor() {
  }
}