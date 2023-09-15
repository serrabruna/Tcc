import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlanTuringPageRoutingModule } from './alan-turing-routing.module';

import { AlanTuringPage } from './alan-turing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlanTuringPageRoutingModule
  ],
  declarations: [AlanTuringPage]
})
export class AlanTuringPageModule {}
