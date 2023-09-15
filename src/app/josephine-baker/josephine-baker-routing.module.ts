import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JosephineBakerPage } from './josephine-baker.page';

const routes: Routes = [
  {
    path: '',
    component: JosephineBakerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JosephineBakerPageRoutingModule {}
