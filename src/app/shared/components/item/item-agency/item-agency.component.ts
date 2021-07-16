import { Component, Input, OnInit } from '@angular/core';
import { IItemAgency } from './iitem-agency.metadata';

@Component({
  selector: 'app-item-agency',
  templateUrl: './item-agency.component.html',
  styleUrls: ['./item-agency.component.scss']
})
export class ItemAgencyComponent implements OnInit {

  @Input() data: IItemAgency;

  public randomImage: string = 'https://picsum.photos/id/xxx/200/200';

  constructor() { }

  ngOnInit() {
    let randomNum = (Math.random()*100).toFixed();    
    this.randomImage = this.randomImage.replace('xxx', randomNum);
  }

}
