import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { CartModule } from './pages/cart/cart.module';
import { ListModule } from './pages/list/list.module';
import { ProductModule } from './pages/product/product.module';
import { AddressModule } from './pages/address/address.module';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationModule } from './pages/confirmation/confirmation.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		HomeModule,
		CartModule,
		ListModule,
		ProductModule,
		AddressModule,
		ConfirmationModule
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
