import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaluhiaPage } from './maluhia.page';

const routes: Routes = [
  {
    path: '',
    component: MaluhiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaluhiaPageRoutingModule {}
