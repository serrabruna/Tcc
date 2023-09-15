import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaulogustavoPageRoutingModule } from './paulogustavo-routing.module';

import { PaulogustavoPage } from './paulogustavo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaulogustavoPageRoutingModule
  ],
  declarations: [PaulogustavoPage]
})
export class PaulogustavoPageModule {}
