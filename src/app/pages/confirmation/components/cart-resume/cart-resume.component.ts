import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SelectedProduct } from 'src/app/model/SelectedProduct';

@Component({
	selector: 'app-cart-resume',
	templateUrl: './cart-resume.component.html',
	styleUrls: ['./cart-resume.component.css'],
})
export class CartResumeComponent {
	@Input({ required: true }) public selectedProducts: SelectedProduct[] = [];
	@Output()
	public buttonClicked = new EventEmitter<boolean>();
	public emitConfirmation(value: boolean): void {
		this.buttonClicked.emit(value);
	}
}
