import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { isMobile } from 'src/app/shared/utils/deviceIndentifier';

@Component({
	selector: 'app-sub-menu',
	templateUrl: './sub-menu.component.html',
	styleUrls: ['./sub-menu.component.css'],
})
export class SubMenuComponent {
	@Input()
	public title: string = 'descrição';
	@Input()
	public text: String = 'descrição';
	public titleSymbol: string = '+';
	public textVisibility: boolean = false;

	public changeTextVisibility(): void {
		this.textVisibility = (!this.textVisibility);
		this.changeTitleSymbol();
	}
	private changeTitleSymbol(): void {
		this.titleSymbol = this.titleSymbol === '+' ? '-' : '+';
	}
}
