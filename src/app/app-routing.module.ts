import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainBodyComponent } from './layout/main-body/main-body.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/agency',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainBodyComponent,
    children: [
      {
        path: 'agency',
        loadChildren: () =>
        import('./modules/agency/agency.module').then( (m) => m.AgencyModule)
      },
      {
        path: '**',
        redirectTo: '/agency',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/agency',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
