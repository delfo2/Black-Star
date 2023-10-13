import { Component } from '@angular/core';
import { MenuOptions } from 'src/app/shared/components/header/MenuOptions';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css', '../../header.component.css']
})
export class ButtonComponent {
	public menuOptions = MenuOptions.options;
}
