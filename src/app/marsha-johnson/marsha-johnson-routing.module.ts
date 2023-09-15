import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarshaJohnsonPage } from './marsha-johnson.page';

const routes: Routes = [
  {
    path: '',
    component: MarshaJohnsonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarshaJohnsonPageRoutingModule {}
