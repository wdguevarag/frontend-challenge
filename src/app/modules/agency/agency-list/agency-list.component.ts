import { Component, OnInit } from '@angular/core';
import { AGENCIES } from 'src/app/data/constants/agencies.const';
import { IItemAgency } from 'src/app/shared/components/item/item-agency/iitem-agency.metadata';

@Component({
  selector: 'app-agency-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.scss']
})
export class AgencyListComponent implements OnInit {

  public agencies: IItemAgency[] = JSON.parse(localStorage.getItem('agencies'));

  public loading: boolean = true;

  public filterPost = '';

  public newId;

  constructor() {  
  }

  ngOnInit() {
    if(!localStorage.getItem('agencies')) {
      localStorage.setItem('agencies', JSON.stringify(AGENCIES))
      this.agencies = JSON.parse(localStorage.getItem('agencies'))
    };

    this.newId = this.agencies.length;
  }

}
