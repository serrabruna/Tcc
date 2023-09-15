import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarshaJohnsonPageRoutingModule } from './marsha-johnson-routing.module';

import { MarshaJohnsonPage } from './marsha-johnson.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarshaJohnsonPageRoutingModule
  ],
  declarations: [MarshaJohnsonPage]
})
export class MarshaJohnsonPageModule {}
