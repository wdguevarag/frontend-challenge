import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAgencyComponent } from './item-agency.component';

describe('ItemAgencyComponent', () => {
  let component: ItemAgencyComponent;
  let fixture: ComponentFixture<ItemAgencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemAgencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
