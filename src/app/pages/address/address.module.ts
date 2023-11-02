import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressMainComponent } from './address-main/address-main.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { AddressFieldComponent } from './components/address-field-cep/address-field-cep.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { AddressFieldDefaultComponent } from './components/address-field-default/address-field-default.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

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
		ReactiveFormsModule,
		FormsModule,
		NgxMaskDirective,
		NgxMaskPipe,
	],
	providers: [provideNgxMask()],
})
export class AddressModule {}
