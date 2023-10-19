import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
	@Input()
	public title : string = 'Página não disponível';
	@Input()
	public description : string = 'Um erro não previsto aconteceu!';
	@Input()
	public destiny : string = 'Inicio';
	@Input()
	public link : string = '';
}
