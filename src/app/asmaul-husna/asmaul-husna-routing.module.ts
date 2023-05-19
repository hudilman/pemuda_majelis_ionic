import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsmaulHusnaPage } from './asmaul-husna.page';

const routes: Routes = [
  {
    path: '',
    component: AsmaulHusnaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsmaulHusnaPageRoutingModule {}
