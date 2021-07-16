import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgencyListComponent } from './agency-list/agency-list.component';
import { AgencyDetailComponent } from './agency-detail/agency-detail.component';
import { AgencyRoutingModule } from './agency-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgencyHomeComponent } from './agency-home/agency-home.component';

import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { AgencyLocationComponent } from './agency-location/agency-location.component';

@NgModule({
  declarations: [AgencyListComponent, AgencyDetailComponent, AgencyHomeComponent, FilterPipe, AgencyLocationComponent],
  imports: [
    CommonModule,
    AgencyRoutingModule,
    SharedModule
  ]
})
export class AgencyModule { }
