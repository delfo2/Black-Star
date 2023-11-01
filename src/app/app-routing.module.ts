import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/home/main/main.component';
import { CartMainComponent } from './pages/cart/cart-main/cart-main.component';
import { ListMainComponent } from './pages/list/list-main/list-main.component';
import { ProductMainComponent } from './pages/product/product-main/product-main.component';
import { AddressMainComponent } from './pages/address/address-main/address-main.component';

const routes: Routes = [
	{ path: '', component: MainComponent },
	{ path: 'cart', component: CartMainComponent },
	{ path: 'list', component: ListMainComponent },
	{ path: 'product', redirectTo:'list' },
	{ path: 'product/:id', component: ProductMainComponent },
	{ path: 'address', component: AddressMainComponent},
	{ path: '**', redirectTo:'' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
