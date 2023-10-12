import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	public showProductCart = false;
	public changeProductCartVisibity() : void {
		this.showProductCart = !(this.showProductCart);
	}
}
