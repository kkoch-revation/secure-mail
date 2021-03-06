import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'communicator',
    pathMatch: 'full'
  },
  {
    path: 'communicator/:id',
    loadChildren: () => import('./communicator/communicator.module').then( m => m.CommunicatorPageModule)
  },
  {
    path: 'dashboard/:id',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'appointments/:id',
    loadChildren: () => import('./appointments/appointments.module').then( m => m.AppointmentsPageModule)
  },
  {
    path: 'settings/:id',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'account/:id',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'contact/:id',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
