import { SizingChart } from '../shared/enums/MetricsEnum';
import { StarRating, ClothesTypes } from '../shared/types/clothesTypes';

export interface Product {
	id: number;
	title: string;
	price: number;
	discount: number;
	details: {
		size: SizingChart;
		gender: 'F' | 'M';
		rating: StarRating;
		type: ClothesTypes,
		views: number;
	};
	render: {
		img: string;
		description: string;
		material: string;
	};
}
