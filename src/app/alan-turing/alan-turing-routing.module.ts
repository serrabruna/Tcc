import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlanTuringPage } from './alan-turing.page';

const routes: Routes = [
  {
    path: '',
    component: AlanTuringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlanTuringPageRoutingModule {}
