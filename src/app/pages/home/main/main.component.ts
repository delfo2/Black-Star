import { Component } from '@angular/core';
import { SelectedProductsService } from 'src/app/services/selected-products.service';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css'],
})
export class MainComponent {
	constructor(private selectedProducts: SelectedProductsService) {}
}
