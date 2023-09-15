import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavinciPage } from './davinci.page';

const routes: Routes = [
  {
    path: '',
    component: DavinciPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavinciPageRoutingModule {}
