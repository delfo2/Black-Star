import { Location } from '@angular/common';
import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SelectedProductController } from 'src/app/controller/SelectedProductController';
import { Product } from 'src/app/model/Product';
import { ProductsService } from 'src/app/services/selected-products.service';
import { WindowHelper } from 'src/app/shared/utils/WindowHelper';

@Component({
	selector: 'app-product-main',
	templateUrl: './product-main.component.html',
	styleUrls: ['./product-main.component.css'],
})
export class ProductMainComponent
	extends SelectedProductController
	implements OnInit
{
	constructor(private route: ActivatedRoute, private location: Location) {
		super();
		this.fetch(this.productsService.getProducts());
	}

	public ngOnInit(): void {
		WindowHelper.moveToUp();
		this.route.params.subscribe({
			next: (value) => {
				WindowHelper.moveToUp();
				const id = value['id'];
				this.id = this.getNumber(id);
			},
		});
	}
	public productsService = new ProductsService();
	public id: number | null = null;

	public getProduct(): Product | null {
		if (this.id !== null) {
			return this.productsService.getProductById(this.id);
		}
		return null;
	}

	public goBack(): void {
		this.location.back();
	}
	private getNumber(value: any): number | null {
		if (value && typeof value === 'string') {
			return parseInt(value);
		} else if (typeof value === 'number') {
			return value;
		}
		return null;
	}
}
