import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './header/mobile/button/button.component';
import { CartComponent } from './header/cart/cart.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [HeaderComponent, FooterComponent, ButtonComponent, CartComponent, ErrorComponent],
	imports: [CommonModule, RouterModule, ReactiveFormsModule],
	exports: [HeaderComponent, FooterComponent, ErrorComponent],
})
export class ComponentsModule {}
