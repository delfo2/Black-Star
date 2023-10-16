import { SizingChart } from '../shared/enums/MetricsEnum';
import { StarRating } from '../shared/types/metricTypes';

export interface Product {
	id: number;
	title: string;
	price: number;
	discount: number;
	details: {
		size: SizingChart;
		gender: 'F' | 'M';
		rating: StarRating;
		views: number;
	};
	render: {
		img: string;
		description: string;
		material: string;
	};
}
