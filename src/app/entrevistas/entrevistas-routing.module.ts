import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntrevistasPage } from './entrevistas.page';

const routes: Routes = [
  {
    path: '',
    component: EntrevistasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntrevistasPageRoutingModule {}
