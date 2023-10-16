import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './header/mobile/button/button.component';
import { CartComponent } from './header/cart/cart.component';
import { SelectedProductsService } from 'src/app/services/selected-products.service';

@NgModule({
	declarations: [HeaderComponent, FooterComponent, ButtonComponent, CartComponent],
	imports: [CommonModule],
	providers: [SelectedProductsService],
	exports: [HeaderComponent, FooterComponent],
})
export class ComponentsModule {}
