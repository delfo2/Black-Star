import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { SelectedProductsService } from './services/selected-products.service';
import { CartModule } from './pages/cart/cart.module';
import { ListModule } from './pages/list/list.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, HomeModule, CartModule, ListModule],
	providers: [SelectedProductsService],
	bootstrap: [AppComponent],
})
export class AppModule {}
