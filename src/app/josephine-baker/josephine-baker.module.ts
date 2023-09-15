import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JosephineBakerPageRoutingModule } from './josephine-baker-routing.module';

import { JosephineBakerPage } from './josephine-baker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JosephineBakerPageRoutingModule
  ],
  declarations: [JosephineBakerPage]
})
export class JosephineBakerPageModule {}
