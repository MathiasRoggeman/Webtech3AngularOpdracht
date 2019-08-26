import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvertredingsListComponent } from './overtredings-list.component';

describe('OvertredingsListComponent', () => {
  let component: OvertredingsListComponent;
  let fixture: ComponentFixture<OvertredingsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvertredingsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvertredingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
