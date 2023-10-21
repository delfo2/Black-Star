import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { MainComponent } from './main/main.component';
import { WinterCollectionComponent } from './components/winter-collection/winter-collection.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DefaultCollectionComponent } from './components/default-collection/default-collection.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		MainComponent,
		WinterCollectionComponent,
		CategoriesComponent,
		DefaultCollectionComponent,
	],
	imports: [CommonModule, ComponentsModule, RouterModule],
})
export class HomeModule {}
