import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressMainComponent } from './address-main/address-main.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { AddressFieldComponent } from './components/address-field-cep/address-field-cep.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { AddressFieldDefaultComponent } from './components/address-field-default/address-field-default.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AddressMainComponent,
		AddressFieldComponent,
		AddressFormComponent,
		AddressFieldDefaultComponent,
	],
	imports: [
		CommonModule,
		ComponentsModule,
		NgxMaskDirective,
		NgxMaskPipe,
		ReactiveFormsModule,
	],
	providers: [provideNgxMask()],
})
export class AddressModule {}
