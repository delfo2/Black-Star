import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/home/main/main.component';
import { CartMainComponent } from './pages/cart/cart-main/cart-main.component';
import { ListMainComponent } from './pages/list/list-main/list-main.component';

const routes: Routes = [
	{ path: '', component: MainComponent },
	{ path: 'cart', component: CartMainComponent },
	{ path: 'list', component: ListMainComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
