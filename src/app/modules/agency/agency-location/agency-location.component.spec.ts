import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyLocationComponent } from './agency-location.component';

describe('AgencyLocationComponent', () => {
  let component: AgencyLocationComponent;
  let fixture: ComponentFixture<AgencyLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
