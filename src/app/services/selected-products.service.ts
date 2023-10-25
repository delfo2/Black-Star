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
				img: 'https://i.pinimg.com/564x/0b/1b/e0/0b1be0507addf7710161cd2428ed14c1.jpg',
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
				img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/003/064/118/products/155d7458-bf5a-4a47-bba1-cbfebbc465261-1e7cdc6f52f07ac09f16868718523033-640-0.jpeg',
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
				img: 'https://static.eliani.com.br/public/eliani/imagens/produtos/blusa-manga-longa-meia-tunica-estampa-floral-preto-e-branco-9029.jpg',
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
				img: 'https://capitollium.fbitsstatic.net/img/p/blusa-stati-uniti-estampa-floral-preto-158942/307405.jpg?w=460&h=460&v=no-change&qs=ignore',
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
				img: 'https://img.lojasrenner.com.br/item/590378820/large/3.jpg',
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
				img: 'https://i.pinimg.com/736x/3b/f2/e1/3bf2e1eb04270494bb00ba7a9e3f372c.jpg',
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
				img: 'https://images.tcdn.com.br/img/img_prod/820990/blusa_estampa_floral_manga_bufante_preto_19_1_d4fa2553bbed08f202d9b1cd08b8fa27.jpg',
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
				img: 'https://img.lojasrenner.com.br/item/568184076/large/3.jpg',
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
				img: 'https://lojasanguelatino.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/200024-2_t-_35_.jpg',
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
				img: 'https://cf.shopee.com.br/file/d26739c8c1cff2c78dde3f3888762634',
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
				img: 'https://m.media-amazon.com/images/I/61kc7nfJDyL._AC_UF894,1000_QL80_.jpg',
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
				img: 'https://r2.starryai.com/results/325261233/726d57f1-5d15-4aa7-aafc-281f36828c4a.webp',
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
				img: 'https://www.calitta.com/6347-large_default/blusa-viscose-floral-preta-feminina-moda-praia-laco-no-decote-jovem.jpg',
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
				img: 'https://i.pinimg.com/originals/48/5f/01/485f01ea1523ead3041828b82d8ae5e7.png',
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
				img: 'https://s2.glbimg.com/zDXomLV0DXvle-d-bGyGsOAGEgw=/smart/e.glbimg.com/og/ed/f/original/2022/02/18/gettyimages-1370998239.jpg',
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
				img: 'https://litb-cgis.rightinthebox.com/images/500x500/202305/bps/product/inc/jgaorm1684410512047.jpg',
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
				img: 'https://litb-cgis.rightinthebox.com/images/500x500/202206/bps/product/inc/tgdnoj1656061907631.jpg',
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
				img: 'https://www.dhresource.com/webp/m/0x0/f2/albu/g6/M00/3C/09/rBVaSFrE-SqAJ6qLAAC1emfSqNM694.jpg',
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
				img: 'https://st4.depositphotos.com/2760050/31515/i/1600/depositphotos_315155296-stock-photo-hipster-winter-fashion-outfit-guy.jpg',
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
				img: 'https://fernandaramosstore.com.br/wp-content/uploads/2023/06/fernandaramosstore_com_br-vestido-midi-sem-bojo-manga-longa-canelado-com-fenda-preto.jpg',
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
				img: 'https://img.lojasrenner.com.br/item/607799701/large/3.jpg',
				description: `Conjunto Concatenado.`,
				material: 'Poliéster 100%',
			},
		});
		this.addProduct({
			id: this.getId(),
			title: `Praiando`,
			price: 12.99,
			discountPercentage: 0,
			details: {
				size: SizingChart.M,
				gender: 'M',
				rating: 2,
				type: 'camisa',
				views: 281,
			},
			render: {
				img: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/0e932fcbf7a5779c7c621b810924c383.jpg?imageMogr2/auto-orient%7CimageView2/2/w/1300/q/80/format/webp',
				description: `camisa Praiando.`,
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
				img: 'https://i.pinimg.com/564x/49/81/6b/49816b23fef365a54f4471e795b3d45e.jpg',
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
				img: 'https://i.pinimg.com/736x/d0/b7/6f/d0b76fc8979a718a8db72a054604220a--dress-codes-outfits-inspiration.jpg',
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
				img: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/903dbda4c269cc9fa28dbc8ec2c06310.jpg?imageMogr2/auto-orient%7CimageView2/2/w/1300/q/80/format/webp',
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
				img: 'https://img.kwcdn.com/product/1d14c6c05d8/78793c11-4849-42b2-8dcb-3a361013a19a_1755x2340.jpeg?imageMogr2/auto-orient%7CimageView2/2/w/1300/q/80/format/webp',
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
				img: 'https://www.haremsbrides.com/cdn/shop/products/Vizara2_800x.jpg?v=1639826693',
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
				img: 'https://www.copafootball.com/images/articles/large/Atletico-de-Madrid-1986-Third-Retro-Football-Shirt-bl-7237.jpg',
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
				img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSxtN5jeSrAh_R_mUa9_OBtdX_kScFasiTPEmn6XI2rnMdsj9Kz5GBz-J0ckGDiuGv3N7gRBW9Qf24u8uK306EtdLmLU3zvKXeQ2fe4E3M43IrXyGDMw6MQhA&usqp=CAE',
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
				img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTjkBMkqlCJj63QrPpakafe-G6mWVQnoqIq0TCukuWgrJirU5lmwZcH4WXjbx-u2w5pU3D6pqLw4R5jQKK9YDg02GfbEbMW6ZKua1ZgsFplw_UnJOK9Bwvnmg&usqp=CAE',
				description: `Manga Longa PiraMind.`,
				material: 'Algodão 100%',
			},
		});
	}
}
