import { Component, Input, OnChanges } from '@angular/core';
import { getAnimateDelay } from 'src/app/shared/utils/stylesFunctions';

@Component({
	selector: 'app-counter-animation',
	templateUrl: './counter-animation.component.html',
	styleUrls: ['./counter-animation.component.css'],
})
export class CounterAnimationComponent implements OnChanges {
	@Input()
	public number: number = 0;
	public lastNumber: number = this.number;
	public alterationList: string[] = [];

	private timeOutId: NodeJS.Timeout | undefined;
	private firstLoadAlreadyHappens: boolean = false;

	public ngOnChanges(): void {
		this.action();
	}
	public getAnimateDelay = getAnimateDelay;

	private action(): void {
		this.numberInit();
		const alteration = this.getAlterationType(this.number, this.lastNumber);
		if (alteration) {
			this.alterationList.push(alteration);
			clearTimeout(this.timeOutId);
			this.timeOutId = setTimeout(
				this.clearAlterationList.bind(this),
				1300
			);
		}
		this.lastNumber = this.number;
	}

	private numberInit(): void {
		if (typeof this.number === 'number' && !this.firstLoadAlreadyHappens) {
			this.lastNumber = this.number;
			this.firstLoadAlreadyHappens = true;
		}
	}
	private getAlterationType(
		number: number,
		lastNumber: number
	): string | null {
		if (number > lastNumber) {
			return '+1';
		} else if (number === lastNumber) {
			return null;
		} else {
			return `${number - lastNumber}`;
		}
	}
	private clearAlterationList(): void {
		this.alterationList.splice(0, this.alterationList.length);
	}
}
