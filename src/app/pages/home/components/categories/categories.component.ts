import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/Product';

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
	@Input()
	public products: Product[] = [];
}
