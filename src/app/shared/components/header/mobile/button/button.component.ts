import { Component } from '@angular/core';
import { getAnimateDelay } from 'src/app/shared/utils/stylesFunctions';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.css', '../../header.component.css'],
})
export class ButtonComponent {
	constructor() {}
	public getAnimateDelay = getAnimateDelay;
}
