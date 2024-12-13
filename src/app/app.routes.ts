import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'logueo',
    pathMatch: 'full',
  },
  {path: 'logueo', loadComponent: ()=> import('./logueo/logueo.page').then(m=>m.LogueoPage)},
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup.page').then( m => m.SignupPage)
  },
  {
    path: 'client-page',
    loadComponent: () => import('./client-page/client-page.page').then( m => m.ClientPagePage)
  },
  {
    path: 'citas-client',
    loadComponent: () => import('./citas-client/citas-client.page').then( m => m.CitasClientPage)
  },
  {
    path: 'schedule-client',
    loadComponent: () => import('./schedule-client/schedule-client.page').then( m => m.ScheduleClientPage)
  },
  {
    path: 'doc-page',
    loadComponent: () => import('./doc-page/doc-page.page').then( m => m.DocPagePage)
  },
  {
    path: 'citas-doc',
    loadComponent: () => import('./citas-doc/citas-doc.page').then( m => m.CitasDocPage)
  },
  {
    path: 'registro-doc',
    loadComponent: () => import('./registro-doc/registro-doc.page').then( m => m.RegistroDocPage)
  },
  
  
];
