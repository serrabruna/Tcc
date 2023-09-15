import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavinciPageRoutingModule } from './davinci-routing.module';

import { DavinciPage } from './davinci.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavinciPageRoutingModule
  ],
  declarations: [DavinciPage]
})
export class DavinciPageModule {}
