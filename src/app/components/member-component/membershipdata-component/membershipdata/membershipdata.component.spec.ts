import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipdataComponent } from './membershipdata.component';

describe('MembershipdataComponent', () => {
  let component: MembershipdataComponent;
  let fixture: ComponentFixture<MembershipdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
