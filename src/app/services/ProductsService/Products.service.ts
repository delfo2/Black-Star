import { Injectable } from '@angular/core';
import { Product } from '../../model/Product';
import { products } from '../../database/products';

@Injectable({
	providedIn: 'root',
})
export class ProductsService {
	private products: Product[] = [];
	private categorySample: Product[] = [];
	constructor() {
		this.products = products;
		const camisaSample = this.products.find(
			(p) => p.details.type === 'camisa'
		);
		const moletomSample = this.products.find(
			(p) => p.details.type === 'moletom'
		);
		const conjuntoSample = this.products.find(
			(p) => p.details.type === 'conjunto'
		);
		const mangaSample = this.products.find(
			(p) => p.details.type === 'manga longa'
		);
		if (camisaSample && moletomSample && conjuntoSample && mangaSample) {
			this.categorySample.push(
				camisaSample,
				mangaSample,
				moletomSample,
				conjuntoSample
			);
		}
	}

	public getProducts(): Product[] {
		return this.products;
	}
	public getOneProductOfEachCategory(): Product[] {
		return this.categorySample;
	}
	public getProductById(id: number): Product | null{
		return this.products.find(p => p.id === id) ?? null;
	}
	public getProductsByCategory(category: string): Product[] {
		if (category.toLowerCase() === 'geral') {
			return this.products;
		}
		return this.products.filter(
			(p) => p.details.type === category.toLowerCase()
		);
	}
	public getProductsByGender(gender: string): Product[] {
		const products = this.products.filter(
			(p) => p.details.gender === gender.toUpperCase()
		);
		const productsFilter = products.length > 0 ? products : this.products;
		return productsFilter;
	}
	public getProductsBySearch(q: string): Product[] {
		return this.products.filter(
			(p) =>
				p.title.toLowerCase().includes(q.toLowerCase()) ||
				p.render.description.toLowerCase().includes(q.toLowerCase())||
				p.render.material.toLowerCase().includes(q.toLowerCase())
		);
	}
}
