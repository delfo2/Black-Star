import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductMainComponent } from './product-main/product-main.component';
import { ProductComponent } from './components/product/product.component';
import { SubMenuComponent } from './components/sub-menu/sub-menu.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [ProductMainComponent, ProductComponent, SubMenuComponent],
	imports: [CommonModule, ComponentsModule, RouterModule],
})
export class ProductModule {}
