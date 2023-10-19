import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartMainComponent } from './cart-main/cart-main.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { CartHeaderComponent } from './components/cart-header/cart-header.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartResumeComponent } from './components/cart-resume/cart-resume.component';
import { RouterLink } from '@angular/router';

@NgModule({
	declarations: [
		CartMainComponent,
		CartHeaderComponent,
		CartItemComponent,
		CartResumeComponent,
	],
	imports: [CommonModule, ComponentsModule],
})
export class CartModule {}
