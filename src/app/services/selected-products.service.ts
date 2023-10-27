import { Injectable } from '@angular/core';
import { Product } from '../model/Product';
import { SizingChart } from '../shared/enums/MetricsEnum';

@Injectable({
	providedIn: 'root',
})
export class ProductsService {
	private products: Product[] = [];
	private categorySample: Product[] = [];
	private id = 0;
	constructor() {
		this.fakeAdd();
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
	private addProduct(product: Product) {
		this.products.push(product);
	}
	private getId(): number {
		return this.id++;
	}
	private fakeAdd() {
		this.addProduct({
			id: this.getId(),
			title: `Núcleo Azul`,
			price: 28.99,
			discountPercentage: 3,
			details: {
				size: SizingChart.M,
				gender: 'M',
				rating: 3,
				type: 'manga longa',
				views: 28,
			},
			render: {
				img: '../../../../../assets/img/webp/inverno1.webp',
				description: `Moletem Núcleo Azul.`,
				material: 'Algodão 100%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `Marca Cinza`,
			price: 21.99,
			discountPercentage: 13,
			details: {
				size: SizingChart.M,
				gender: 'F',
				rating: 5,
				type: 'moletom',
				views: 78,
			},
			render: {
				img: '../../../../../assets/img/webp/inverno2.webp',
				description: `Moletom Marca Cinza.`,
				material: 'Poliéster 100%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `Chinês Retrô`,
			price: 34.99,
			discountPercentage: 23,
			details: {
				size: SizingChart.M,
				gender: 'M',
				rating: 4,
				type: 'moletom',
				views: 233,
			},
			render: {
				img: '../../../../../assets/img/webp/inverno3.webp',
				description: `Moletom Chinês Retrô`,
				material: 'Algodão 70%, poliéster 30%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `Manga Amarela`,
			price: 20.99,
			discountPercentage: 0,
			details: {
				size: SizingChart.M,
				gender: 'M',
				rating: 2,
				type: 'moletom',
				views: 27,
			},
			render: {
				img: '../../../../../assets/img/webp/inverno4.webp',
				description: `Moletom Manga Amarela.`,
				material: 'Algodão 100%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `Traços Vermelhos`,
			price: 28.99,
			discountPercentage: 2,
			details: {
				size: SizingChart.M,
				gender: 'M',
				rating: 5,
				type: 'moletom',
				views: 506,
			},
			render: {
				img: '../../../../../assets/img/webp/modelocelb.webp',
				description: `Moletom Traços vermelhos.`,
				material: 'Algodão 80%, elastano 20%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `Azul floral`,
			price: 42.99,
			discountPercentage: 10,
			details: {
				size: SizingChart.M,
				gender: 'F',
				rating: 3,
				type: 'conjunto',
				views: 46,
			},
			render: {
				img: '../../../../../assets/img/webp/06.webp',
				description: `Azul floral.`,
				material: 'Algodão 80%, elastano 20%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `Branco Gelado`,
			price: 18.99,
			discountPercentage: 0,
			details: {
				size: SizingChart.M,
				gender: 'M',
				rating: 2,
				type: 'moletom',
				views: 46,
			},
			render: {
				img: '../../../../../assets/img/webp/07.webp',
				description: `Moletom Branco Gelado.`,
				material: 'Algodão 100%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `Flor Giz`,
			price: 13.99,
			discountPercentage: 0,
			details: {
				size: SizingChart.M,
				gender: 'F',
				rating: 4,
				type: 'camisa',
				views: 16,
			},
			render: {
				img: '../../../../../assets/img/webp/08.webp',
				description: `Camisa Flor Giz.`,
				material: 'Seda 100%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `Discoteca Floral`,
			price: 42.99,
			discountPercentage: 30,
			details: {
				size: SizingChart.M,
				gender: 'F',
				rating: 3,
				type: 'camisa',
				views: 12,
			},
			render: {
				img: '../../../../../assets/img/webp/09.webp',
				description: `Camisa Discoteca Floral.`,
				material: 'Seda 100%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `Discoteca Floral 2`,
			price: 15.99,
			discountPercentage: 40,
			details: {
				size: SizingChart.M,
				gender: 'F',
				rating: 4,
				type: 'camisa',
				views: 12,
			},
			render: {
				img: '../../../../../assets/img/webp/10.webp',
				description: `Camisa Discoteca Floral 2.`,
				material: 'Seda 100%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `Top Giz`,
			price: 22.99,
			discountPercentage: 0,
			details: {
				size: SizingChart.M,
				gender: 'F',
				rating: 5,
				type: 'camisa',
				views: 182,
			},
			render: {
				img: '../../../../../assets/img/webp/11.webp',
				description: `Camisa Top Giz.`,
				material: 'Seda 100%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `Laço rosa`,
			price: 22.99,
			discountPercentage: 40,
			details: {
				size: SizingChart.M,
				gender: 'F',
				rating: 4,
				type: 'camisa',
				views: 18,
			},
			render: {
				img: '../../../../../assets/img/webp/12.webp',
				description: `Camisa Laço rosa.`,
				material: 'Seda 100%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `Laço Violeta`,
			price: 22.99,
			discountPercentage: 50,
			details: {
				size: SizingChart.M,
				gender: 'F',
				rating: 3,
				type: 'camisa',
				views: 7,
			},
			render: {
				img: '../../../../../assets/img/webp/13.webp',
				description: `Camisa Laço Violeta.`,
				material: 'Seda 100%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `Babado Colorido`,
			price: 12.99,
			discountPercentage: 60,
			details: {
				size: SizingChart.M,
				gender: 'F',
				rating: 1,
				type: 'camisa',
				views: 99,
			},
			render: {
				img: '../../../../../assets/img/webp/14.webp',
				description: `Camisa babado Colorido.`,
				material: 'Seda 100%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `Moda Praia`,
			price: 22.99,
			discountPercentage: 15,
			details: {
				size: SizingChart.M,
				gender: 'F',
				rating: 2,
				type: 'conjunto',
				views: 119,
			},
			render: {
				img: '../../../../../assets/img/webp/15.webp',
				description: `Conjunto Moda Praia.`,
				material: 'Seda 100%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `Your Text Here`,
			price: 29.99,
			discountPercentage: 1,
			details: {
				size: SizingChart.M,
				gender: 'F',
				rating: 5,
				type: 'camisa',
				views: 993,
			},
			render: {
				img: '../../../../../assets/img/webp/16.webp',
				description: `Camisa Your Text Here.`,
				material: 'Algodão 100%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `VR`,
			price: 21.99,
			discountPercentage: 0,
			details: {
				size: SizingChart.M,
				gender: 'F',
				rating: 2,
				type: 'camisa',
				views: 111,
			},
			render: {
				img: '../../../../../assets/img/webp/17.webp',
				description: `Camisa VR.`,
				material: 'Algodão 50%, poliamida 30%, elastano 20%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `Visual 2000`,
			price: 11.99,
			discountPercentage: 50,
			details: {
				size: SizingChart.M,
				gender: 'F',
				rating: 1,
				type: 'conjunto',
				views: 377,
			},
			render: {
				img: '../../../../../assets/img/webp/18.webp',
				description: `Conjunto Visual 2000.`,
				material: 'Algodão 60%, linho 40%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `Verde Flor`,
			price: 31.99,
			discountPercentage: 0,
			details: {
				size: SizingChart.M,
				gender: 'F',
				rating: 4,
				type: 'conjunto',
				views: 377,
			},
			render: {
				img: '../../../../../assets/img/webp/19.webp',
				description: `Conjunto Verde Flor.`,
				material: 'Algodão 60%, linho 40%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `Sobretudo Green`,
			price: 51.99,
			discountPercentage: 0,
			details: {
				size: SizingChart.M,
				gender: 'F',
				rating: 4,
				type: 'conjunto',
				views: 37,
			},
			render: {
				img: '../../../../../assets/img/webp/20.webp',
				description: `Conjunto Sobretudo Green.`,
				material: 'Algodão 70%, poliéster 30%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `Moda Giz`,
			price: 21.99,
			discountPercentage: 70,
			details: {
				size: SizingChart.M,
				gender: 'F',
				rating: 5,
				type: 'conjunto',
				views: 387,
			},
			render: {
				img: '../../../../../assets/img/webp/21.webp',
				description: `Conjunto Moda Giz.`,
				material: 'Algodão 80%, elastano 20%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `Amarelo Inteiro`,
			price: 15.99,
			discountPercentage: 90,
			details: {
				size: SizingChart.M,
				gender: 'F',
				rating: 1,
				type: 'conjunto',
				views: 437,
			},
			render: {
				img: '../../../../../assets/img/webp/22.webp',
				description: `Conjunto Amarelo Inteiro.`,
				material: 'Poliéster 100%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `Vestido Dress`,
			price: 65.99,
			discountPercentage: 13,
			details: {
				size: SizingChart.M,
				gender: 'F',
				rating: 4,
				type: 'conjunto',
				views: 287,
			},
			render: {
				img: '../../../../../assets/img/webp/23.webp',
				description: `Conjunto Vestido Dress.`,
				material: 'Algodão 50%, poliamida 30%, elastano 20%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `CouroJá`,
			price: 45.99,
			discountPercentage: 95,
			details: {
				size: SizingChart.M,
				gender: 'M',
				rating: 2,
				type: 'moletom',
				views: 187,
			},
			render: {
				img: '../../../../../assets/img/webp/24.webp',
				description: `Moletom CouroJá.`,
				material: 'Couro 100%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `VestiNteiro`,
			price: 35.99,
			discountPercentage: 0,
			details: {
				size: SizingChart.M,
				gender: 'F',
				rating: 3,
				type: 'conjunto',
				views: 161,
			},
			render: {
				img: '../../../../../assets/img/webp/25.webp',
				description: `Conjunto VestiNteiro.`,
				material: 'Poliéster 100%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `Concatenado`,
			price: 42.99,
			discountPercentage: 10,
			details: {
				size: SizingChart.M,
				gender: 'F',
				rating: 4,
				type: 'conjunto',
				views: 261,
			},
			render: {
				img: '../../../../../assets/img/webp/26.webp',
				description: `Conjunto Concatenado.`,
				material: 'Poliéster 100%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `SobreTCinza`,
			price: 67.99,
			discountPercentage: 30,
			details: {
				size: SizingChart.M,
				gender: 'F',
				rating: 4,
				type: 'conjunto',
				views: 361,
			},
			render: {
				img: '../../../../../assets/img/webp/27.webp',
				description: `Conjunto SobreTCinza.`,
				material: 'Algodão 50%, poliamida 30%, elastano 20%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `LongeETude`,
			price: 28.99,
			discountPercentage: 17,
			details: {
				size: SizingChart.M,
				gender: 'F',
				rating: 5,
				type: 'conjunto',
				views: 269,
			},
			render: {
				img: '../../../../../assets/img/webp/28.webp',
				description: `Conjunto LongeETude.`,
				material: 'Algodão 100%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `Xaprex`,
			price: 17.99,
			discountPercentage: 0,
			details: {
				size: SizingChart.M,
				gender: 'F',
				rating: 3,
				type: 'conjunto',
				views: 61,
			},
			render: {
				img: '../../../../../assets/img/webp/29.webp',
				description: `Conjunto Xaprex.`,
				material: 'Poliéster 100%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `Epredon`,
			price: 14.99,
			discountPercentage: 0,
			details: {
				size: SizingChart.M,
				gender: 'F',
				rating: 2,
				type: 'conjunto',
				views: 21,
			},
			render: {
				img: '../../../../../assets/img/webp/30.webp',
				description: `Conjunto Epredon.`,
				material: 'Poliéster 100%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `Flor Branca`,
			price: 82.99,
			discountPercentage: 10,
			details: {
				size: SizingChart.M,
				gender: 'F',
				rating: 1,
				type: 'conjunto',
				views: 261,
			},
			render: {
				img: '../../../../../assets/img/webp/31.webp',
				description: `Conjunto Flor Branca.`,
				material: 'Poliéster 100%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `Camisa Da Bahia`,
			price: 8.99,
			discountPercentage: 0,
			details: {
				size: SizingChart.M,
				gender: 'M',
				rating: 5,
				type: 'camisa',
				views: 751,
			},
			render: {
				img: '../../../../../assets/img/webp/32.webp',
				description: `Camisa Da Bahia.`,
				material: 'Algodão 100%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `NNenhum`,
			price: 28.99,
			discountPercentage: 5,
			details: {
				size: SizingChart.M,
				gender: 'F',
				rating: 5,
				type: 'manga longa',
				views: 236,
			},
			render: {
				img: '../../../../../assets/img/webp/33.webp',
				description: `Manga Longa NNenhum.`,
				material: 'Algodão 100%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `PiraMind`,
			price: 18.99,
			discountPercentage: 0,
			details: {
				size: SizingChart.M,
				gender: 'M',
				rating: 3,
				type: 'manga longa',
				views: 201,
			},
			render: {
				img: '../../../../../assets/img/webp/34.webp',
				description: `Manga Longa PiraMind.`,
				material: 'Algodão 100%',
			},
		});
	}
}
