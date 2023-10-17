import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-winter-collection',
  templateUrl: './winter-collection.component.html',
  styleUrls: ['./winter-collection.component.css', 'winter-collection.responsive.component.css']
})
export class WinterCollectionComponent {
	@Input()
	public products : Product[] = [];
}
