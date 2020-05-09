import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactPage } from './contact.page';

import { ContactPageRoutingModule } from './contact-routing.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ContactPageRoutingModule
    ],
    declarations: [ ContactPage ]
})
export class ContactPageModule {
}
