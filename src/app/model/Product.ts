import { SizingChart } from '../shared/enums/MetricsEnum';

type rating = 0 | 1 | 2 | 3 | 4 | 5;

export interface Product {
	id: number;
	title: string;
	price: number;
	discount: number;
	details: {
		size: SizingChart;
		gender: 'F' | 'M';
		rating: rating;
		views: number;
	};
	render: {
		img: string;
		description: string;
		material: string;
	};
}
