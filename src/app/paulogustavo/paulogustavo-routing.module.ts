import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaulogustavoPage } from './paulogustavo.page';

const routes: Routes = [
  {
    path: '',
    component: PaulogustavoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaulogustavoPageRoutingModule {}
