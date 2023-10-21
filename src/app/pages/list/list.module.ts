import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMainComponent } from './list-main/list-main.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { ProductComponent } from './components/product/product.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [ListMainComponent, ProductComponent],
	imports: [CommonModule, ComponentsModule, RouterModule],
})
export class ListModule {}
