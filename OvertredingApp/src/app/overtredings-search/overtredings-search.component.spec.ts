import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvertredingsSearchComponent } from './overtredings-search.component';

describe('OvertredingsSearchComponent', () => {
  let component: OvertredingsSearchComponent;
  let fixture: ComponentFixture<OvertredingsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvertredingsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvertredingsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
