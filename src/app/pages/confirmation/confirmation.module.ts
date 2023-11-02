import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationMainComponent } from './main/main.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { CartResumeComponent } from './components/cart-resume/cart-resume.component';
import { AddressResumeComponent } from './components/address-resume/address-resume.component';
import { ConfirmationButtonComponent } from './components/confirmation-button/confirmation-button.component';
import { AcceptResumeComponent } from './components/accept-resume/accept-resume.component';
import { AddressModule } from '../address/address.module';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		ConfirmationMainComponent,
		CartResumeComponent,
		AddressResumeComponent,
		ConfirmationButtonComponent,
		AcceptResumeComponent,
	],
	imports: [CommonModule, ComponentsModule, AddressModule, RouterModule],
})
export class ConfirmationModule {}
