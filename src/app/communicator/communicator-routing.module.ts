import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunicatorPage } from './communicator.page';

const routes: Routes = [
  {
    path: '',
    component: CommunicatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommunicatorPageRoutingModule {}
