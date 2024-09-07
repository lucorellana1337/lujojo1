import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarcPageRoutingModule } from './recuperarc-routing.module';

import { RecuperarcPage } from './recuperarc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RecuperarcPageRoutingModule
  ],
  declarations: [RecuperarcPage]
})
export class RecuperarcPageModule {}
