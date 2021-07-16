import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgencyListComponent } from './agency-list/agency-list.component';
import { AgencyDetailComponent } from './agency-detail/agency-detail.component';
import { AgencyHomeComponent } from './agency-home/agency-home.component';
import { AgencyLocationComponent } from './agency-location/agency-location.component';



const routes: Routes = [
  {
    path: 'list',
    component: AgencyListComponent
  },
  {
    path: 'detail/:id',
    component: AgencyDetailComponent
  },
  {
    path: 'location/:id',
    component: AgencyLocationComponent
  },
  {
    path: '',
    component: AgencyHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencyRoutingModule { }
