import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { disableIfMobile } from 'src/app/shared/decorator/disableFunction';
import { isMobile } from 'src/app/shared/utils/deviceIndentifier';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css'],
})
export class SearchComponent {
	@Output()
	public buttonClicked = new EventEmitter<boolean>();

	public clothesSearch = new FormGroup({
		searchInput: new FormControl('', [
			Validators.required,
			Validators.pattern('[A-Za-zÀ-ÿ ]*'),
		]),
	});

	public searchMode = false;
	public searchVisibility: string;

	constructor(private router: Router) {
		this.searchVisibility = isMobile() ? 'none' : 'block';
	}

	// Form Controller
	public onSubmit(): void {
		if (this.clothesSearch.valid && this.clothesSearch.value.searchInput) {
			const search: string = this.clothesSearch.value.searchInput;
			this.router.navigate(['/list'], {
				queryParams: { q: search },
			});
		}
	}
	@disableIfMobile()
	public switchSearchMode(): void {
		this.searchMode = !this.searchMode;
		this.buttonClicked.emit(this.searchMode);
		this.searchVisibility = this.changeSearchVisibility();
	}

	private changeSearchVisibility(): string {
		return this.searchMode ? 'block' : 'none';
	}
}
