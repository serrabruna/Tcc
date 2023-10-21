import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntrevistasPageRoutingModule } from './entrevistas-routing.module';

import { EntrevistasPage } from './entrevistas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntrevistasPageRoutingModule
  ],
  declarations: [EntrevistasPage]
})
export class EntrevistasPageModule {}


